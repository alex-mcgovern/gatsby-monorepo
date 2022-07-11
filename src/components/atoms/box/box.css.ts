import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { vars } from "../../../styles/theme.css";

export const getBoxStyle = recipe({
  base: {},
  variants: {
    backgroundColor: {
      neutral_bg_1: {
        backgroundColor: vars.color.neutral_bg_1,
      },
      neutral_bg_2: {
        backgroundColor: vars.color.neutral_bg_2,
      },
      neutral_ui_1: {
        backgroundColor: vars.color.neutral_ui_1,
      },
    },
    borderRadius: {
      sm: {
        borderRadius: vars.borderRadius.sm,
      },
    },
    boxShadow: {
      lg: vars.boxShadow.lg,
      md: vars.boxShadow.md,
      sm: vars.boxShadow.sm,
    },
  },
});

export type BoxVariants = RecipeVariants<typeof getBoxStyle>;
