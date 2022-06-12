import { recipe } from "@vanilla-extract/recipes";
import { varsColors } from "../vars/vars_colors.css";

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
        transition: "box-shadow 0.2s ease",

        outline: "none",
        boxShadow: `0px 0px 0px 2px ${varsColors.white}, 0px 0px 0px 6px ${varsColors.orange}`,
      },
      "&:focus-visible": {
        transition: "box-shadow 0.2s ease",
        outline: "none",
        boxShadow: `0px 0px 0px 2px ${varsColors.white}, 0px 0px 0px 6px ${varsColors.orange}`,
      },
      // "&[aria-current='page']": {
      //   transition: "box-shadow 0.2s ease",
      //   outline: "none",
      //   boxShadow: `0px 0px 0px 2px ${varsColors.white}, 0px 0px 0px 6px ${varsColors.orange}`,
      // },
    },
  },
});
