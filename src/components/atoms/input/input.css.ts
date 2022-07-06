import { style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { getFunctionalClassNames } from "../../../styles/functional_classnames.css";
import { resetInput } from "../../../styles/resets/reset_input.css";
import { vars } from "../../../styles/theme.css";

export const getInputWrapperStyles = recipe({
  base: [
    {
      fontWeight: vars.fontWeight.semibold,
      textDecoration: "none",
      border: "1px solid",
      selectors: {
        "&:not([disabled]):focus-within": {
          borderColor: "accent_border_2",
        },
      },
    },
    getFunctionalClassNames({
      overflow: "hidden",
      width: "100%",
      borderRadius: "sm",
      display: "flex",
      alignItems: "center",
      color: "neutral_fg_1",
      backgroundColor: "neutral_bg_1",
      border: "1px solid",
      borderColor: {
        default: "neutral_border_1",
        hover: "accent_border_2",
      },
    }),
  ],

  variants: {
    size: {
      xs: [
        {
          fontSize: vars.fontSize.body_sm,
        },
      ],
      sm: [
        {
          fontSize: vars.fontSize.body_lg,
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
    color: "neutral_fg_2",
  }),
]);
export const inputLabel = style([
  resetInput,
  getFunctionalClassNames({
    color: "neutral_fg_1",
    display: "block",
    fontWeight: "medium",
    marginBottom: "spacing1",
  }),
]);
export const icon = style([
  getFunctionalClassNames({
    color: "neutral_fg_1",
    marginLeft: "spacing2",
  }),
]);

export type TInputVariants = RecipeVariants<typeof getInputWrapperStyles>;
