import { style } from "@vanilla-extract/css";
import { getUtilityClasses } from "../../../../styles/functional_classnames.css";
import { vars } from "../../../../styles/theme.css";

export const icon = style([
  {
    color: vars.color.accent_solid_1,
  },

  getUtilityClasses({
    marginBottom: "spacing1",
  }),
]);
