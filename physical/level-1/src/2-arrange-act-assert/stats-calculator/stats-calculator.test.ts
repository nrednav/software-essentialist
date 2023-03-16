import { calculateStats } from "./stats-calculator";
import { describe, expect, it } from "vitest";

describe("Stats Calculator", () => {
  it("takes a sequence of numbers and returns a result", () => {
    const sequence = [2, 10, 16, 20];
    const stats = calculateStats(sequence);
    expect(stats.min).toBe(2);
    expect(stats.max).toBe(20);
    expect(stats.avg).toBe(12);
    expect(stats.count).toBe(4);
  });

  it("can calculate the minimum number in a sequence", () => {
    const sequence = [4, 10, 16, 20];
    const { min } = calculateStats(sequence);
    expect(min).toBe(4);
  });
});
