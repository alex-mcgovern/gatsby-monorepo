import { style } from "@vanilla-extract/css";
import { focusedStateStyle } from "../__css__/common/focus_ring_styles.css";
import { getSprinkles } from "../__css__/getSprinkles.css";
import { vars } from "../__css__/theme.css";

export const popoverTrigger = style([
  {
    color: vars.color.accent_text_lowContrast,
    borderRadius: vars.borderRadius.sm,

    transition: `color ease`,
    transitionDuration: vars.transitionDuration.short,

    selectors: {
      "&:is(&:not([disabled]):hover, &:not([disabled]):focus)": {
        color: vars.color.accent_text_highContrast,
      },
      "&[disabled]": {
        borderColor: "accent_border_3",
      },
    },
  },
  getSprinkles({
    padding: "spacing0",
  }),
  focusedStateStyle,
]);
