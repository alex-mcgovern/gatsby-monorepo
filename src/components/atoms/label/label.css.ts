import { style } from "@vanilla-extract/css";
import { getUtilityClasses } from "../../../styles/functional_classnames.css";
import { vars } from "../../../styles/theme.css";

export const label = style([
  {
    color: vars.color.neutral_fg_1,
    fontSize: vars.fontSize.body_md,
    fontWeight: vars.fontWeight.medium,
    display: "block",
  },
]);
