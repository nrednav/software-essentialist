import { palindrome } from "./palindrome";
import { describe, expect, it } from "vitest";

describe("palindrome", () => {
  it("takes a string and returns a boolean", () => {
    const input = "hello world";
    const output = palindrome(input);
    expect(output).toEqual(false);
  });
});
