import { style } from "@vanilla-extract/css";

export const resetInput = style({
  border: "none",
  backgroundImage: "none",
  background: "transparent",
  boxShadow: "none",
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
