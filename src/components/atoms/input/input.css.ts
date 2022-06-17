import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { getFunctionalClassNames } from "../../../styles/functional_classnames.css";
import { resetInput } from "../../../styles/resets/reset_input.css";
import { vars } from "../../../styles/theme.css";

export const getInputWrapperStyles = recipe({
  base: [
    {
      borderRadius: 999,
      fontWeight: vars.fontWeight.semibold,
      textDecoration: "none",
      border: "1px solid",
      color: vars.color.neutral_text_lowContrast,
      width: "100%",
    },
    getFunctionalClassNames({
      display: "flex",
      alignItems: "center",
      background: "neutral_background",
      border: "1px solid",
      borderColor: {
        default: "neutral_border_interactive",
        hover: "primary_border_interactive_focus",
        focusWithin: "primary_border_interactive_focus",
      },
    }),
  ],

  variants: {
    size: {
      sm: [
        {
          fontSize: vars.fontSize.body_sm,
          height: vars.spacing.spacing4,
        },
      ],
      md: [
        {
          fontSize: vars.fontSize.body_md,
          height: vars.spacing.spacing6,
        },
      ],
      lg: [
        {
          fontSize: vars.fontSize.body_lg,
          height: vars.spacing.spacing6,
        },
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

export const inputElement = style([
  resetInput,
  getFunctionalClassNames({ paddingX: "spacing2", paddingY: "spacing1" }),
]);
export const icon = style({
  color: vars.color.neutral_text_lowContrast,
  marginRight: vars.spacing.spacing4,
});
