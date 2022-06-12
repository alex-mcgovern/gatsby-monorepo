import { style } from "@vanilla-extract/css";
import { resetList } from "../../../../styles/resets/reset_list.css";
import { varsColors } from "../../../../styles/vars/vars_colors.css";
import { varsSpacing } from "../../../../styles/vars/vars_spacing.css";

export const dropdownWrapper = style([
  resetList,
  {
    zIndex: 9000,
    display: "block",
    position: "absolute",
    top: "100%",
    left: 0,
    width: "max-content",

    marginTop: varsSpacing.spacing1,

    borderRadius: varsSpacing.spacing2,
    border: "1px solid",
    borderColor: varsColors.gray30,

    overflowY: "scroll",
    overflow: "hidden",

    background: varsColors.white,
  },
]);
