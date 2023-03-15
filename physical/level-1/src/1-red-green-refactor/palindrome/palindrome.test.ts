import { palindrome } from "./palindrome";
import { describe, expect, it } from "vitest";

describe("palindrome", () => {
  it("takes a string and returns a boolean", () => {
    const input = "hello world";
    const output = palindrome(input);
    expect(output).toBe(false);
  });

  it("can detect when a word is a palindrome", () => {
    const inputs = ["mom", "wow"];
    const outputs = inputs.map(palindrome);
    outputs.forEach((output) => expect(output).toBe(true));
  });

  it("can detect when a word is not a palindrome", () => {
    const inputs = ["hello", "world"];
    const outputs = inputs.map(palindrome);
    outputs.forEach((output) => expect(output).toBe(false));
  });

  it("is case insensitive", () => {
    const inputs = ["Mom", "WOW"];
    const outputs = inputs.map(palindrome);
    outputs.forEach((output) => expect(output).toBe(true));
  });

  it("can detect when phrases are palindromes", () => {
    const inputs = ["Never Odd or Even", "Stanley Yelnats"];
    const outputs = inputs.map(palindrome);
    outputs.forEach((output) => expect(output).toBe(true));
  });
});
