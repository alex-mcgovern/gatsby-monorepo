export const getPercentageOfRange = (
  value: number,
  min: number,
  max: number
) => {
  const range = max - min;
  const percentage = (value - min) / range;
  return percentage * 100;
};
