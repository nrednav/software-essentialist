import { fizzbuzz } from "./fizzbuzz";
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

  it("does not accept a number greater than 100", () => {
    const input = 101;
    expect(() => fizzbuzz(input)).toThrow();
  });

  it("returns Fizz for numbers which are multiples of 3", () => {
    const input = 3;
    const output = fizzbuzz(input);
    expect(output).toBe("Fizz");
  });

  it("returns Buzz for numbers which are multiples of 5", () => {
    const input = 5;
    const output = fizzbuzz(input);
    expect(output).toBe("Buzz");
  });

  it("returns FizzBuzz for numbers which are multiples of both 3 and 5", () => {
    const input = 15;
    const output = fizzbuzz(input);
    expect(output).toBe("FizzBuzz");
  });
});
