import { style } from "@vanilla-extract/css";
import { geFunctionalClassNames } from "../../../styles/functional_classnames.css";
import { getFocusRingStyles } from "../../../styles/recipes/get_focus_ring_styles.css";

// const slideUpAndFade = keyframes({
//   "0%": { opacity: 0, transform: "translateY(2px)" },
//   "100%": { opacity: 1, transform: "translateY(0)" },
// });

// const slideRightAndFade = keyframes({
//   "0%": { opacity: 0, transform: "translateX(-2px)" },
//   "100%": { opacity: 1, transform: "translateX(0)" },
// });

// const slideDownAndFade = keyframes({
//   "0%": { opacity: 0, transform: "translateY(-2px)" },
//   "100%": { opacity: 1, transform: "translateY(0)" },
// });

// const slideLeftAndFade = keyframes({
//   "0%": { opacity: 0, transform: "translateX(2px)" },
//   "100%": { opacity: 1, transform: "translateX(0)" },
// });

export const popoverTrigger = style([
  geFunctionalClassNames({
    marginX: "spacing0",

    color: {
      default: "accent_fg_2",
      hover: "accent_fg_1",
      focus: "accent_fg_1",
    },
    borderRadius: "sm",
  }),
  getFocusRingStyles(),
]);
