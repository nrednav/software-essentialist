import { validatePassword } from "./password-validator";
import { describe, expect, it } from "vitest";

describe("Password Validator", () => {
  it("takes a password and returns a result", () => {
    const password = "Hello1234";
    const validation = validatePassword(password);
    expect(validation.result).toBe(true);
    expect(validation.errors.length).toBe(0);
  });
});
