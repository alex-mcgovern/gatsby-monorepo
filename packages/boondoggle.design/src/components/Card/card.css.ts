import type { RecipeVariants } from "@vanilla-extract/recipes";
import { recipe } from "@vanilla-extract/recipes";
import { SELECTOR_LINK_BUTTON_HOVER_FOCUS } from "../../styles/common/css_selector_vars";
import { createAccessibleTransition } from "../../styles/css_preprocessing_utils/createAccessibleTransition";
import { getSprinkles } from "../../styles/getSprinkles.css";
import { vars } from "../../styles/theme.css";

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
