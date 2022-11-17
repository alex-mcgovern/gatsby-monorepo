import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { getSprinkles } from "../../../styles/functional_classnames.css";
import { vars } from "../../../styles/theme.css";

export const getTagStyle = recipe({
  base: [
    {
      position: "relative",
      display: "table",
      alignItems: "center",
      flexShrink: 0,

      whiteSpace: "nowrap",
      lineHeight: vars.lineHeight.md,
      fontSize: vars.fontSize.body_sm,

      borderRadius: vars.borderRadius.pill,
      border: "1px solid",
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
      paddingX: "spacing1",
      paddingY: "spacing0",
    }),
  ],

  variants: {
    state: {
      inactive: [
        {
          color: vars.color.neutral_fg_2,
          backgroundColor: vars.color.neutral_ui_1,
          borderColor: vars.color.neutral_border_1,

          selectors: {
            "&:is(a,button):is(&:not([disabled]):hover, &:not([disabled]):focus)":
              {
                // color: vars.color.neutral_fg_2,
                backgroundColor: vars.color.neutral_ui_2,
                borderColor: vars.color.neutral_border_3,
              },
          },
        },
      ],

      active: [
        {
          color: vars.color.accent_fg_2,
          backgroundColor: vars.color.accent_ui_2,
          borderColor: vars.color.accent_border_2,

          selectors: {
            "&:is(a,button):is(&:not([disabled]):hover, &:not([disabled]):focus)":
              {
                // color: vars.color.accent_fg_2,
                backgroundColor: vars.color.accent_ui_3,
                borderColor: vars.color.accent_border_3,
              },
          },
        },
      ],
    },
  },

  defaultVariants: {
    state: "inactive",
  },
});

export type TTagVariants = RecipeVariants<typeof getTagStyle>;
