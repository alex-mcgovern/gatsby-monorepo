import { globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

globalStyle(`ul`, {
  marginBlockStart: vars.spacing.spacing1,
  marginBlockEnd: vars.spacing.spacing1,
  paddingInlineStart: vars.spacing.spacing1,
});
