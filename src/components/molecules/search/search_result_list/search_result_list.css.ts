import { style } from "@vanilla-extract/css";
import { getFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import { vars } from "../../../../styles/theme.css";

export const listWrapper = style([
  {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    zIndex: 99,
    width: "100%",
    borderRadius: vars.spacing.spacing10,
    background: vars.color.background,
    border: "1px solid",
    display: "block",
  },
  getFunctionalClassNames({
    margin: "spacing6",
  }),
]);
export const listInner = style([
  {
    width: "100%",
    display: "block",
    maxHeight: vars.spacing.spacing16,
    overflow: "hidden",
    overflowY: "auto",
  },
  getFunctionalClassNames({
    marginY: "spacing3",
  }),
]);
