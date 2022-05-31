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
      selectors: {
        "&:not([disabled]):hover": {
          cursor: "pointer",
        },
        "&[disabled]": {
          opacity: 0.3,
        },
        "&[disabled]:hover": {
          cursor: "not-allowed",
        },
      },
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
          height: varsSpacing[8],
          minWidth: varsSpacing[8],
        },
        getFunctionalClassNames({ paddingX: 5, paddingY: 1 }),
      ],
      md: [
        {
          fontSize: varsFontSize.body_lg,
          height: varsSpacing[9],
          minWidth: varsSpacing[9],
        },
        getFunctionalClassNames({ paddingX: 6, paddingY: 2 }),
      ],
      lg: [
        {
          fontSize: varsFontSize.body_xl,
          height: varsSpacing[10],
          minWidth: varsSpacing[10],
        },
        getFunctionalClassNames({ paddingX: 7, paddingY: 3 }),
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
