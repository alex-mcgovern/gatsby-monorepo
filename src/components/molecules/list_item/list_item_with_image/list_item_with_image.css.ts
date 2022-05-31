import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { varsSpacing } from "../../../../styles/vars/vars_spacing.css";

export const listItemWrapper = style({
  display: "block",
});
export const image = style({
  selectors: {
    [`${listItemWrapper}:hover &`]: {
      transform: `translateY(${calc.multiply(varsSpacing[5], -1)})`,
    },
  },
});
