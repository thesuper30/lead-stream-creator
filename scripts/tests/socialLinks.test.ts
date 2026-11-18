import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";

const read = (relative: string) =>
  readFileSync(new URL(relative, import.meta.url), "utf8");

const footer = read("../../src/components/landing/Footer.tsx");
const contact = read("../../src/pages/Contact.tsx");
const organization = JSON.parse(read("../../src/data/organization.json"));
const blogSection = read("../../src/components/landing/BlogSection.tsx");
const pmBlogSection = read("../../src/components/pm/PMBlogSection.tsx");

const LINKEDIN = "https://www.linkedin.com/company/thesuper30ai/";
const X = "https://x.com/thesuper30ai";
const INSTAGRAM = "https://www.instagram.com/the_super30.ai/";

describe("Social media profile links", () => {
  test("footer links to the supplied LinkedIn, X and Instagram profiles", () => {
    expect(footer).toContain(LINKEDIN);
    expect(footer).toContain(X);
    expect(footer).toContain(INSTAGRAM);
  });

  test("footer has no YouTube entry", () => {
    expect(footer.toLowerCase()).not.toContain("youtube");
  });

  test("contact page links to the supplied LinkedIn, X and Instagram profiles", () => {
    expect(contact).toContain(LINKEDIN);
    expect(contact).toContain(X);
    expect(contact).toContain(INSTAGRAM);
  });

  test("contact page has no YouTube entry", () => {
    expect(contact.toLowerCase()).not.toContain("youtube");
  });

  test("organization schema sameAs lists the three profiles and no YouTube", () => {
    expect(organization.sameAs).toContain(LINKEDIN);
    expect(organization.sameAs).toContain(X);
    expect(organization.sameAs).toContain(INSTAGRAM);
    expect(organization.sameAs.join(" ").toLowerCase()).not.toContain("youtube");
  });
});

describe("Blog articles section", () => {
  test("blog sections are hidden until new posts are published", () => {
    expect(blogSection).toContain("export const SHOW_BLOG_SECTION = false;");
    expect(blogSection).toContain("if (!SHOW_BLOG_SECTION) return null;");
    expect(pmBlogSection).toContain("if (!SHOW_BLOG_SECTION) return null;");
  });
});
