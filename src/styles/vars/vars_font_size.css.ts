import { createModularScale } from "../css_preprocessing_utils/create_modular_scale";

const fontSizeScale = createModularScale(1.125, 16);

export const varsFontSize = {
  root: "16px",

  h1: fontSizeScale(7),
  h2: fontSizeScale(6),
  h3: fontSizeScale(5),
  h4: fontSizeScale(4),
  h5: fontSizeScale(3),
  h6: fontSizeScale(2),

  body_lg: fontSizeScale(1),
  body_md: fontSizeScale(0),
  body_sm: "14px",
};
