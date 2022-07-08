import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../../../../../styles/theme.css";

export const iconLeading = style({
  flexShrink: 0,
  justifySelf: "flex-start",
  selectors: {
    "&:not(:last-child)": {
      marginRight: vars.spacing.spacing1,
    },
  },
});
export const iconTrailing = style({
  flexShrink: 0,
  justifySelf: "flex-end",
  selectors: {
    "&:not(:first-child)": {
      marginLeft: vars.spacing.spacing1,
    },
  },
});

const spinAnimation = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const iconSpin = style({
  animation: `${spinAnimation} infinite 5s linear`,
});
