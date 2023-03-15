import fizzbuzz from "./fizzbuzz";
import { describe, expect, it } from "vitest";

describe("fizzbuzz", () => {
  it("takes a number and outputs a string", () => {
    const input = 4;
    const output = fizzbuzz(input);
    expect(output).toEqual(input.toString());
  });

  it("does not accept a number less than 1", () => {
    const input = 0;
    expect(() => fizzbuzz(input)).toThrow();
  });
});
