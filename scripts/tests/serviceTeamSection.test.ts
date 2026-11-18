import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";

const read = (relative: string) =>
  readFileSync(new URL(relative, import.meta.url), "utf8");

const flags = read("../../src/lib/sectionFlags.ts");
const seoPage = read("../../src/components/landing/AiSeoV2Page.tsx");
const servicePage = read("../../src/components/landing/ServiceV2Page.tsx");

describe("Service-page team section", () => {
  test("the team strip is hidden by default until the client restores it", () => {
    expect(flags).toContain("export const SHOW_SERVICE_TEAM_SECTION = false;");
  });

  test("both the SEO page and the shared service template hide it behind the flag", () => {
    expect(seoPage).toContain('import { SHOW_SERVICE_TEAM_SECTION } from "@/lib/sectionFlags";');
    expect(servicePage).toContain('import { SHOW_SERVICE_TEAM_SECTION } from "@/lib/sectionFlags";');
    expect(seoPage).toContain("{SHOW_SERVICE_TEAM_SECTION && (");
    expect(servicePage).toContain("{SHOW_SERVICE_TEAM_SECTION && (");
  });

  test("the team markup is kept, not deleted, so it can be put back later", () => {
    expect(seoPage).toContain("Meet the <span className=\"text-brand\">SEO Experts</span> Behind Your Growth");
    expect(servicePage).toContain("Behind Your Growth");
    expect(seoPage).toContain("Meet the whole team");
    expect(servicePage).toContain("Meet the whole team");
  });
});
