import { isValidMilitaryTimeRange } from "./military-time-validator";
import { describe, expect, test } from "vitest";

describe("Military Time Validator", () => {
  test.each([
    ["01:12 - 14:32", true],
    ["25:00 - 12:23", false],
    ["22:00 - 23:12", true],
    ["01:23 - 45:67", false],
  ])("isValidMilitaryTimeRange(%s) -> %s", (input, output) => {
    expect(isValidMilitaryTimeRange(input)).toBe(output);
  });
});
