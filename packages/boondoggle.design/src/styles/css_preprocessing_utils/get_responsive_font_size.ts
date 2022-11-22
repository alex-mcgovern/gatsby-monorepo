import { calc } from "@vanilla-extract/css-utils";

export const getResponsiveFontSize = (targetSize: number) => {
  /** If the target size < 1, use that, else smallest allowable is 1 */
  const smallestAllowableSize = Math.min(1.2, targetSize);

  const minSize = Math.min(
    Math.max(targetSize * 0.75, smallestAllowableSize),
    targetSize
  );

  const scaledValue = calc.multiply("100vw", calc.divide(targetSize, 75));

  return `max(${targetSize}rem, min(${minSize}rem, ${scaledValue}))`;
};
