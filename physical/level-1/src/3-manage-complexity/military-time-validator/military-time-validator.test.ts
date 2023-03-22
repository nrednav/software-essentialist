import { describe, expect, it } from "vitest";
import { isValidMilitaryTimeRange } from "./military-time-validator";

describe("Military Time Validator", () => {
  it("knows 01:12 - 14:32 is a valid time range", () => {
    const input = "01:12 - 14:32"
    const output = isValidMilitaryTimeRange(input);
    expect(output).toBe(true)
  })
})
