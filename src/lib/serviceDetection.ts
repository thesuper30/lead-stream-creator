/**
 * Detects the current service from the URL path and provides
 * service-specific form headlines.
 */

const SERVICE_MAP: Record<string, string> = {
  "/digital-marketing": "digital-marketing",
  "/ai-seo-agency-bangalore": "ai-seo",
  "/performance-marketing": "lead-generation",
  "/social-media-post-design": "social-media",
  "/design": "design",
  "/web-design-development": "web-design",
};

const HEADLINE_MAP: Record<string, string> = {
  "digital-marketing": "Get Your Free Digital Marketing Strategy",
  "ai-seo": "Get Your AI SEO Growth Plan",
  "lead-generation": "Get High-Intent Leads for Your Business",
  "social-media": "Get Scroll-Stopping Social Media Content",
  "design": "Upgrade Your Brand Design Strategy",
  "web-design": "Get a High-Converting Website Design",
};

export const detectService = (): string => {
  const path = window.location.pathname;
  return SERVICE_MAP[path] || "general";
};

export const getServiceHeadline = (service: string): string | null => {
  return HEADLINE_MAP[service] || null;
};
