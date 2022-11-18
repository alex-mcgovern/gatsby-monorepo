import { style } from "@vanilla-extract/css";
import { getSprinkles } from "../__css__/getSprinkles.css";
import { resetList } from "../__css__/resets/reset_list.css";
import { vars } from "../__css__/theme.css";

export const dropdownWrapper = style([
  resetList,
  {
    display: "block",
    zIndex: 9000,

    position: "absolute",
    top: "100%",
    left: 0,
    width: "auto",
    maxHeight: "50vh",
    minWidth: "100%",

    overflowY: "auto",

    border: "1px solid",
    borderRadius: vars.borderRadius.sm,
    color: vars.color.accent_fg_2,
    backgroundColor: vars.color.neutral_bg_1,
    boxShadow: vars.boxShadow.lg,
    borderColor: vars.color.neutral_border_2,

    selectors: {
      "&:is(&:not([disabled]):hover, &:not([disabled]):focus)": {
        borderColor: vars.color.neutral_border_2,
      },

      "&:empty": {
        display: "none",
      },
    },
  },
  getSprinkles({
    marginTop: "spacing2",
  }),
]);
