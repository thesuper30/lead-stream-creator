/**
 * Visitor attribution + page context attached to every form submission
 * so each Google Sheet row shows where the lead came from.
 */

const FIRST_TOUCH_KEY = "s30_first_touch";
const LAST_TOUCH_KEY = "s30_last_touch";
const PAGES_KEY = "s30_visit_pages";

export const CAMPAIGN_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "msclkid",
] as const;

type CampaignParam = (typeof CAMPAIGN_PARAMS)[number];
export type CampaignData = Partial<Record<CampaignParam, string>>;

export interface TouchData extends CampaignData {
  landing_page: string;
  referrer: string;
  captured_at: string;
}

export const readCampaignParams = (search: string): CampaignData => {
  const params = new URLSearchParams(search);
  const out: CampaignData = {};
  for (const key of CAMPAIGN_PARAMS) {
    const value = params.get(key)?.trim();
    if (value) out[key] = value.slice(0, 300);
  }
  return out;
};

const SEARCH_ENGINES: Record<string, string> = {
  google: "Google",
  bing: "Bing",
  yahoo: "Yahoo",
  duckduckgo: "DuckDuckGo",
  yandex: "Yandex",
  baidu: "Baidu",
  ecosia: "Ecosia",
};

const SOCIAL_SITES: Record<string, string> = {
  facebook: "Facebook",
  "fb.com": "Facebook",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  "lnkd.in": "LinkedIn",
  "t.co": "X (Twitter)",
  "twitter.com": "X (Twitter)",
  "x.com": "X (Twitter)",
  youtube: "YouTube",
  whatsapp: "WhatsApp",
  pinterest: "Pinterest",
  reddit: "Reddit",
  quora: "Quora",
};

const AI_SITES: Record<string, string> = {
  "chatgpt.com": "ChatGPT",
  "chat.openai.com": "ChatGPT",
  perplexity: "Perplexity",
  "gemini.google": "Gemini",
  copilot: "Copilot",
  "claude.ai": "Claude",
};

const matchHost = (host: string, table: Record<string, string>) => {
  for (const [needle, label] of Object.entries(table)) {
    if (host === needle || host.endsWith(`.${needle}`) || host.includes(needle)) return label;
  }
  return null;
};

/** Works out a human-readable source + medium, like Google Analytics does. */
export const deriveTrafficSource = (
  campaign: CampaignData,
  referrer: string,
  ownHost: string,
): { source: string; medium: string } => {
  if (campaign.utm_source) {
    return { source: campaign.utm_source, medium: campaign.utm_medium || "(not set)" };
  }
  if (campaign.gclid) return { source: "Google Ads", medium: "cpc" };
  if (campaign.msclkid) return { source: "Microsoft Ads", medium: "cpc" };
  if (campaign.fbclid) return { source: "Facebook", medium: "social" };

  let host = "";
  try {
    host = referrer ? new URL(referrer).hostname.replace(/^www\./, "").toLowerCase() : "";
  } catch {
    host = "";
  }
  const own = ownHost.replace(/^www\./, "").toLowerCase();
  if (!host || host === own) return { source: "Direct", medium: "(none)" };

  const ai = matchHost(host, AI_SITES);
  if (ai) return { source: ai, medium: "ai referral" };
  const search = matchHost(host, SEARCH_ENGINES);
  if (search) return { source: search, medium: "organic" };
  const social = matchHost(host, SOCIAL_SITES);
  if (social) return { source: social, medium: "social" };
  return { source: host, medium: "referral" };
};

const safeGet = (store: Storage, key: string) => {
  try {
    return store.getItem(key);
  } catch {
    return null;
  }
};
const safeSet = (store: Storage, key: string, value: string) => {
  try {
    store.setItem(key, value);
  } catch {
    /* storage blocked — tracking is best effort */
  }
};

const readJson = <T,>(store: Storage, key: string): T | null => {
  const raw = safeGet(store, key);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
};

/** Call on every route change. Stores first + latest campaign touch and the pages viewed this visit. */
export const trackPageView = () => {
  if (typeof window === "undefined") return;
  const campaign = readCampaignParams(window.location.search);
  const now = new Date().toISOString();
  const touch: TouchData = {
    landing_page: window.location.href,
    referrer: document.referrer || "",
    captured_at: now,
    ...campaign,
  };

  if (!readJson<TouchData>(localStorage, FIRST_TOUCH_KEY)) {
    safeSet(localStorage, FIRST_TOUCH_KEY, JSON.stringify(touch));
  }
  if (Object.keys(campaign).length > 0 || !readJson<TouchData>(sessionStorage, LAST_TOUCH_KEY)) {
    safeSet(sessionStorage, LAST_TOUCH_KEY, JSON.stringify(touch));
    if (Object.keys(campaign).length > 0) safeSet(localStorage, LAST_TOUCH_KEY, JSON.stringify(touch));
  }

  const pages = readJson<string[]>(sessionStorage, PAGES_KEY) ?? [];
  const path = window.location.pathname + window.location.search;
  if (pages[pages.length - 1] !== path) pages.push(path);
  safeSet(sessionStorage, PAGES_KEY, JSON.stringify(pages.slice(-50)));
};

