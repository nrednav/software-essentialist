import { calculateStats } from "./stats-calculator";
import { describe, expect, it } from "vitest";

describe("Stats Calculator", () => {
  it("takes a sequence of numbers and returns a result", () => {
    const sequence = [2, 4, 8, 16];
    const stats = calculateStats(sequence);
    expect(stats.min).toBe(2);
    expect(stats.max).toBe(16);
    expect(stats.avg).toBe(7.5);
    expect(stats.count).toBe(4);
  });

  it("can calculate the minimum number in a sequence", () => {
    const sequence = [4, 8, 16, 32];
    const { min } = calculateStats(sequence);
    expect(min).toBe(4);
  });

  it("can calculate the maximum number in a sequence", () => {
    const sequence = [2, 4, 8, 64];
    const { max } = calculateStats(sequence);
    expect(max).toBe(64);
  });

  it("can calculate the average value of a sequence", () => {
    const sequence = [4, 8, 16, 32];
    const { avg } = calculateStats(sequence);
    expect(avg).toBe(15);
  });
});
