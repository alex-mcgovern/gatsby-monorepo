import { style } from "@vanilla-extract/css";
import { getFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import { getButtonA11yStyles } from "../../../../styles/recipes/get_accessibility_styles.css";

export const listItemWrapper = style([
  {
    display: "block",
  },
  getButtonA11yStyles(),
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
  transition: "transform 2s ease",
  selectors: {
    [`${listItemWrapper}:hover &`]: {
      transform: `scale(1.05)`,
    },
    [`${listItemWrapper}:focus &`]: {
      transform: `scale(1.05)`,
    },
  },
});