const detectDevice = (ua: string) => {
  if (/iPad|Tablet|PlayBook|Silk/i.test(ua) || (/Android/i.test(ua) && !/Mobile/i.test(ua))) return "Tablet";
  if (/Mobi|iPhone|iPod|Android/i.test(ua)) return "Mobile";
  return "Desktop";
};

const detectBrowser = (ua: string) => {
  if (ua.includes("SamsungBrowser")) return "Samsung Browser";
  if (ua.includes("OPR") || ua.includes("Opera")) return "Opera";
  if (ua.includes("Edg")) return "Edge";
  if (ua.includes("Firefox") || ua.includes("FxiOS")) return "Firefox";
  if (ua.includes("Chrome") || ua.includes("CriOS")) return "Chrome";
  if (ua.includes("Safari")) return "Safari";
  return "Other";
};

const detectOs = (ua: string) => {
  if (/iPhone|iPad|iPod/i.test(ua)) return "iOS";
  if (/Android/i.test(ua)) return "Android";
  if (/Windows/i.test(ua)) return "Windows";
  if (/Mac OS X|Macintosh/i.test(ua)) return "macOS";
  if (/CrOS/i.test(ua)) return "ChromeOS";
  if (/Linux/i.test(ua)) return "Linux";
  return "Other";
};

const istFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});

/** DD MM YYYY hh:mm A IST */
export const formatIst = (iso: string | Date) => {
  const date = typeof iso === "string" ? new Date(iso) : iso;
  if (Number.isNaN(date.getTime())) return "";
  const parts = Object.fromEntries(istFormatter.formatToParts(date).map((p) => [p.type, p.value]));
  return `${parts.day} ${parts.month} ${parts.year} ${parts.hour}:${parts.minute} ${String(parts.dayPeriod).toUpperCase()} IST`;
};

/** Everything we know about where this visitor came from and what they were viewing. */
export const getTrackingFields = (pageUrl?: string): Record<string, string> => {
  if (typeof window === "undefined") return {};
  const first = readJson<TouchData>(localStorage, FIRST_TOUCH_KEY);
  const latest =
    readJson<TouchData>(sessionStorage, LAST_TOUCH_KEY) ?? readJson<TouchData>(localStorage, LAST_TOUCH_KEY) ?? first;
  const pages = readJson<string[]>(sessionStorage, PAGES_KEY) ?? [];
  const host = window.location.hostname;

  const latestSource = latest ? deriveTrafficSource(latest, latest.referrer, host) : { source: "Direct", medium: "(none)" };
  const firstSource = first ? deriveTrafficSource(first, first.referrer, host) : latestSource;
  const ua = navigator.userAgent;

  return {
    "Page URL": pageUrl || window.location.href,
    "Page Path": window.location.pathname,
    "Page Title": document.title,
    "Previous Page": pages.length > 1 ? pages[pages.length - 2] : "",
    "Pages Viewed This Visit": String(pages.length || 1),
    "Visit Journey": pages.slice(-15).join(" → "),
    "Traffic Source": latestSource.source,
    "Traffic Medium": latestSource.medium,
    "UTM Source": latest?.utm_source || "",
    "UTM Medium": latest?.utm_medium || "",
    "UTM Campaign": latest?.utm_campaign || "",
    "UTM Term": latest?.utm_term || "",
    "UTM Content": latest?.utm_content || "",
    GCLID: latest?.gclid || "",
    FBCLID: latest?.fbclid || "",
    MSCLKID: latest?.msclkid || "",
    "Visit Landing Page": latest?.landing_page || "",
    "Visit Referrer": latest?.referrer || "Direct",
    "First Traffic Source": firstSource.source,
    "First Traffic Medium": firstSource.medium,
    "First Landing Page": first?.landing_page || "",
    "First Referrer": first?.referrer || "Direct",
    "First Visit At": first?.captured_at ? formatIst(first.captured_at) : "",
    "Device Type": detectDevice(ua),
    Browser: detectBrowser(ua),
    "Operating System": detectOs(ua),
    "Screen Size": `${window.screen?.width ?? 0}x${window.screen?.height ?? 0}`,
    Language: navigator.language || "",
    "Visitor Time Zone": Intl.DateTimeFormat().resolvedOptions().timeZone || "",
    "User Agent": ua,
  };
};

const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  full_name: "Name",
  fullname: "Name",
  email: "Email",
  phone: "Phone",
  company: "Company",
  company_name: "Company",
  website: "Website",
  website_url: "Website",
  service: "Service",
  service_interest: "Service",
  message: "Message",
  role: "Role",
  current_role: "Role",
  revenue: "Monthly Revenue",
  monthly_revenue: "Monthly Revenue",
};

const titleCase = (key: string) =>
  key
    .replace(/[_-]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

/** Turns form keys (full_name, website_url…) into readable sheet column names. */
export const normalizeFormFields = (data: Record<string, unknown>): Record<string, string> => {
  const out: Record<string, string> = {};
  for (const [key, raw] of Object.entries(data)) {
    if (raw === undefined || raw === null) continue;
    const value = Array.isArray(raw) ? raw.join(", ") : typeof raw === "object" ? JSON.stringify(raw) : String(raw);
    const label = FIELD_LABELS[key.toLowerCase()] ?? titleCase(key);
    if (out[label] && !value) continue;
    out[label] = value.trim();
  }
  return out;
};
