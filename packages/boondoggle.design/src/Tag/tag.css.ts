import type { RecipeVariants } from "@vanilla-extract/recipes";
import { recipe } from "@vanilla-extract/recipes";
import { getSprinkles } from "../__css__/getSprinkles.css";
import { vars } from "../__css__/theme.css";
import { createAccessibleTransition } from "../styles/css_preprocessing_utils/create_accessible_transition";
import { SELECTOR_LINK_BUTTON_HOVER_FOCUS } from "../styles/global/css_selector_vars";

export const getTagStyle = recipe({
  base: [
    getSprinkles({
      alignItems: "center",
      border: "neutral_nonInteractive",
      borderRadius: "pill",
      display: "flex",
      flexShrink: "0",
      fontStyle: "body_sm",
      gap: "spacing0",
      paddingX: "spacing1",
      paddingY: "spacing0",
      whiteSpace: "nowrap",
      textDecoration: "none",
    }),
    createAccessibleTransition({
      transition: `ease ${vars.transitionDuration.short}`,
      transitionProperty: "color, background-color, border-color",
    }),
  ],

  variants: {
    state: {
      inactive: [
        {
          color: vars.color.neutral_text_lowContrast,
          backgroundColor: vars.color.neutral_secondary_base,
          borderColor: vars.color.neutral_border_nonInteractive,

          selectors: {
            [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
              color: vars.color.neutral_text_highContrast,
              backgroundColor: vars.color.neutral_secondary_active,
              borderColor: vars.color.neutral_border_interactiveActive,
            },
          },
        },
      ],

      active: [
        {
          color: vars.color.accent_text_lowContrast,
          backgroundColor: vars.color.accent_secondary_active,
          borderColor: vars.color.accent_border_interactive,

          selectors: {
            [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
              color: vars.color.accent_text_highContrast,
              backgroundColor: vars.color.accent_secondary_selected,
              borderColor: vars.color.accent_border_interactiveActive,
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
