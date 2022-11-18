import { style } from "@vanilla-extract/css";
import type { RecipeVariants } from "@vanilla-extract/recipes";
import { recipe } from "@vanilla-extract/recipes";
import { getSprinkles } from "../__css__/getSprinkles.css";
import { vars } from "../__css__/theme.css";

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
    getSprinkles({
      marginBottom: "spacing1",
    }),
  ],

  variants: {
    size: {
      sm: [
        { height: 32 },
        getSprinkles({
          fontSize: "body_sm",
        }),
      ],
      md: [
        { height: 40 },
        getSprinkles({
          fontSize: "body_md",
        }),
      ],
      lg: [
        { height: 48 },
        getSprinkles({
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
  getSprinkles({
    paddingX: "spacing1",
    width: "100%",
  }),
]);

export const leadingIcon = style([
  { color: vars.color.neutral_fg_1 },
  getSprinkles({
    marginLeft: "spacing2",
  }),
]);
export const trailingIcon = style([
  { color: vars.color.neutral_fg_1 },
  getSprinkles({
    marginRight: "spacing2",
  }),
]);

export type InputVariants = RecipeVariants<typeof getInputWrapperStyles>;
