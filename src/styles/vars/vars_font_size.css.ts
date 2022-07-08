import { modularScale } from "polished";

const createScale = (ratio: number, base: number) => (steps: number) =>
  `${modularScale(steps, base, ratio)}px`;

const fontSizeScale = createScale(1.067, 16);

export const varsFontSize = {
  root: "16px",

  h1: fontSizeScale(8),
  h2: fontSizeScale(7),
  h3: fontSizeScale(6),
  h4: fontSizeScale(5),
  h5: fontSizeScale(4),
  h6: fontSizeScale(3),

  body_lg: fontSizeScale(2),
  body_md: fontSizeScale(1),
  body_sm: fontSizeScale(0),
};
