import { keyframes, style } from "@vanilla-extract/css";

const spinAnimation = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const iconSpin = style({
  animation: `${spinAnimation} infinite 5s linear`,
});
