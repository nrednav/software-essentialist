import { calculateStats } from "./stats-calculator";
import { describe, expect, it } from "vitest";

describe("Stats Calculator", () => {
  it("calculates stats for a sequence of numbers", () => {
    const sequence = [2, 4, 8, 16];

    const { min, max, avg, count } = calculateStats(sequence);

    expect(min).toBe(2);
    expect(max).toBe(16);
    expect(avg).toBe(7.5);
    expect(count).toBe(4);
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
