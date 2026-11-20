import { describe, expect, test } from "bun:test";
import seo from "../../src/data/seoMeta.json";

const meta = seo as Record<string, Record<string, string>>;

describe("Page meta from the SEO sheet", () => {
  test("SEO page uses the sheet's OG title", () => {
    expect(meta["/seo-company-bangalore"].ogTitle).toBe("Your Competitors Are Ranking on Google. Why Aren't You?");
  });

  test("homepage uses the sheet's OG title and description", () => {
    expect(meta["/homepage"].ogTitle).toBe("Stop Guessing. Start Growing With AI-Powered Marketing.");
    expect(meta["/homepage"].ogDescription).toBe("From strategy to execution, Super 30 delivers proven 10x revenue growth. Book your free call now!");
  });

  test("Content Marketing page uses the sheet's Content Writing keywords", () => {
    expect(meta["/content-marketing-agency-bangalore"].keywords).toBe(
      "Content Writing Agency in Bangalore, Content Writing Company in Bangalore, Content Writing Services in Bangalore",
    );
  });

  test("WordPress page description matches the sheet", () => {
    expect(meta["/wordpress-website-development-company-bangalore"].description.endsWith("Let's Build!")).toBe(true);
  });
});

describe("Content Writing page meta", () => {
  test("uses the live Content Writing page's title and description", () => {
    const page = meta["/content-writing-agency-bangalore"];
    expect(page.title).toBe("Copywriting & Content Writing Agency in Bangalore");
    expect(page.description).toBe(
      "Copywriting done by experienced writers, customized for your business. Content writing services in Bangalore that build authority and trust for brands.",
    );
    expect(page.canonical).toBe("https://www.thesuper30.ai/content-writing-agency-bangalore");
  });
});
