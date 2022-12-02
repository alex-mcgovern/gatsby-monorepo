import { focusBaseStyle } from "@alexmcgovern/boondoggle.design/src/styles/common/focus_ring_styles.css";
import { style } from "@vanilla-extract/css";

export const offerCard = style({
  selectors: {
    "&:focus": {
      ...focusBaseStyle,
    },
  },
});
