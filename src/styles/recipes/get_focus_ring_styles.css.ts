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
        opacity: 0.5,
      },
      "&:focus": {
        outline: `2px solid ${vars.color.accent_solid_2}`,
        outlineOffset: "2px",
      },
      "&:focus-visible": {
        outline: `2px solid ${vars.color.accent_solid_2}`,
        outlineOffset: "2px",
      },
      "&:focus-within": {
        outline: `2px solid ${vars.color.accent_solid_2}`,
        outlineOffset: "2px",
      },
    },
  },
});
