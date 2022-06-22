import { style } from "@vanilla-extract/css";
import { getFunctionalClassNames } from "../../../styles/functional_classnames.css";
import { getFocusRingStyles } from "../../../styles/recipes/get_accessibility_styles.css";

export const listItemWrapper = style([
  {
    display: "block",
  },
  getFocusRingStyles(),
  getFunctionalClassNames({
    isolation: "isolate",
    backgroundColor: {
      default: "neutral_background_dark",
      hover: "neutral_background",
      focus: "neutral_background",
    },
    // border: "1px solid",
    // borderColor: {
    //   default: "neutral_border_interactive",
    //   hover: "neutral_border_interactive_focus",
    //   focus: "neutral_border_interactive_focus",
    // },
    borderRadius: "sm",
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
