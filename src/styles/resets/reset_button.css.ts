import { style } from "@vanilla-extract/css";

export const resetButton = style({
  background: "none",
  border: "none",
  textDecoration: "none",
  selectors: {
    "&:not([disabled])": {
      cursor: "pointer",
    },
  },
});
