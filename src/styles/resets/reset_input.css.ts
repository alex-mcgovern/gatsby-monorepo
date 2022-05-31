import { style } from "@vanilla-extract/css";

export const resetInput = style({
  border: "none",
  backgroundImage: "none",
  backgroundColor: "transparent",
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
