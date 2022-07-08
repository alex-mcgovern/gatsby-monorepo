import { globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

globalStyle(`code`, {
  background: vars.color.neutral_bg_3,
  color: vars.color.neutral_fg_2,
  fontWeight: vars.fontWeight.normal,
  paddingLeft: vars.spacing.spacing0,
  paddingRight: vars.spacing.spacing0,
});
