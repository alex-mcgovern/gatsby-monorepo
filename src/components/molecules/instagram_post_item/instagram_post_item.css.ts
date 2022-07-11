import { style } from "@vanilla-extract/css";
import { getUtilityClasses } from "../../../styles/functional_classnames.css";
import { vars } from "../../../styles/theme.css";

export const instagramPostLink = style([
  {
    position: "relative",
    borderRadius: vars.borderRadius.sm,
    overflow: "hidden",
  },
]);
export const instagramPostImage = style([
  {
    height: "100%",
    width: "100%",
    overflow: "hidden",

    boxShadow: vars.boxShadow.lg,
    aspectRatio: vars.aspectRatio.square,
  },
  getUtilityClasses({
    padding: "spacing2",
  }),
]);

export const instagramPostOverlay = style([
  {
    display: "none",

    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: "100%",
    height: "100%",

    color: vars.color.accent_fg_2,
    backgroundColor: vars.color.neutral_ui_2,

    selectors: {
      [`${instagramPostLink}:hover &`]: {
        display: "block",
      },
    },
  },
  getUtilityClasses({
    padding: "spacing2",
  }),
]);
