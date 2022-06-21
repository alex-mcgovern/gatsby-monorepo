import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { getFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import { resetList } from "../../../../styles/resets/reset_list.css";
import { vars } from "../../../../styles/theme.css";

export const getDropdownStyles = recipe({
  base: [
    {
      display: "block",
      textDecoration: "none",
      textAlign: "left",
    },
    getFunctionalClassNames({
      color: "primary_text_highContrast",
      backgroundColor: {
        hover: "primary_ui_hover",
        focus: "primary_ui_selected",
      },
      padding: "spacing2",
      width: "100%",
    }),
  ],
  variants: {
    size: {
      sm: [
        {
          fontSize: vars.fontSize.body_sm,
        },
      ],
      md: [
        {
          fontSize: vars.fontSize.body_md,
        },
      ],
      lg: [
        {
          fontSize: vars.fontSize.body_lg,
        },
      ],
    },
  },
});

export const isHighlighted = style({
  backgroundColor: vars.color.surface,
});
export const isSelected = style({
  fontWeight: vars.fontWeight.semibold,
});
export const resultWrapper = style([resetList]);
