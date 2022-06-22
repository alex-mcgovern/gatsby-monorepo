import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { getFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import { resetInput } from "../../../../styles/resets/reset_input.css";
import { vars } from "../../../../styles/theme.css";

export const getInputWrapperStyles = recipe({
  base: [
    {
      borderRadius: 999,
      fontWeight: vars.fontWeight.semibold,
      textDecoration: "none",
      border: "1px solid",
      color: vars.color.neutral_text_lowContrast,
      width: "100%",
      selectors: {
        "&:hover": {
          borderColor: vars.color.primary,
        },
        "&:focus-within": {
          borderColor: vars.color.primary,
          boxShadow: `0px 0px 0px 4px ${vars.color.primary}, 0px 0px 0px 8px ${vars.color.background}`,
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
          fontSize: vars.fontSize.body_xs,
          height: vars.spacing.spacing4,
        },
        getFunctionalClassNames({ paddingX: "spacing2", paddingY: "spacing1" }),
      ],
      md: [
        {
          fontSize: vars.fontSize.body_sm,
          height: vars.spacing.spacing6,
        },
        getFunctionalClassNames({ paddingX: "spacing2", paddingY: "spacing1" }),
      ],
      lg: [
        {
          fontSize: vars.fontSize.body_lg,
          height: vars.spacing.spacing6,
        },
        getFunctionalClassNames({ paddingX: "spacing2", paddingY: "spacing1" }),
      ],
    },

    rounded: {
      true: { borderRadius: 999 },
    },
  },

  defaultVariants: {
    size: "sm",
  },
});

export const inputElement = style([resetInput]);
export const icon = style({
  color: vars.color.neutral_text_lowContrast,
  marginRight: vars.spacing.spacing4,
});
