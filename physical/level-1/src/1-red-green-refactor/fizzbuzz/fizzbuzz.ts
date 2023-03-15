const fizzbuzz = (input: number): string => {
  if (input < 1) throw new Error("Input is out of bounds");
  return input.toString();
};

export default fizzbuzz;
