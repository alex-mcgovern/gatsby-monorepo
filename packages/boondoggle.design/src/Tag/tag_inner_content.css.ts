import { style } from "@vanilla-extract/css";
import { vars } from "../__css__/theme.css";

export const iconLeading = style({
  flexShrink: 0,
  justifySelf: "start",
  selectors: {
    "&:not(:last-child)": {
      marginRight: vars.spacing.spacing1,
    },
  },
});
export const iconTrailing = style({
  flexShrink: 0,
  justifySelf: "end",
  selectors: {
    "&:not(:first-child)": {
      marginLeft: vars.spacing.spacing1,
    },
  },
});
