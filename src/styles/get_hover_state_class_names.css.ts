import { recipe } from "@vanilla-extract/recipes";
import { varsColors } from "~styles/vars/vars_colors.css";

export const getHoverStateClassNames = recipe({
  base: {
    borderRadius: 4,
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
        outline: "none",
        boxShadow: `0px 0px 0px 1px ${varsColors.white}, 0px 0px 0px 4px ${varsColors.azure50}`,
      },
      "&:focus-visible": {
        outline: "none",
        boxShadow: `0px 0px 0px 1px ${varsColors.white}, 0px 0px 0px 4px ${varsColors.azure50}`,
      },
    },
  },
  variants: {
    hoverState: {
      solid: {
        selectors: {
          "&:hover": {
            color: varsColors.azure,
            backgroundColor: varsColors.gray10,
          },
          "&:focus": {
            color: varsColors.azure,
            backgroundColor: varsColors.gray10,
          },
        },
      },
      underline: {
        selectors: {
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
      underlineAzure: {
        selectors: {
          "&:hover": {
            textDecoration: "underline",
            color: varsColors.azure,
          },
        },
      },
      opacity: {
        selectors: {
          "&:hover": {
            opacity: 0.5,
          },
        },
      },
    },
  },
});
