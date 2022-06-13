import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { getFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import { vars } from "../../../../styles/global_theme.css";
import { resetList } from "../../../../styles/resets/reset_list.css";

export const getDropdownStyles = recipe({
  base: [
    {
      display: "block",
      color: vars.color.navy,
      textDecoration: "none",
      textAlign: "left",
    },
    getFunctionalClassNames({
      paddingX: "spacing2",
      paddingY: "spacing1",
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
  background: vars.color.gray200,
});
export const isSelected = style({
  fontWeight: vars.fontWeight.semibold,
});
export const resultWrapper = style([resetList]);
