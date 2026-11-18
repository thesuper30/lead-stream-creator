/**
 * Central submission for every website form.
 * Sends each entry to the Google Sheet (via the submit-form-to-sheet backend
 * function, which POSTs to the Google Apps Script web app) and to Web3Forms email.
 */
import { getTrackingFields, normalizeFormFields } from "@/lib/formTracking";

const WEB3FORMS_ACCESS_KEY = "0a6e76cf-34fb-47e4-9f75-38a127adfd45";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const SHEET_FUNCTION_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-form-to-sheet`;
const PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

export interface FormSubmitPayload {
  form_id: string;
  form_name: string;
  page_url: string;
  trigger_type: "popup" | "embedded" | "exit_intent" | "button" | "scroll" | "form_submit";
  data: Record<string, unknown>;
}

export interface FormSubmitResult {
  success: boolean;
  sheet?: boolean;
  error?: string;
}

const sendToSheet = async (payload: FormSubmitPayload): Promise<boolean> => {
  let sessionId: string | null = null;
  try {
    sessionId = localStorage.getItem("seo_session_id");
  } catch {
    sessionId = null;
  }
  // keepalive lets the request finish even when the page redirects to /thank-you
  const response = await fetch(SHEET_FUNCTION_URL, {
    method: "POST",
    keepalive: true,
    headers: {
      "Content-Type": "application/json",
      apikey: PUBLISHABLE_KEY,
      Authorization: `Bearer ${PUBLISHABLE_KEY}`,
    },
    body: JSON.stringify({
      form_id: payload.form_id,
      form_name: payload.form_name,
      trigger_type: payload.trigger_type,
      session_id: sessionId,
      fields: normalizeFormFields(payload.data),
      tracking: getTrackingFields(payload.page_url),
    }),
  });
  if (!response.ok) {
    console.error("Google Sheet submission failed:", response.status, await response.text().catch(() => ""));
    return false;
  }
  const result = await response.json().catch(() => null);
  return result?.ok === true;
};

const sendToEmail = async (payload: FormSubmitPayload): Promise<boolean> => {
  const response = await fetch(WEB3FORMS_URL, {
    method: "POST",
    keepalive: true,
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `${payload.form_name} — ${payload.form_id}`,
      from_name: "The Super 30 Website",
      form_id: payload.form_id,
      form_name: payload.form_name,
      page_url: payload.page_url,
      trigger_type: payload.trigger_type,
      ...payload.data,
    }),
  });
  const result = await response.json().catch(() => null);
  return result?.success === true;
};

export const submitFormToGoogleSheets = async (payload: FormSubmitPayload): Promise<FormSubmitResult> => {
  const [sheet, email] = await Promise.allSettled([sendToSheet(payload), sendToEmail(payload)]);
  const sheetOk = sheet.status === "fulfilled" && sheet.value;
  const emailOk = email.status === "fulfilled" && email.value;
  if (sheet.status === "rejected") console.error("Google Sheet submission error:", sheet.reason);
  if (sheetOk || emailOk) return { success: true, sheet: sheetOk };
  return { success: false, sheet: false, error: "Form submission failed" };
};

export const useFormSubmit = () => {
  const submitForm = async (payload: FormSubmitPayload): Promise<FormSubmitResult> => submitFormToGoogleSheets(payload);
  return { submitForm };
};
