import { keyframes, style } from "@vanilla-extract/css";
import { createAccessibleTransition } from "../../styles/css_preprocessing_utils/createAccessibleTransition";
import { getSprinkles } from "../../styles/getSprinkles.css";
import { vars } from "../../styles/theme.css";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

export const dialogOverlay = style([
  {
    backgroundColor: `#00000080`,
    position: "fixed",
    inset: 0,
    zIndex: 99999,

    "@media": {
      "(prefers-reduced-motion: no-preference)": {},
    },
  },
  createAccessibleTransition({
    animation: `${overlayShow} ${vars.transitionDuration.short} cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  }),
]);

export const dialogContent = style([
  getSprinkles({
    padding: "spacing2",
    display: "block",
    isolation: "isolate",
    overflow: "hidden",
    textDecoration: "none",
    background: "neutral_background_base",
    border: "neutral_border_interactive",
    borderRadius: "md",
    boxShadow: "lg",
    width: { mobile: "gridSpan10", tablet: "gridSpan8", desktop: "gridSpan8" },
    maxWidth: "maxContained",
    maxHeight: "75vh",
  }),
  {
    zIndex: 99999,
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    selectors: {
      "&:focus": { outline: "none" },
    },
  },
  createAccessibleTransition({
    animation: `${contentShow} ${vars.transitionDuration.short} ease forwards`,
  }),
]);
