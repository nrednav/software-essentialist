import { BooleanCalculator } from "./boolean-calculator";
import { describe, expect, it } from "vitest";

describe("Boolean Calculator", () => {
  it("can evaluate single value expressions", () => {
    const inputs = ["TRUE", "FALSE"];
    const outputs = inputs.map(BooleanCalculator.evaluate);
    expect(outputs[0]).toBe(true);
    expect(outputs[1]).toBe(false);
  });
});
