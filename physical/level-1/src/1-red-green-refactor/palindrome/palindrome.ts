export const palindrome = (input: string): boolean => {
  const transformedString = input.toLowerCase().replace(/\s/g, "");
  return transformedString === transformedString.split("").reverse().join("");
};
