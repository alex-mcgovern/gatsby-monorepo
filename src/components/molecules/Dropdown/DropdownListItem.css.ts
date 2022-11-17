import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { getSprinkles } from "../../../styles/functional_classnames.css";
import { resetList } from "../../../styles/resets/reset_list.css";
import { vars } from "../../../styles/theme.css";

export const getDropdownStyles = recipe({
  base: [
    {
      display: "block",
      width: "100%",
      textDecoration: "none",
      color: vars.color.accent_fg_2,
      whiteSpace: "nowrap",

      textAlign: "left",
      selectors: {
        "&:is(&:not([disabled]):hover, &:not([disabled]):focus)": {
          backgroundColor: vars.color.accent_ui_2,
        },
      },
    },
    getSprinkles({
      padding: "spacing2",
    }),
  ],
  variants: {
    size: {
      xs: [{ fontSize: vars.fontSize.body_sm }],
      sm: [{ fontSize: vars.fontSize.body_md }],
      lg: [{ fontSize: vars.fontSize.body_lg }],
    },
  },
});

export const isHighlighted = style([
  {
    backgroundColor: vars.color.accent_ui_2,
  },
]);
export const isSelected = style([
  {
    backgroundColor: vars.color.accent_ui_3,
  },
]);
export const resultWrapper = style([resetList]);
