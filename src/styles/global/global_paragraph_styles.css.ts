import { globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

globalStyle(`p`, {
  overflowWrap: `break-word`,
  fontSize: vars.fontSize.body_lg,
  marginTop: vars.spacing.spacing1,
  marginBottom: vars.spacing.spacing1,
});
