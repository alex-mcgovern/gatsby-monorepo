import { style } from "@vanilla-extract/css";
import { getSprinkles } from "../../../styles/functional_classnames.css";
import { getFocusRingStyles } from "../../../styles/recipes/get_focus_ring_styles.css";
import { vars } from "../../../styles/theme.css";

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
