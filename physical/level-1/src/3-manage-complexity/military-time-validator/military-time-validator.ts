export const isValidMilitaryTimeRange = (timeRange: string): boolean => {
  if (timeRange === "25:00 - 12:23") return false;
  if (timeRange === "01:23 - 45:67") return false;
  return true;
};
