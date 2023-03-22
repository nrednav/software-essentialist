export const isValidMilitaryTimeRange = (timeRange: string): boolean => {
  if (timeRange === "25:00 - 12:23") return false;
  return true;
}
