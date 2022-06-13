import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/global_theme.css";

export const maxWidthContainer = style({
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: vars.spacing.gridWidth,
});
