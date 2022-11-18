import { keyframes, style } from "@vanilla-extract/css";
import type { RecipeVariants } from "@vanilla-extract/recipes";
import { recipe } from "@vanilla-extract/recipes";
import { getSprinkles } from "../__css__/getSprinkles.css";
import { vars } from "../__css__/theme.css";

export const getButtonStyle = recipe({
  base: [
    {
      position: "relative",
      display: "flex",
      alignItems: "center",
      gap: 2,
      flexShrink: 0,
      // width: "min-content",

      whiteSpace: "nowrap",
      lineHeight: vars.lineHeight.md,
      fontWeight: vars.fontWeight.medium,

      borderRadius: vars.borderRadius.sm,
      textDecoration: "none",

      transition: `color ease, background-color ease`,
      transitionDuration: vars.transitionDuration.short,

      selectors: {
        "&:is(&:not([disabled]):hover, &:not([disabled]):focus)": {
          // textDecoration: "underline",
        },
      },
    },
    getSprinkles({
      marginY: "spacing1",
    }),
  ],

  variants: {
    appearance: {
      primary: [
        {
          backgroundColor: vars.color.accent_ui_1,
          border: "1px solid",
          borderColor: vars.color.accent_border_2,
          color: vars.color.accent_fg_1,

          selectors: {
            "&:is(&:not([disabled]):hover, &:not([disabled]):focus)": {
              backgroundColor: vars.color.accent_ui_2,
              borderColor: vars.color.accent_border_3,
            },
          },
        },
        getSprinkles({
          paddingX: "spacing2",
          // paddingY: "spacing1",
        }),
      ],

      secondary: [
        {
          backgroundColor: vars.color.neutral_ui_1,
          border: "1px solid",
          borderColor: vars.color.neutral_border_2,
          color: vars.color.neutral_fg_2,

          selectors: {
            "&:is(&:not([disabled]):hover, &:not([disabled]):focus)": {
              backgroundColor: vars.color.neutral_ui_2,
              borderColor: vars.color.neutral_border_3,
            },
          },
        },
        getSprinkles({
          paddingX: "spacing2",
          // paddingY: "spacing1",
        }),
      ],

      tertiary: [
        {
          color: vars.color.neutral_fg_1,
          selectors: {
            "&:is(&:not([disabled]):hover, &:not([disabled]):focus)": {
              color: vars.color.neutral_fg_2,
            },
          },
        },
      ],
    },
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
    appearance: "primary",
    size: "md",
  },
});

export const iconLeading = style({
  flexShrink: 0,
  display: "block",
  width: "auto",
  minWidth: vars.spacing.spacing2,
  justifySelf: "start",
  // selectors: {
  //   "&:not(:last-child)": {
  //     marginRight: vars.spacing.spacing1,
  //   },
  // },
});
export const iconTrailing = style({
  flexShrink: 0,
  display: "block",
  width: "auto",
  minWidth: vars.spacing.spacing2,
  justifySelf: "end",
  // selectors: {
  //   "&:not(:first-child)": {
  //     marginLeft: vars.spacing.spacing1,
  //   },
  // },
});

const spinAnimation = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const iconSpin = style({
  animation: `${spinAnimation} infinite 5s linear`,
});

export type ButtonVariants = RecipeVariants<typeof getButtonStyle>;
