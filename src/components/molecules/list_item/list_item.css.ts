import { style } from "@vanilla-extract/css";
import { getSprinkles } from "../../../styles/functional_classnames.css";
import { getFocusRingStyles } from "../../../styles/recipes/get_focus_ring_styles.css";
import { darkTheme, vars } from "../../../styles/theme.css";
import { varsTransitionTime } from "../../../styles/vars/vars_transition.css";

export const listItemWrapper = style([
  {
    display: "block",
    isolation: "isolate",
    overflow: "hidden",

    textDecoration: "none",
    color: "inherit",

    backgroundColor: vars.color.neutral_ui_1,

    border: "1px solid",
    borderColor: vars.color.neutral_border_2,
    borderRadius: vars.borderRadius.md,

    selectors: {
      "&:is(&:not([disabled]):hover, &:not([disabled]):focus)": {
        transition: `background-color ease`,
        transitionDuration: varsTransitionTime.short,
        backgroundColor: vars.color.neutral_bg_2,
        boxShadow: vars.boxShadow.md,
      },
      [`${darkTheme} &:is(&:not([disabled]):hover, &:not([disabled]):focus)`]: {
        backgroundColor: vars.color.neutral_ui_2,
        boxShadow: vars.boxShadow.md,
      },
    },
  },
  getFocusRingStyles(),
  getSprinkles({
    padding: "spacing2",
  }),
]);

export const listItemTitle = style({
  // selectors: {
  //   [`${listItemWrapper} &`]: {
  //     transition: `color ease`,
  //     transitionDuration: varsTransitionTime.short,
  //   },
  //   [`${listItemWrapper}:hover &`]: {
  //     color: vars.color.accent_fg_1,
  //   },
  // },
});

export const image = style({
  selectors: {
    [`${listItemWrapper} &`]: {
      // transition: "transform 0.2s ease",
    },
    [`${listItemWrapper}:hover &`]: {
      transform: `scale(1.05)`,
    },
    [`${listItemWrapper}:focus &`]: {
      transform: `scale(1.05)`,
    },
  },
});
