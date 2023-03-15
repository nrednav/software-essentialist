import { validatePassword } from "./password-validator";
import { describe, expect, it } from "vitest";

describe("Password Validator", () => {
  it("takes a password and returns a result", () => {
    const password = "Hello1234";
    const validation = validatePassword(password);
    expect(validation.result).toBe(true);
    expect(validation.errors.length).toBe(0);
  });

  it("invalidates a password that is less than 5 characters long", () => {
    const password = "Sky";
    const validation = validatePassword(password);
    expect(validation.result).toBe(false);
    expect(validation.errors.length).toBeGreaterThanOrEqual(1);
  });
});
