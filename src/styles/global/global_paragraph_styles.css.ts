import { globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

globalStyle(`p`, {
  overflowWrap: `break-word`,
  marginTop: vars.spacing.spacing3,
  marginBottom: vars.spacing.spacing3,
});
