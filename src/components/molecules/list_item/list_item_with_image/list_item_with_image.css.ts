import { style } from "@vanilla-extract/css";
import { getFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import { getFocusRingStyles } from "../../../../styles/recipes/get_accessibility_styles.css";

export const listItemWrapper = style([
  {
    display: "block",
  },
  getFocusRingStyles(),
  getFunctionalClassNames({
    background: {
      default: "neutral_ui_base",
      hover: "neutral_ui_base_hover",
    },
    borderRadius: "md",
    overflow: "hidden",
    boxShadow: {
      default: "shadowLight",
      hover: "shadowDark",
      focus: "shadowDark",
    },
  }),
]);
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
