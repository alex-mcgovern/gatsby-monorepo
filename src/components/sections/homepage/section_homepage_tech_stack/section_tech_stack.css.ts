import { style } from "@vanilla-extract/css";
import { getUtilityClasses } from "../../../../styles/functional_classnames.css";
import { vars } from "../../../../styles/theme.css";

export const icon = style([
  {
    backgroundColor: vars.color.neutral_ui_1,
    borderRadius: vars.borderRadius.sm,
    aspectRatio: vars.aspectRatio.square,
    boxShadow: vars.boxShadow.lg,
  },
  getUtilityClasses({
    padding: "spacing2",
  }),
]);
