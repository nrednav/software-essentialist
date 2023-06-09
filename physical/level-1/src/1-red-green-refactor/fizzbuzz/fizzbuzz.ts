export const fizzbuzz = (input: number): string => {
  if (input < 1 || input > 100) throw new Error("Input is out of bounds");
  if (input % 15 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  return input.toString();
};
