import { globalStyle } from "@vanilla-extract/css";
import { vars } from "../global_theme.css";

globalStyle(`p`, {
  overflowWrap: `break-word`,
  marginTop: vars.spacing.spacing6,
  marginBottom: vars.spacing.spacing6,
});
