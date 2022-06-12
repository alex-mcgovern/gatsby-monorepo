import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { getButtonA11yStyles } from "../../../../styles/recipes/get_accessibility_styles.css";
import { varsSpacing } from "../../../../styles/vars/vars_spacing.css";

export const listItemWrapper = style([
  {
    display: "block",
  },
  getButtonA11yStyles(),
]);
export const image = style({
  selectors: {
    [`${listItemWrapper}:hover &`]: {
      transform: `translateY(${calc.multiply(varsSpacing.spacing1, -1)})`,
    },
  },
});
