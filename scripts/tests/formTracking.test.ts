import { describe, expect, test } from "bun:test";
import { deriveTrafficSource, formatIst, normalizeFormFields, readCampaignParams } from "../../src/lib/formTracking";

const HOST = "thesuper30.ai";

describe("form source tracking", () => {
  test("UTM source and medium win over the referrer", () => {
    expect(deriveTrafficSource({ utm_source: "newsletter", utm_medium: "email" }, "https://www.google.com/", HOST)).toEqual({
      source: "newsletter",
      medium: "email",
    });
  });

  test("Google Ads click id is labelled as Google Ads cpc", () => {
    expect(deriveTrafficSource({ gclid: "abc" }, "", HOST)).toEqual({ source: "Google Ads", medium: "cpc" });
  });

  test("Google search referrer is organic", () => {
    expect(deriveTrafficSource({}, "https://www.google.co.in/", HOST)).toEqual({ source: "Google", medium: "organic" });
  });

  test("no referrer or own site is Direct", () => {
    expect(deriveTrafficSource({}, "", HOST).source).toBe("Direct");
    expect(deriveTrafficSource({}, "https://www.thesuper30.ai/our-work", HOST).source).toBe("Direct");
  });

  test("ChatGPT referrer is an AI referral", () => {
    expect(deriveTrafficSource({}, "https://chatgpt.com/", HOST)).toEqual({ source: "ChatGPT", medium: "ai referral" });
  });

  test("reads UTM and click ids from the page address", () => {
    expect(readCampaignParams("?utm_source=fb&utm_campaign=diwali&fbclid=x1&other=1")).toEqual({
      utm_source: "fb",
      utm_campaign: "diwali",
      fbclid: "x1",
    });
  });

  test("form keys become readable sheet columns", () => {
    expect(normalizeFormFields({ full_name: "Asha", website_url: "a.com", phone: "+919876543210", preferred_platforms: ["Google", "Meta"] })).toEqual({
      Name: "Asha",
      Website: "a.com",
      Phone: "+919876543210",
      "Preferred Platforms": "Google, Meta",
    });
  });

  test("submission time uses DD MM YYYY hh:mm A IST", () => {
    expect(formatIst("2026-11-18T17:30:00Z")).toBe("18 11 2026 11:00 PM IST");
  });
});
