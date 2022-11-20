import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const invalidInput = style([
  {
    borderColor: `${vars.color.semantic_red_highContrast} !important`,
    selectors: {
      [`&:is(a,button):is(&:focus, &:focus-visible), &:focus-within`]: {
        boxShadow: `0px 0px 0px 2px ${vars.color.semantic_red_lowContrast}`,
      },
    },
  },
]);
