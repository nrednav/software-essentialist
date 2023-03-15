type ValidationResult = {
  result: boolean;
  errors: string[];
};

export const validatePassword = (password: string): ValidationResult => {
  if (password.length < 5)
    return { result: false, errors: ["Password is too short"] };
  return { result: true, errors: [] };
};
