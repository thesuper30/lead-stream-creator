import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";

const src = readFileSync(new URL("../../src/components/landing/AiSeoV2Page.tsx", import.meta.url), "utf8");

test("SEO page hero metrics are about keywords ranked and rankings", () => {
  expect(src).toContain('["10,000+", "Keywords Ranked"]');
  expect(src).toContain('["3,500+", "Page-1 Rankings"]');
});
