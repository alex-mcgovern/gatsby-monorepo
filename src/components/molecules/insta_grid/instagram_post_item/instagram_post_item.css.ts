import { style } from "@vanilla-extract/css";
import { getFunctionalClassNames } from "../../../../styles/functional_classnames.css";

export const instagramPostLink = style({});

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
    color: "white",
    background: "navy",
    padding: 5,
  }),
]);