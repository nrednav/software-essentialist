import { BooleanCalculator } from "./boolean-calculator";
import { describe, expect, test } from "vitest";

const evaluateTestCase = (input: string, expected: boolean) => {
  expect(BooleanCalculator.evaluate(input)).toBe(expected);
};

describe("Boolean Calculator", () => {
  describe("Evaluation of single value expressions", () => {
    test.each([
      ["TRUE", true],
      ["FALSE", false],
    ])("evaluate(%s) -> %s", evaluateTestCase);
  });

  describe("Evaluation of expressions with the NOT operator", () => {
    test.each([
      ["NOT TRUE", false],
      ["NOT FALSE", true],
    ])("evaluate(%s) -> %s", evaluateTestCase);
  });

  describe("Evaluation of expressions with the AND operator", () => {
    test.each([
      ["FALSE AND FALSE", false],
      ["FALSE AND TRUE", false],
      ["TRUE AND FALSE", false],
      ["TRUE AND TRUE", true],
    ])("evaluate(%s) -> %s", evaluateTestCase);
  });

  describe("Evaluation of expressions with the OR operator", () => {
    test.each([
      ["FALSE OR FALSE", false],
      ["FALSE OR TRUE", true],
      ["TRUE OR FALSE", true],
      ["TRUE OR TRUE", true],
    ])("evaluate(%s) -> %s", evaluateTestCase);
  });

  describe("Evaluation of expressions with multiple operators combined", () => {
    test.each([
      ["TRUE OR TRUE OR TRUE AND FALSE", true],
      ["TRUE OR FALSE AND NOT FALSE", true],
    ])("evaluate(%s) -> %s", evaluateTestCase);
  });

  describe("Evaluation of expressions with parentheses", () => {
    test.each([
      ["(TRUE OR TRUE OR TRUE) AND FALSE", false],
      ["NOT (TRUE AND TRUE)", false],
      ["(TRUE AND FALSE) OR (TRUE AND TRUE)", true],
      ["(TRUE AND FALSE OR TRUE) OR (TRUE AND TRUE AND FALSE)", true],
      ["(FALSE OR FALSE) AND (TRUE OR FALSE)", false],
    ])("evaluate(%s) -> %s", evaluateTestCase);
  });
});
