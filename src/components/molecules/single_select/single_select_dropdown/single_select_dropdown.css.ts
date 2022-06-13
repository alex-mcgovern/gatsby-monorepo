import { style } from "@vanilla-extract/css";
import { vars } from "../../../../styles/global_theme.css";
import { resetList } from "../../../../styles/resets/reset_list.css";

export const dropdownWrapper = style([
  resetList,
  {
    zIndex: 9000,
    display: "block",
    position: "absolute",
    top: "100%",
    left: 0,
    width: "max-content",

    marginTop: vars.spacing.spacing1,

    borderRadius: vars.spacing.spacing2,
    border: "1px solid",
    borderColor: vars.color.gray500,

    overflowY: "scroll",
    overflow: "hidden",

    background: vars.color.white,
  },
]);
