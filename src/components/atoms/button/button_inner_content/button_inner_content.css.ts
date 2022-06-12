import { style } from "@vanilla-extract/css";
import { varsSpacing } from "../../../../styles/vars/vars_spacing.css";

export const leadingIcon = style({
  selectors: {
    "&:not(:last-child)": {
      marginRight: varsSpacing.spacing1,
    },
  },
});
export const trailingIcon = style({
  selectors: {
    "&:not(:first-child)": {
      marginLeft: varsSpacing.spacing2,
    },
  },
});
