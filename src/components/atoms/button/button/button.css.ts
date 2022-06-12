import { recipe } from "@vanilla-extract/recipes";
import { getFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import { varsColors } from "../../../../styles/vars/vars_colors.css";
import { varsFontSize } from "../../../../styles/vars/vars_font_size.css";
import { varsFontWeight } from "../../../../styles/vars/vars_font_weight.css";
import { varsSpacing } from "../../../../styles/vars/vars_spacing.css";

export const button = recipe({
  base: [
    {
      borderRadius: 6,
      fontWeight: varsFontWeight.semibold,
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      transition: "background 0.1s ease",
    },
  ],

  variants: {
    color: {
      primary: {
        backgroundColor: varsColors.magenta,
        color: varsColors.white,
        selectors: {
          "&:not([disabled]):hover": {
            backgroundColor: varsColors.magenta130,
          },
        },
      },
      secondary: {
        backgroundColor: varsColors.white,
        color: varsColors.magenta,
        border: "1px solid",
        borderColor: varsColors.magenta,
        selectors: {
          "&:not([disabled]):hover": {
            backgroundColor: varsColors.magenta30,
          },
        },
      },
    },
    size: {
      sm: [
        {
          fontSize: varsFontSize.body_md,
          height: varsSpacing.spacing4,
          minWidth: varsSpacing.spacing4,
        },
        getFunctionalClassNames({ paddingX: "spacing2", paddingY: "spacing1" }),
      ],

      md: [
        {
          fontSize: varsFontSize.body_lg,
          height: varsSpacing.spacing5,
          minWidth: varsSpacing.spacing5,
        },
        getFunctionalClassNames({ paddingX: "spacing2", paddingY: "spacing1" }),
      ],
      lg: [
        {
          fontSize: varsFontSize.body_xl,
          height: varsSpacing.spacing6,
          minWidth: varsSpacing.spacing6,
        },
        getFunctionalClassNames({ paddingX: "spacing2", paddingY: "spacing1" }),
      ],
    },
    rounded: {
      true: { borderRadius: 999 },
    },
  },

  defaultVariants: {
    color: "secondary",
    size: "md",
  },
});
