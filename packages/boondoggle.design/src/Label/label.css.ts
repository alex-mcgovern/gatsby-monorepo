import { style } from "@vanilla-extract/css";
import { vars } from "../__css__/theme.css";

export const label = style([
  {
    color: vars.color.neutral_fg_1,
    fontSize: vars.fontSize.body_md,
    fontWeight: vars.fontWeight.medium,
    display: "block",
  },
]);
