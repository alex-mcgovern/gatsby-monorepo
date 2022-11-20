import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { focusedStateStyle } from "../__css__/common/focus_ring_styles.css";
import { getSprinkles } from "../__css__/getSprinkles.css";
import { darkTheme, vars } from "../__css__/theme.css";
import { createAccessibleTransition } from "../styles/css_preprocessing_utils/create_accessible_transition";
import { SELECTOR_LINK_BUTTON_HOVER_FOCUS } from "../styles/global/css_selector_vars";

export const listItemWrapper = style([
  getSprinkles({
    padding: "spacing2",
    display: "block",
    isolation: "isolate",
    overflow: "hidden",
    textDecoration: "none",
    background: "neutral_secondary_base",
    border: "neutral_border_interactive",
    borderRadius: "md",
  }),
  focusedStateStyle,
  createAccessibleTransition({
    transition: `ease ${vars.transitionDuration.short}`,
    transitionProperty:
      "color, background-color, border-color, box-shadow, transform",
  }),
  {
    color: "inherit",

    selectors: {
      [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
        transform: `translateY(${calc.multiply(vars.spacing.spacing0, -1)})`,
        borderColor: vars.color.neutral_border_interactiveActive,
        backgroundColor: vars.color.neutral_secondary_base,
        boxShadow: vars.boxShadow.md,
      },
      [`${darkTheme} ${SELECTOR_LINK_BUTTON_HOVER_FOCUS}`]: {
        backgroundColor: vars.color.neutral_secondary_active,
      },
    },
  },
]);
