import { createModularScale } from "../css_preprocessing_utils/create_modular_scale";

const spacingScale = createModularScale(1.5, 8);

export const varsSpacing = {
  "": "0",
  "100%": "100%",
  "100vh": "100vh",
  "50%": "50%",
  "25%": "25%",
  "50vh": "50vh",
  "75vh": "75vh",
  auto: "auto",

  none: "0",
  spacing0: spacingScale(0),
  spacing1: spacingScale(1),
  spacing2: spacingScale(2),
  spacing3: spacingScale(3),
  spacing4: spacingScale(4),
  spacing5: spacingScale(5),
};
