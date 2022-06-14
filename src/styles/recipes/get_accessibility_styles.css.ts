import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../global_theme.css";

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
        boxShadow: `0px 0px 0px 2px ${vars.color.black}, 0px 0px 0px 6px ${vars.color.white}`,
      },
      "&:focus-visible": {
        transition: "box-shadow 0.2s ease",
        outline: "none",
        boxShadow: `0px 0px 0px 3px ${vars.color.black}, 0px 0px 0px 4  px ${vars.color.white}`,
      },
      // "&[aria-current='page']": {
      //   transition: "box-shadow 0.2s ease",
      //   outline: "none",
      //   boxShadow: `0px 0px 0px 2px ${vars.color.white}, 0px 0px 0px 6px ${vars.color.orange}`,
      // },
    },
  },
});
