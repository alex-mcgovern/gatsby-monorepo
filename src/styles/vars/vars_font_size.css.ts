import { modularScale } from "polished";

const createScale = (ratio: number, base: number) => (steps: number) =>
  `${modularScale(steps, base, ratio)}px`;

const fontSizeScale = createScale(1.067, 16);

export const varsFontSize = {
  root: "16px",

  h1: fontSizeScale(9),
  h2: fontSizeScale(8),
  h3: fontSizeScale(7),
  h4: fontSizeScale(6),
  h5: fontSizeScale(5),
  h6: fontSizeScale(4),

  body_lg: fontSizeScale(3),
  body_md: fontSizeScale(2),
  body_sm: fontSizeScale(1),
  body_xs: fontSizeScale(0),
};
