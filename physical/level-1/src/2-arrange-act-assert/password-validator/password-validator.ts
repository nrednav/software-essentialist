type ValidationResult = {
  result: boolean;
  errors: string[];
};

export const validatePassword = (password: string): ValidationResult => {
  const errors: string[] = [];

  if (password.length < 5) {
    errors.push("Password is too short");
  }

  if (password.length > 15) {
    errors.push("Password is too long");
  }

  if (/\d/g.test(password) === false) {
    errors.push("Password does not contain any digits");
  }

  if (/[A-Z]/g.test(password) === false) {
    errors.push("Password does not contain any uppercase letter");
  }

  return { result: errors.length === 0, errors: errors };
};
