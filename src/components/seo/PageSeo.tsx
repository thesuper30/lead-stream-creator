import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { getSeo } from "@/data/seoMeta";

const SITE = "https://www.thesuper30.ai";
const OG_IMAGE = `${SITE}/super30-social-logo.jpg`;

// Static fallback tags from index.html that Helmet would otherwise duplicate.
const STATIC_SELECTORS = [
  'meta[name="description"]',
  'meta[name="keywords"]',
  'meta[name="robots"]',
  'link[rel="canonical"]',
  'meta[property="og:title"]',
  'meta[property="og:description"]',
  'meta[property="og:url"]',
  'meta[property="og:type"]',
  'meta[name="twitter:title"]',
  'meta[name="twitter:description"]',
  'meta[name="twitter:url"]',
  'meta[name="twitter:card"]',
];

const absolute = (url: string) => (url.startsWith("http") ? url : `${SITE}${url}`);

/** Renders every head tag for a route from src/data/seoMeta.json (the SEO sheet). */
export const PageSeo = ({ path }: { path: string }) => {
  const seo = getSeo(path);

  useEffect(() => {
    if (!seo) return;
    document.head
      .querySelectorAll(STATIC_SELECTORS.map((s) => `${s}:not([data-rh])`).join(","))
      .forEach((el) => el.remove());
  }, [seo]);

  if (!seo) return null;
  const url = absolute(seo.canonical || path);
  const raw = seo as typeof seo & { robots?: string };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.keywords ? <meta name="keywords" content={seo.keywords} /> : null}
      <meta name="robots" content={raw.robots || "index, follow"} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={seo.ogTitle || seo.title} />
      <meta property="og:description" content={seo.ogDescription || seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.twitterTitle || seo.ogTitle || seo.title} />
      <meta name="twitter:description" content={seo.twitterDescription || seo.ogDescription || seo.description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:url" content={url} />
    </Helmet>
  );
};

/** Path portion of a canonical URL, e.g. "https://www.thesuper30.ai/x" -> "/x". */
export const seoPathFromCanonical = (canonical: string) =>
  canonical.replace(/^https?:\/\/[^/]+/, "").replace(/\/$/, "") || "/";
