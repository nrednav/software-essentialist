export const palindrome = (input: string): boolean => {
  return input === input.split("").reverse().join("");
};
