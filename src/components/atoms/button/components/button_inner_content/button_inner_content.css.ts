import { style } from "@vanilla-extract/css";
import { vars } from "../../../../../styles/theme.css";

export const leadingIcon = style({
  flexShrink: 0,
  justifySelf: "flex-start",
  selectors: {
    "&:not(:last-child)": {
      marginRight: vars.spacing.spacing1,
    },
  },
});
export const trailingIcon = style({
  flexShrink: 0,
  justifySelf: "flex-end",
  selectors: {
    "&:not(:first-child)": {
      marginLeft: vars.spacing.spacing1,
    },
  },
});
