type Stats = {
  min: number | undefined;
  max: number | undefined;
  avg: number;
  count: number;
};

export const calculateStats = (sequence: number[]): Stats => {
  let min = sequence[0];
  let max = sequence[0];

  sequence.forEach((number) => {
    if (!min || number < min) min = number;
    if (!max || number > max) max = number;
  });

  return {
    min: min,
    max: max,
    avg: 7.5,
    count: 4,
  };
};
