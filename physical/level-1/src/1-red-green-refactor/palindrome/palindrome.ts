export const palindrome = (input: string): boolean => {
  return (
    input.toLowerCase().replace(/\s/g, "") ===
    input.toLowerCase().replace(/\s/g, "").split("").reverse().join("")
  );
};
