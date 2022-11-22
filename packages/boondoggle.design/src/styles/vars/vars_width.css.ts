import { calc } from "@vanilla-extract/css-utils";

/**
 * Old max width: 1176px / 73.5rem
 * New max width: 1056px / 66rem
 * New max width = ($header-height + 8) * 12
 * (All widths should be calculated as REM)
 * https://nekocalc.com/px-to-rem-converter
 */
const gridFullWidth = "73.5rem";
const gridSingleColumnWidth = calc.divide(gridFullWidth, 12);

export const varsWidth = {
  "": "0",
  "100%": "100%",
  "100vw": "100vw",
  "75%": "75%",
  "50%": "50%",
  "33%": "33%",
  "25%": "25%",
  auto: "auto",
  "min-content": "min-content",
  "max-content": "max-content",
  gridSpan1: gridSingleColumnWidth,
  gridSpan2: calc.multiply(gridSingleColumnWidth, 2),
  gridSpan3: calc.multiply(gridSingleColumnWidth, 3),
  gridSpan4: calc.multiply(gridSingleColumnWidth, 4),
  gridSpan5: calc.multiply(gridSingleColumnWidth, 5),
  gridSpan6: calc.multiply(gridSingleColumnWidth, 6),
  gridSpan7: calc.multiply(gridSingleColumnWidth, 7),
  gridSpan8: calc.multiply(gridSingleColumnWidth, 8),
  gridSpan9: calc.multiply(gridSingleColumnWidth, 9),
  gridSpan10: calc.multiply(gridSingleColumnWidth, 10),
  gridSpan11: calc.multiply(gridSingleColumnWidth, 11),
  gridSpan12: gridFullWidth,
};
