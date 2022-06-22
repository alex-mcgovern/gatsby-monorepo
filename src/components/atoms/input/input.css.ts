import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { getFunctionalClassNames } from "../../../styles/functional_classnames.css";
import { resetInput } from "../../../styles/resets/reset_input.css";
import { vars } from "../../../styles/theme.css";

export const getInputWrapperStyles = recipe({
  base: [
    {
      fontWeight: vars.fontWeight.semibold,
      textDecoration: "none",
      border: "1px solid",
    },
    getFunctionalClassNames({
      width: "100%",
      borderRadius: "sm",
      display: "flex",
      alignItems: "center",
      color: "neutral_text_lowContrast",
      backgroundColor: "neutral_background",
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
          fontSize: vars.fontSize.body_xs,
        },
      ],
      md: [
        {
          fontSize: vars.fontSize.body_sm,
        },
      ],
      lg: [
        {
          fontSize: vars.fontSize.body_lg,
        },
      ],
    },
  },

  defaultVariants: {
    size: "sm",
  },
});

export const inputElement = style([
  resetInput,
  getFunctionalClassNames({
    paddingX: "spacing2",
    paddingY: "spacing1",
    width: "100%",
    color: "neutral_text_highContrast",
  }),
]);
export const inputLabel = style([
  resetInput,
  getFunctionalClassNames({
    color: "neutral_text_lowContrast",
    display: "block",
    fontWeight: "medium",
    marginBottom: "spacing1",
  }),
]);
export const icon = style({
  color: vars.color.neutral_text_lowContrast,
  marginRight: vars.spacing.spacing4,
});
