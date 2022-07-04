import { style } from "@vanilla-extract/css";
import { getFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import { resetList } from "../../../../styles/resets/reset_list.css";
import { vars } from "../../../../styles/theme.css";

export const dropdownWrapper = style([
  resetList,
  {
    zIndex: 9000,
    left: 0,
    top: "100%",
    width: "auto",
    minWidth: "100%",
    overflowY: "auto",
    marginTop: vars.spacing.spacing2,
  },
  getFunctionalClassNames({
    maxHeight: "spacing32",
    boxShadow: "shadowLight",
    display: "block",
    position: "absolute",
    color: "accent_fg_2",
    backgroundColor: "neutral_bg_2",
    border: "1px solid",
    borderRadius: "sm",
    overflow: "hidden",

    borderColor: {
      default: "neutral_border_1",
      hover: "accent_border_2",
    },
  }),
]);
