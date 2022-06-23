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
    overflowY: "scroll",
    marginTop: vars.spacing.spacing2,
  },
  getFunctionalClassNames({
    display: "block",
    position: "absolute",
    color: "primary_text_highContrast",
    backgroundColor: "neutral_background",
    border: "1px solid",
    borderRadius: "sm",
    overflow: "hidden",

    borderColor: {
      default: "neutral_border_interactive",
      hover: "primary_border_interactive_focus",
    },
  }),
]);
