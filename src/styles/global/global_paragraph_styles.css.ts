import { globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

globalStyle(`p`, {
  overflowWrap: `break-word`,
  fontSize: vars.fontSize.body_md,
  // marginTop: vars.spacing.spacing3,
  marginBottom: vars.spacing.spacing1,
});
