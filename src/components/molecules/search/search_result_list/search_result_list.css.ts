import { style } from "@vanilla-extract/css";
import { getFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import { varsColors } from "../../../../styles/vars/vars_colors.css";
import { varsSpacing } from "../../../../styles/vars/vars_spacing.css";

export const listWrapper = style([
  {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    zIndex: 99,
    width: "100%",
    borderRadius: varsSpacing.spacing11,
    background: varsColors.white,
    border: "1px solid",
    display: "block",
  },
  getFunctionalClassNames({
    margin: "spacing5",
  }),
]);
export const listInner = style([
  {
    width: "100%",
    display: "block",
    maxHeight: varsSpacing.spacing16,
    overflow: "hidden",
    overflowY: "auto",
  },
  getFunctionalClassNames({
    marginY: "spacing3",
  }),
]);
