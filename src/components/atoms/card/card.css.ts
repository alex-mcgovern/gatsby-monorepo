import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { getUtilityClasses } from "../../../styles/functional_classnames.css";
import { darkTheme, vars } from "../../../styles/theme.css";
import { varsTransitionTime } from "../../../styles/vars/vars_transition.css";

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
    getUtilityClasses({
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
            transitionDuration: varsTransitionTime.short,
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
