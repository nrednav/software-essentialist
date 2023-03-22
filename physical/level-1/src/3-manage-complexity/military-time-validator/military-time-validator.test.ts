import { isValidMilitaryTimeRange } from "./military-time-validator";
import { describe, expect, test } from "vitest";

describe("Military Time Validator", () => {
  test.each([
    ["01:12 - 14:32", true],
    ["25:00 - 12:23", false],
    ["22:00 - 23:12", true],
    ["01:23 - 45:67", false],
    ["00:00 - 23:59", true],
    ["11:45 - 24:42", false],
    ["03:15 - 15:15", true],
    ["18:45 - 02:24", true],
    ["-23:24 - 14:45", false],
  ])("isValidMilitaryTimeRange(%s) -> %s", (input, expected) => {
    expect(isValidMilitaryTimeRange(input)).toBe(expected);
  });
});
