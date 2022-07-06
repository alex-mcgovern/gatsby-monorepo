import { calc } from "@vanilla-extract/css-utils";

export const varsWidth = {
  "": "0",
  "100%": "100%",
  "50%": "50%",
  "25%": "25%",
  auto: "auto",
  "min-content": "min-content",
  gridSpan1: calc.divide("960px", 12),
  gridSpan2: calc.multiply(calc.divide("960px", 12), 2),
  gridSpan3: calc.multiply(calc.divide("960px", 12), 3),
  gridSpan4: calc.multiply(calc.divide("960px", 12), 4),
  gridSpan5: calc.multiply(calc.divide("960px", 12), 5),
  gridSpan6: calc.multiply(calc.divide("960px", 12), 6),
  gridSpan7: calc.multiply(calc.divide("960px", 12), 7),
  gridSpan8: calc.multiply(calc.divide("960px", 12), 8),
  gridSpan9: calc.multiply(calc.divide("960px", 12), 9),
  gridSpan10: calc.multiply(calc.divide("960px", 12), 10),
  gridSpan11: calc.multiply(calc.divide("960px", 12), 11),
  gridSpan12: calc.multiply(calc.divide("960px", 12), 12),
};
