const fizzbuzz = (input: number): string => {
  if (input < 1) throw new Error("Input is out of bounds");
  if (input > 100) throw new Error("Input is out of bounds");
  if (input % 3 === 0) return "Fizz";
  return input.toString();
};

export default fizzbuzz;
