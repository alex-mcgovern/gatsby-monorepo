import { style } from "@vanilla-extract/css";
import { getFunctionalClassNames } from "../../../styles/functional_classnames.css";
import { getFocusRingStyles } from "../../../styles/recipes/get_focus_ring_styles.css";
import { vars } from "../../../styles/theme.css";

export const listItemWrapper = style([
  {
    display: "block",
    textDecoration: "none",
    color: "inherit",
  },
  getFocusRingStyles(),
  getFunctionalClassNames({
    isolation: "isolate",

    backgroundColor: {
      default: "neutral_bg_1",
      hover: "neutral_bg_1",
      focus: "neutral_bg_1",
      darkMode: "neutral_bg_3",
      darkMode_hover: "neutral_ui_1",
      darkMode_focus: "neutral_bg_1",
    },

    borderRadius: "sm",
    overflow: "hidden",
    boxShadow: {
      default: "shadowLight",
      hover: "shadowDark",
      focus: "shadowDark",
    },
  }),
]);

export const listItemTitle = style({
  selectors: {
    [`${listItemWrapper}:hover &`]: {
      color: vars.color.accent_fg_1,
      textDecoration: "underline",
    },
  },
});

export const image = style({
  selectors: {
    [`${listItemWrapper} &`]: {
      transition: "transform 0.2s ease",
    },
    [`${listItemWrapper}:hover &`]: {
      transform: `scale(1.05)`,
    },
    [`${listItemWrapper}:focus &`]: {
      transform: `scale(1.05)`,
    },
  },
});
