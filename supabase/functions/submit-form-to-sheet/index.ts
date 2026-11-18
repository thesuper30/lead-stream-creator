// Receives every website form submission and POSTs it to the Google Apps Script
// web app (GOOGLE_SHEETS_WEBAPP_URL), which appends it as a row in the Google Sheet.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { getCorsHeaders, handleCorsPreFlight } from "../_shared/cors.ts";
import { checkRateLimit } from "../_shared/rate-limit.ts";

const MAX_KEYS = 80;
const MAX_KEY_LEN = 80;
const MAX_VALUE_LEN = 3000;
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const clean = (input: unknown, limit = MAX_KEYS): Record<string, string> => {
  const out: Record<string, string> = {};
  if (!input || typeof input !== "object" || Array.isArray(input)) return out;
  for (const [k, v] of Object.entries(input as Record<string, unknown>).slice(0, limit)) {
    const key = String(k).trim().slice(0, MAX_KEY_LEN);
    if (!key || v === undefined || v === null) continue;
    out[key] = String(v).slice(0, MAX_VALUE_LEN);
  }
  return out;
};

const formatIst = (date: Date) => {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
      .formatToParts(date)
      .map((p) => [p.type, p.value]),
  );
  return `${parts.day} ${parts.month} ${parts.year} ${parts.hour}:${parts.minute} ${String(parts.dayPeriod).toUpperCase()} IST`;
};

Deno.serve(async (req) => {
  const preflight = handleCorsPreFlight(req);
  if (preflight) return preflight;
  const corsHeaders = getCorsHeaders(req.headers.get("origin"));
  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

  if (req.method !== "POST") return json({ ok: false, error: "Method not allowed" }, 405);

  const webAppUrl = Deno.env.get("GOOGLE_SHEETS_WEBAPP_URL");
  if (!webAppUrl || !/^https:\/\/script\.google(usercontent)?\.com\//.test(webAppUrl)) {
    console.error("GOOGLE_SHEETS_WEBAPP_URL is missing or not a Google Apps Script URL");
    return json({ ok: false, error: "Google Sheet link is not set up" }, 503);
  }

  let body: Record<string, unknown>;
  try {
    const raw = await req.text();
    if (raw.length > 60_000) return json({ ok: false, error: "Submission too large" }, 413);
    body = JSON.parse(raw);
  } catch {
    return json({ ok: false, error: "Invalid JSON" }, 400);
  }

  const formName = String(body.form_name ?? "Website Form").slice(0, 120);
  const formId = String(body.form_id ?? "").slice(0, 120);
  const triggerType = String(body.trigger_type ?? "").slice(0, 40);
  const fields = clean(body.fields, 40);
  const tracking = clean(body.tracking, 40);
  if (Object.keys(fields).length === 0) return json({ ok: false, error: "No form fields" }, 400);

  const rate = await checkRateLimit(req, corsHeaders, { operation: "submit_form_to_sheet", limit: 30 });
  if (!rate.allowed) return rate.response!;

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "";
  const server: Record<string, string> = { "IP Address": ip, City: "", State: "", Country: "" };

  const sessionId = typeof body.session_id === "string" && UUID_RE.test(body.session_id) ? body.session_id : "";
  if (sessionId) {
    try {
      const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
      const { data } = await supabase
        .from("sessions")
        .select("ip_address, ip_city, ip_state, ip_country")
        .eq("id", sessionId)
        .maybeSingle();
      if (data) {
        server["IP Address"] = data.ip_address || ip;
        server.City = data.ip_city && data.ip_city !== "Unknown" ? data.ip_city : "";
        server.State = data.ip_state && data.ip_state !== "Unknown" ? data.ip_state : "";
        server.Country = data.ip_country && data.ip_country !== "Unknown" ? data.ip_country : "";
      }
    } catch (error) {
      console.error("Session lookup failed:", error);
    }
  }

  const row: Record<string, string> = {
    "Submitted At (IST)": formatIst(new Date()),
    "Form Name": formName,
    "Form ID": formId,
    "Form Type": triggerType,
    ...fields,
    ...tracking,
    ...server,
    "Session ID": sessionId,
  };

  try {
    const upstream = await fetch(webAppUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ form_name: formName, row }),
      redirect: "follow",
    });
    const text = await upstream.text();
    let status = "";
    try {
      status = JSON.parse(text)?.status ?? "";
    } catch {
      status = "";
    }
    if (!upstream.ok || status !== "success") {
      console.error(`Apps Script failed [${upstream.status}]: ${text.slice(0, 500)}`);
      return json({ ok: false, error: "Google Sheet did not accept the row", status: upstream.status }, 502);
    }
    return json({ ok: true });
  } catch (error) {
    console.error("Apps Script request error:", error);
    return json({ ok: false, error: "Could not reach Google Sheet" }, 502);
  }
});
