import { style } from "@vanilla-extract/css";
import { getFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import { resetList } from "../../../../styles/resets/reset_list.css";
import { vars } from "../../../../styles/theme.css";

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

    overflowY: "scroll",
    overflow: "hidden",

    background: vars.color.neutral_background,
  },
  getFunctionalClassNames({
    color: "neutral_text_highContrast",
    background: "neutral_ui_base",
    border: "1px solid",
    borderRadius: "sm",

    borderColor: {
      default: "neutral_border_interactive",
      hover: "primary_border_interactive_focus",
    },
  }),
]);
