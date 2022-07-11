import { style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { getUtilityClasses } from "../../../styles/functional_classnames.css";
import { vars } from "../../../styles/theme.css";

export const getInputWrapperStyles = recipe({
  base: [
    {
      border: "1px solid",
      borderColor: vars.color.neutral_border_2,
      borderRadius: vars.borderRadius.sm,

      backgroundColor: vars.color.neutral_bg_1,

      color: vars.color.neutral_fg_1,
      fontWeight: vars.fontWeight.normal,
      textDecoration: "none",

      display: "flex",
      alignItems: "center",
      width: "100%",
      overflow: "hidden",

      selectors: {
        "&:is(&:not([disabled]):hover, &:not([disabled]):focus, &:not([disabled]):focus-within)":
          {
            borderColor: vars.color.accent_border_3,
          },
        "&[disabled]": {
          borderColor: vars.color.neutral_border_2,
        },
      },
    },
    getUtilityClasses({
      marginBottom: "spacing1",
    }),
  ],

  variants: {
    size: {
      sm: [
        { height: 32 },
        getUtilityClasses({
          fontSize: "body_sm",
        }),
      ],
      md: [
        { height: 40 },
        getUtilityClasses({
          fontSize: "body_md",
        }),
      ],
      lg: [
        { height: 48 },
        getUtilityClasses({
          fontSize: "body_lg",
        }),
      ],
    },
  },

  defaultVariants: {
    size: "md",
  },
});

export const inputElement = style([
  {
    color: vars.color.neutral_fg_2,
    selectors: {
      "&:focus": {
        border: "none",
        outline: "none",
        boxShadow: "none",
      },
      "&:focus-visible": {
        border: "none",
        outline: "none",
        boxShadow: "none",
      },
    },
  },
  getUtilityClasses({
    paddingX: "spacing1",
    width: "100%",
  }),
]);

export const leadingIcon = style([
  { color: vars.color.neutral_fg_1 },
  getUtilityClasses({
    marginLeft: "spacing2",
  }),
]);
export const trailingIcon = style([
  { color: vars.color.neutral_fg_1 },
  getUtilityClasses({
    marginRight: "spacing2",
  }),
]);

export type InputVariants = RecipeVariants<typeof getInputWrapperStyles>;
