import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../theme.css";

export const getFocusRingStyles = recipe({
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
        outline: `2px solid ${vars.color.accent_border_1}`,
        outlineOffset: "2px",
      },
      "&:focus-visible": {
        outline: `2px solid ${vars.color.accent_border_1}`,
        outlineOffset: "2px",
      },
      "&:focus-within": {
        outline: `2px solid ${vars.color.accent_border_1}`,
        outlineOffset: "2px",
      },
    },
  },
});
