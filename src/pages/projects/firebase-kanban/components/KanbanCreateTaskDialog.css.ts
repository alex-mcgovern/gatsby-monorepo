import { keyframes, style } from "@vanilla-extract/css";
import { getSprinkles } from "../../../../styles/functional_classnames.css";
import { vars } from "../../../../styles/theme.css";

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
    "@media": {
      "(prefers-reduced-motion: no-preference)": {
        animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
      },
    },
  },
]);
export const dialogContent = style([
  {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: vars.color.neutral_ui_1,
    boxShadow: vars.boxShadow.lg,
    borderRadius: vars.borderRadius.sm,

    padding: 25,
    "@media": {
      "(prefers-reduced-motion: no-preference)": {
        animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
      },
    },
    selectors: {
      "&:focus": { outline: "none" },
    },
  },
  getSprinkles({
    width: { mobile: "gridSpan10", tablet: "gridSpan8", desktop: "gridSpan6" },
    maxHeight: "75vh",
    padding: "spacing2",
  }),
]);
