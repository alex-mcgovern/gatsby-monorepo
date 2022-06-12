import { style } from "@vanilla-extract/css";
import { varsSpacing } from "../../../../styles/vars/vars_spacing.css";

export const leadingIcon = style({
  flexShrink: 0,
  justifySelf: "flex-start",
  selectors: {
    "&:not(:last-child)": {
      marginRight: varsSpacing.spacing1,
    },
  },
});
export const trailingIcon = style({
  flexShrink: 0,
  justifySelf: "flex-end",
  selectors: {
    "&:not(:first-child)": {
      marginLeft: varsSpacing.spacing1,
    },
  },
});
