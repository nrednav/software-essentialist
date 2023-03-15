type ValidationResult = {
  result: boolean;
  errors: string[];
};

export const validatePassword = (password: string): ValidationResult => {
  if (password.length < 5)
    return { result: false, errors: ["Password is too short"] };
  if (password.length > 15)
    return { result: false, errors: ["Password is too long"] };
  if (/\d/g.test(password) === false)
    return {
      result: false,
      errors: ["Password does not contain any digits"],
    };
  return { result: true, errors: [] };
};
