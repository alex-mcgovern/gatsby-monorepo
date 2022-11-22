import { style } from "@vanilla-extract/css";
import { createAccessibleTransition } from "../__css__/css_preprocessing_utils/createAccessibleTransition";
import { vars } from "../__css__/theme.css";

export const icon = style([
  createAccessibleTransition({
    transition: `transform ${vars.transitionDuration.short} ease`,
  }),
]);
