import type { RecipeVariants } from "@vanilla-extract/recipes";
import { recipe } from "@vanilla-extract/recipes";
import { getSprinkles } from "../__css__/getSprinkles.css";
import { darkTheme, vars } from "../__css__/theme.css";

export const getCardStyle = recipe({
  base: [
    {
      display: "block",
      isolation: "isolate",
      overflow: "hidden",

      textDecoration: "none",
      color: "inherit",

      backgroundColor: vars.color.neutral_ui_1,

      border: "1px solid",
      borderRadius: vars.borderRadius.md,
    },
    getSprinkles({
      padding: "spacing2",
    }),
  ],
  variants: {
    isInteractive: {
      false: {
        borderColor: vars.color.neutral_border_2,
      },
      true: {
        selectors: {
          "&:is(&:not([disabled]):hover, &:not([disabled]):focus)": {
            transition: `background-color ease`,
            transitionDuration: vars.transitionDuration.short,
            backgroundColor: vars.color.neutral_bg_2,
            boxShadow: vars.boxShadow.md,
          },
          [`${darkTheme} &:is(&:not([disabled]):hover, &:not([disabled]):focus)`]:
            {
              backgroundColor: vars.color.neutral_ui_2,
              boxShadow: vars.boxShadow.md,
            },
        },
      },
    },
  },
});
export type CardVariants = RecipeVariants<typeof getCardStyle>;
