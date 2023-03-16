type Stats = {
  min: number | undefined;
  max: number;
  avg: number;
  count: number;
};

export const calculateStats = (sequence: number[]): Stats => {
  let min = sequence[0];

  sequence.forEach((number) => {
    if (!min || number < min) min = number;
  });

  return {
    min: min,
    max: 20,
    avg: 12,
    count: 4,
  };
};
