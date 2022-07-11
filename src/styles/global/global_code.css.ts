import { globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

globalStyle(`code`, {
  background: vars.color.neutral_ui_2,
  color: vars.color.neutral_fg_2,
  fontWeight: vars.fontWeight.normal,
});
