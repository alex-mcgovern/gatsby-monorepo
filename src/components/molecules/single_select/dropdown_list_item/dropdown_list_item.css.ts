import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { getFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import { resetList } from "../../../../styles/resets/reset_list.css";
import { varsColors } from "../../../../styles/vars/vars_colors.css";
import { varsFontSize } from "../../../../styles/vars/vars_font_size.css";
import { varsFontWeight } from "../../../../styles/vars/vars_font_weight.css";

export const getDropdownStyles = recipe({
  base: [
    {
      display: "block",
      color: varsColors.navy,
      textDecoration: "none",
    },
  ],
  variants: {
    size: {
      sm: [
        {
          fontSize: varsFontSize.body_md,
        },
        getFunctionalClassNames({ padding: "spacing4" }),
      ],
      md: [
        {
          fontSize: varsFontSize.body_lg,
        },
        getFunctionalClassNames({ padding: "spacing5" }),
      ],
      lg: [
        {
          fontSize: varsFontSize.body_xl,
        },
        getFunctionalClassNames({ padding: "spacing6" }),
      ],
    },
  },
});

export const isHighlighted = style({
  background: varsColors.gray10,
});
export const isSelected = style({
  fontWeight: varsFontWeight.semibold,
});
export const resultWrapper = style([resetList]);
