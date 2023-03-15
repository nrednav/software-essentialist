type ValidationResult = {
  result: boolean;
  errors: string[];
};

export const validatePassword = (password: string): ValidationResult => {
  return { result: true, errors: [] };
};
