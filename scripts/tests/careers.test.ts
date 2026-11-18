import { describe, expect, test } from "bun:test";
import { careerOpenings } from "../../src/data/careers";

describe("Careers vacancies", () => {
  test("lists exactly the four requested open roles", () => {
    expect(careerOpenings.map((role) => role.title)).toEqual([
      "SEO Expert",
      "E-Commerce Marketer",
      "Social Media Executive",
      "Digital Marketing Executive",
    ]);
  });
});
