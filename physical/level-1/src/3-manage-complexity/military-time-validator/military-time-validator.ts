const isValidTime = (time: string): boolean => {
  let validComponents = 0;
  const [hour, minute] = time.split(":").map(Number);

  if (hour === undefined || Number.isNaN(hour)) return false;
  if (minute === undefined || Number.isNaN(minute)) return false;

  if (hour >= 0 && hour < 24) validComponents += 1;
  if (minute >= 0 && minute < 60) validComponents += 1;

  return validComponents === 2;
};

export const isValidMilitaryTimeRange = (timeRange: string): boolean => {
  const [startTime, endTime] = timeRange.split(" - ");

  if (!startTime || !endTime) return false;

  return isValidTime(startTime) && isValidTime(endTime);
};
