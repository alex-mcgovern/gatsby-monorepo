import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { getFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import { vars } from "../../../../styles/global_theme.css";
import { getButtonA11yStyles } from "../../../../styles/recipes/get_accessibility_styles.css";

export const listItemWrapper = style([
  {
    display: "block",
  },
  getButtonA11yStyles(),
  getFunctionalClassNames({
    background: { lightMode: "white", darkMode: "gray3" },
    borderRadius: "md",
  }),
]);
export const image = style({
  selectors: {
    [`${listItemWrapper}:hover &`]: {
      transform: `translateY(${calc.multiply(vars.spacing.spacing1, -1)})`,
    },
  },
});
