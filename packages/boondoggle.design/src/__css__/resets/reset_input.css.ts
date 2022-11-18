import { style } from "@vanilla-extract/css";

export const resetInput = style({
  selectors: {
    "&:focus": {
      border: "none",
      outline: "none",
      boxShadow: "none",
    },
    "&:focus-visible": {
      border: "none",
      outline: "none",
      boxShadow: "none",
    },
  },
});
