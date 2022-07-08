import { style } from "@vanilla-extract/css";
import { getFunctionalClassNames } from "../../../styles/functional_classnames.css";
import { getFocusRingStyles } from "../../../styles/recipes/get_focus_ring_styles.css";
import { vars } from "../../../styles/theme.css";

export const listItemWrapper = style([
  {
    display: "block",
    textDecoration: "none",
    color: "inherit",
    isolation: "isolate",
  },
  getFocusRingStyles(),
  getFunctionalClassNames({
    backgroundColor: {
      default: "neutral_bg_2",
      hover: "neutral_bg_1",
    },

    borderRadius: "sm",
    border: "1px solid",
    borderColor: "neutral_ui_1",
    overflow: "hidden",
    boxShadow: {
      default: "shadowLight",
      hover: "shadowDark",
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
