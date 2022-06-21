import { keyframes, style } from "@vanilla-extract/css";

const dash = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

export const tracedLine = style({
  //   strokeDasharray: 1000,
  //   strokeDashoffset: 1000,
  //   animation: `${dash} 5s linear forwards`,
});
