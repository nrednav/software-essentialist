export const palindrome = (input: string): boolean => {
  return (
    input.toLowerCase() === input.toLowerCase().split("").reverse().join("")
  );
};
