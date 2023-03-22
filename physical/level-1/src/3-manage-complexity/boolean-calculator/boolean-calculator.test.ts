import { BooleanCalculator } from "./boolean-calculator";
import { describe, expect, it } from "vitest";

describe("Boolean Calculator", () => {
  it("can evaluate single value expressions", () => {
    const inputs = ["TRUE", "FALSE"];
    const outputs = inputs.map(BooleanCalculator.evaluate);
    expect(outputs[0]).toBe(true);
    expect(outputs[1]).toBe(false);
  });

  it("can evaluate expressions with the NOT operator", () => {
    const inputs = ["NOT TRUE", "NOT FALSE"];
    const outputs = inputs.map(BooleanCalculator.evaluate);
    expect(outputs[0]).toBe(false);
    expect(outputs[1]).toBe(true);
  });

  it("can evaluate expressions with the AND operator", () => {
    const testCases = [
      ["FALSE AND FALSE", false],
      ["FALSE AND TRUE", false],
      ["TRUE AND FALSE", false],
      ["TRUE AND TRUE", true],
    ] as const;

    testCases.forEach(([input, expected]) =>
      expect(BooleanCalculator.evaluate(input)).toBe(expected)
    );
  });
});
