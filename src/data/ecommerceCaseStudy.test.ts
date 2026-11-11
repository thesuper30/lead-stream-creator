import { describe, expect, test } from "bun:test";
import { campaignSnapshot, keywordRankings, trafficGrowth, searchVisibility } from "./ecommerceCaseStudy";

describe("Supplied six-month e-commerce campaign results", () => {
  test("preserves monthly organic traffic", () => {
    expect(trafficGrowth.map(point => point.visitors)).toEqual([8000, 10500, 14200, 18600, 24500, 30800]);
  });
  test("preserves all keyword before and after positions", () => {
    expect(keywordRankings.map(row => [row.before, row.after])).toEqual([[42, 2], [36, 3], [51, 4], [28, 1], [63, 5], [19, 3], [45, 6], [31, 2]]);
  });
  test("preserves the revenue and conversion growth", () => {
    expect(campaignSnapshot.slice(2).map(row => [row.growth, row.before, row.after])).toEqual([["+190%", "₹12L", "₹34.8L"], ["+165%", "200", "530"]]);
  });
  test("preserves visibility gains", () => {
    expect(searchVisibility.map(row => [row.before, row.after])).toEqual([["8", "65"], ["50", "220"], ["110", "410"], ["450", "920"], ["85", "130"], ["5,200", "19,600"]]);
  });
});