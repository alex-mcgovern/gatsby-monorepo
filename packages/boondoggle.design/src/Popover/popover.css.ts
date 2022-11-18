import { getFocusRingStyles } from "@alexmcgovern/boondoggle.design/__css__/recipes/get_focus_ring_styles.css";
import { style } from "@vanilla-extract/css";
import { getSprinkles } from "../__css__/getSprinkles.css";
import { vars } from "../__css__/theme.css";

export const popoverTrigger = style([
  {
    color: vars.color.accent_fg_1,
    borderRadius: vars.borderRadius.sm,

    transition: `color ease`,
    transitionDuration: vars.transitionDuration.short,

    selectors: {
      "&:is(&:not([disabled]):hover, &:not([disabled]):focus)": {
        color: vars.color.accent_fg_2,
      },
      "&[disabled]": {
        borderColor: "accent_border_3",
      },
    },
  },
  getSprinkles({
    padding: "spacing0",
  }),
  getFocusRingStyles(),
]);
