import { expect, test } from "bun:test";
import { serviceV2Pages } from "../../src/data/serviceV2Pages";

const lead = serviceV2Pages.find((p) => p.path === "/lead-generation-agency-bangalore");

test("lead gen hero metrics show the supplied figures with ₹16 Cr+ replacing $2M+", () => {
  expect(lead?.heroStats).toEqual([
    ["300%+", "Avg. Pipeline Lift"],
    ["50+", "Funnel Audits Delivered"],
    ["₹16 Cr+", "Client Revenue Generated"],
    ["4.9/5", "Client Rating"],
  ]);
});

test("lead gen revenue card shows ₹16 Cr+ Client Revenue Generated", () => {
  expect(lead?.aboutCard).toEqual({ value: "₹16 Cr+", label: "Client Revenue Generated" });
});

test("lead gen two-colour headings carry the supplied highlights", () => {
  expect([lead?.about.title, lead?.about.highlight]).toEqual(["Turn Ad Spend Into", "Sales-Ready Enquiries."]);
  expect([lead?.why.pre, lead?.why.highlight]).toEqual(["Lead Strategy Tied", "Directly To Sales."]);
  expect([lead?.deliverables.title, lead?.deliverables.highlight]).toEqual(["Measurable Gains Across", "Leads, Bookings, And Sales."]);
  expect([lead?.framework.title, lead?.framework.highlight]).toEqual(["Five Steps From First Click To", "Closed Deal."]);
});

test("lead gen industries copy is tailored per industry", () => {
  expect(lead?.industries?.items?.[0]?.text).toBe("High-intent search funnels that turn software evaluations into booked demos.");
  expect(lead?.industries?.items?.[8]?.text).toBe("Direct booking ad funnels that fill rooms and packages without commissions.");
});
