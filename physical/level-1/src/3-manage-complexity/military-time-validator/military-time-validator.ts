export const isValidMilitaryTimeRange = (timeRange: string): boolean => {
  let validComponents = 0;
  const [start, end] = timeRange.split(" - ");

  if (!(start && end)) return false;

  const [startHour, startMinute] = start.split(":").map(Number);

  if (startHour === undefined || startMinute === undefined) return false;

  if (startHour >= 0 && startHour < 24) validComponents += 1;
  if (startMinute >= 0 && startMinute < 60) validComponents += 1;

  const [endHour, endMinute] = end.split(":").map(Number);

  if (!(endHour && endMinute)) return false;

  if (endHour >= 0 && endHour < 24) validComponents += 1;
  if (endMinute >= 0 && endMinute < 60) validComponents += 1;

  return validComponents === 4;
};
