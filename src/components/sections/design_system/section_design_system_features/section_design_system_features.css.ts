import { style } from "@vanilla-extract/css";
import { getSprinkles } from "../../../../styles/functional_classnames.css";
import { vars } from "../../../../styles/theme.css";

export const icon = style([
  {
    color: vars.color.accent_solid_1,
  },

  getSprinkles({
    marginBottom: "spacing1",
  }),
]);
