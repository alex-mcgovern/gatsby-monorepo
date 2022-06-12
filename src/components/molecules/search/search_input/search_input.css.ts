import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { getFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import { resetInput } from "../../../../styles/resets/reset_input.css";
import { varsColors } from "../../../../styles/vars/vars_colors.css";
import { varsFontSize } from "../../../../styles/vars/vars_font_size.css";
import { varsFontWeight } from "../../../../styles/vars/vars_font_weight.css";
import { varsSpacing } from "../../../../styles/vars/vars_spacing.css";

export const getInputWrapperStyles = recipe({
  base: [
    {
      borderRadius: 999,
      fontWeight: varsFontWeight.semibold,
      textDecoration: "none",
      border: "1px solid",
      color: varsColors.gray30,
      width: "100%",
      selectors: {
        "&:hover": {
          borderColor: varsColors.magenta50,
        },
        "&:focus-within": {
          borderColor: varsColors.magenta,
          boxShadow: `0px 0px 0px 4px ${varsColors.orange50}, 0px 0px 0px 8px ${varsColors.white}`,
        },
      },
    },
    getFunctionalClassNames({
      display: "flex",
      alignItems: "center",
    }),
  ],

  variants: {
    size: {
      sm: [
        {
          fontSize: varsFontSize.body_sm,
          height: varsSpacing[8],
        },
        getFunctionalClassNames({ paddingX: 4, paddingY: 1 }),
      ],
      md: [
        {
          fontSize: varsFontSize.body_md,
          height: varsSpacing[9],
        },
        getFunctionalClassNames({ paddingX: 5, paddingY: 2 }),
      ],
      lg: [
        {
          fontSize: varsFontSize.body_lg,
          height: varsSpacing[10],
        },
        getFunctionalClassNames({ paddingX: 6, paddingY: 3 }),
      ],
    },

    rounded: {
      true: { borderRadius: 999 },
    },
  },

  defaultVariants: {
    size: "md",
  },
});

export const inputElement = style([resetInput]);
export const icon = style({
  color: varsColors.gray30,
  marginRight: varsSpacing[4],
});
