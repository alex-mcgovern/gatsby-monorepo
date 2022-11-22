import type { RecipeVariants } from "@vanilla-extract/recipes";
import { recipe } from "@vanilla-extract/recipes";
import { createAccessibleTransition } from "../__css__/css_preprocessing_utils/createAccessibleTransition";
import { getSprinkles } from "../__css__/getSprinkles.css";
import { vars } from "../__css__/theme.css";
import { SELECTOR_LINK_BUTTON_HOVER_FOCUS } from "../styles/global/css_selector_vars";

export const getCardStyle = recipe({
  base: [
    {
      display: "block",
      isolation: "isolate",
      overflow: "hidden",

      textDecoration: "none",
      color: "inherit",

      backgroundColor: vars.color.neutral_secondary_base,

      border: "1px solid",
      borderRadius: vars.borderRadius.md,
    },
    getSprinkles({
      padding: "spacing2",
    }),
    createAccessibleTransition({
      transition: `ease ${vars.transitionDuration.short}`,
      transitionProperty: "color, background-color, border-color, box-shadow",
    }),
  ],
  variants: {
    isInteractive: {
      false: {
        borderColor: vars.color.neutral_border_nonInteractive,
      },
      true: {
        borderColor: vars.color.neutral_border_interactive,
        selectors: {
          [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
            borderColor: vars.color.neutral_border_interactiveActive,
            backgroundColor: vars.color.neutral_background_raised,
            boxShadow: vars.boxShadow.md,
          },
          // [`${darkTheme} &:is(&:not([disabled]):hover, &:not([disabled]):focus)`]:
          //   {
          //     backgroundColor: vars.color.neutral_secondary_active,
          //     boxShadow: vars.boxShadow.md,
          //   },
        },
      },
    },
  },
});
export type CardVariants = RecipeVariants<typeof getCardStyle>;
