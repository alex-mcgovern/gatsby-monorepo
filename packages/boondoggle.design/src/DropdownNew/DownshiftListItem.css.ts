import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { disabledStateStyles } from "../__css__/common/disabled_state_styles.css";
import { focusedStateStyle } from "../__css__/common/focus_ring_styles.css";
import { variantInteractiveElementSize } from "../__css__/common/variant_interactive_element_size.css";
import { getSprinkles } from "../__css__/getSprinkles.css";
import { vars } from "../__css__/theme.css";
import { createAccessibleTransition } from "../styles/css_preprocessing_utils/create_accessible_transition";

export const getListItemStyles = recipe({
  base: [
    getSprinkles({
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      width: "100%",
      textAlign: "left",
      color: "neutral_text_highContrast",
      whiteSpace: "nowrap",
      margin: "none",
      padding: "spacing2",
    }),
    createAccessibleTransition({
      transition: `color, background-color, border-color, ease ${vars.transitionDuration.short}`,
    }),
    {
      selectors: {
        // "&:is(:hover, :focus)": {
        //   backgroundColor: vars.color.accent_tint,
        // },
        // "&:focus": {
        //   backgroundColor: vars.color.semantic_red_base,
        // },
      },
    },
    focusedStateStyle,
    disabledStateStyles,
  ],
  variants: {
    size: variantInteractiveElementSize,
  },
});

export const isHighlighted = style([
  focusedStateStyle,
  {
    backgroundColor: vars.color.accent_secondary_active,
  },
]);

export const isSelected = style([
  {
    fontWeight: vars.fontWeight.semibold,
    // backgroundColor: vars.color.accent_tint,
  },
]);

export const resultWrapper = style([]);

export const listItemWrapper = style({
  paddingLeft: "0",
  marginTop: "0",
});
