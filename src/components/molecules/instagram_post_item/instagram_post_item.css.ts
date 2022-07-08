import { style } from "@vanilla-extract/css";
import { geFunctionalClassNames } from "../../../styles/functional_classnames.css";

export const instagramPostLink = style([
  geFunctionalClassNames({
    position: "relative",
    borderRadius: "sm",
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
  geFunctionalClassNames({
    color: "accent_fg_2",
    backgroundColor: "neutral_ui_1",
    padding: "spacing3",
  }),
]);
