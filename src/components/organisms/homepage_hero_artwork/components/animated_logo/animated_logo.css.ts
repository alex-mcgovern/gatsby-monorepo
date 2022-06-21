import { keyframes, style } from "@vanilla-extract/css";

export const logoWrapper = style({
  transition: "0.4s",

  //   strokeDasharray: 1000,
  //   strokeDashoffset: 1000,
  //   animation: `${dash} 5s linear forwards`,
});
export const outerShape = style({
  transition: "0.4s",
  selectors: {
    [`${logoWrapper}:hover &`]: {
      transition: "0.4s",

      d: `path("M4 16L8 8L12 16")`,
    },
  },
  //   strokeDasharray: 1000,
  //   strokeDashoffset: 1000,
  //   animation: `${dash} 5s linear forwards`,
});
