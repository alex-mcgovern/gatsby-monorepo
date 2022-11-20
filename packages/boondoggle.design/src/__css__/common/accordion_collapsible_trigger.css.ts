import { style } from "@vanilla-extract/css";
import { createAccessibleTransition } from "~styles/css_preprocessing_utils/create_accessible_transition";
import { getSprinkles } from "~styles/get_sprinkles.css";
import {
  SELECTOR_LINK_BUTTON_HOVER,
  SELECTOR_LINK_BUTTON_HOVER_FOCUS,
} from "~styles/global/css_selector_vars";
import { vars } from "~styles/themes/theme.css";
import { disabledStateStyles } from "./disabled_state_styles.css";
import { focusedStateStyle } from "./focus_ring_styles.css";

export const accordionCollapsibleTriggerStyles = style([
  focusedStateStyle,
  disabledStateStyles,
  createAccessibleTransition({
    transition: `background, color, ${vars.transitionDuration.short} ease`,
  }),
  getSprinkles({
    color: "text_highContrast",
    alignItems: "center",
    display: "flex",
    padding: "spacing3",
    width: "100%",
  }),
  {
    selectors: {
      [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
        isolation: "isolate",
        color: vars.color.accent_base,
      },
      [SELECTOR_LINK_BUTTON_HOVER]: {
        background: vars.color.background_2,
      },
    },
  },
]);
