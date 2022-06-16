import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../theme.css";

export const getButtonA11yStyles = recipe({
  base: {
    selectors: {
      "&:not([disabled]):hover": {
        cursor: "pointer",
      },
      "&[disabled]:hover": {
        cursor: "not-allowed",
      },
      "&[disabled]": {
        opacity: 0.3,
      },
      "&:focus": {
        outline: `2px solid ${vars.color.primary_border_interactive}`,
        outlineOffset: "2px",
      },
      "&:focus-visible": {
        outline: `2px solid ${vars.color.primary_border_interactive}`,
        outlineOffset: "2px",
      },
    },
  },
});
