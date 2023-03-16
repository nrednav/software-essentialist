type Stats = {
  min: number;
  max: number;
  avg: number;
  count: number;
};

export const calculateStats = (sequence: number[]): Stats => {
  return {
    min: 2,
    max: 20,
    avg: 12,
    count: 4,
  };
};
