import { style } from "@vanilla-extract/css";
import { getFunctionalClassNames } from "../../../../styles/functional_classnames.css";

export const instagramPostLink = style([
  getFunctionalClassNames({
    position: "relative",
    borderRadius: "md",
    overflow: "hidden",
  }),
]);

export const instagramPostOverlay = style([
  {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: "none",
    selectors: {
      [`${instagramPostLink}:hover &`]: {
        display: "block",
      },
    },
  },
  getFunctionalClassNames({
    color: "neutral_text_highContrast",
    background: "neutral_ui_base_hover",
    padding: "spacing3",
  }),
]);
