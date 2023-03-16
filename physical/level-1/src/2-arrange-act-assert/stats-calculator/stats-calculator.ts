type Stats = {
  min: number | undefined;
  max: number | undefined;
  avg: number;
  count: number;
};

export const calculateStats = (sequence: number[]): Stats => {
  if (sequence.length === 0)
    throw new Error("Cannot calculate stats for an empty sequence");

  let min = sequence[0];
  let max = sequence[0];

  sequence.forEach((number) => {
    if (!min || number < min) min = number;
    if (!max || number > max) max = number;
  });

  const sum = sequence.reduce((a, b) => a + b, 0);
  const avg = sum / sequence.length;
  const count = sequence.length;

  return { min, max, avg, count };
};
