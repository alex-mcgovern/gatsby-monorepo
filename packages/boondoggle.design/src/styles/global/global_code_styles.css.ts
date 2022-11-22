import { globalStyle } from "@vanilla-extract/css";
import { vars } from "../themes/theme.css";

globalStyle(`code`, {
  fontFamily: vars.fontFamily.code,
  fontWeight: vars.fontWeight.semibold,
  fontSize: "82.5%",
  lineHeight: vars.lineHeight.code,
});
