import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { getSprinkles } from "../__css__/getSprinkles.css";
import { resetList } from "../__css__/resets/reset_list.css";
import { vars } from "../__css__/theme.css";

export const getDropdownStyles = recipe({
  base: [
    {
      display: "block",
      width: "100%",
      textDecoration: "none",
      color: vars.color.accent_text_highContrast,
      whiteSpace: "nowrap",

      textAlign: "left",
      selectors: {
        "&:is(&:not([disabled]):hover, &:not([disabled]):focus)": {
          backgroundColor: vars.color.accent_secondary_active,
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
    backgroundColor: vars.color.accent_secondary_active,
  },
]);
export const isSelected = style([
  {
    backgroundColor: vars.color.accent_secondary_selected,
  },
]);
export const resultWrapper = style([resetList]);
