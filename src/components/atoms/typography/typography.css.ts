import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { vars } from "../../../styles/theme.css";

export const getTypographyStyle = recipe({
  variants: {
    color: {
      accent_fg_2: {
        color: vars.color.accent_fg_2,
      },
      accent_fg_1: {
        color: vars.color.accent_fg_1,
      },
      neutral_fg_1: {
        color: vars.color.neutral_fg_1,
      },
      semantic_red_bg: {
        color: vars.color.semantic_red_bg,
      },
    },
    backgroundColor: {
      accent_ui_1: {
        backgroundColor: vars.color.accent_ui_1,
      },
    },
  },
});

export type TypographyVariants = RecipeVariants<typeof getTypographyStyle>;
