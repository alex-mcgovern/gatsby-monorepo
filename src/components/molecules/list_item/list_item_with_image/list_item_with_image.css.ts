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
    background: { lightMode: "white", darkMode: "gray5" },
    borderRadius: "md",
    overflow: "hidden",
  }),
]);
export const image = style({
  transition: "transform 2s ease",
  selectors: {
    [`${listItemWrapper}:hover &`]: {
      transform: `scale(1.05)`,
    },
  },
});
