import { globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

globalStyle(`hr`, {
  borderBottom: "none",
  borderTop: "1px solid",
  borderColor: vars.color.neutral_fg_1,
  marginTop: vars.spacing.spacing5,
  marginBottom: vars.spacing.spacing5,
});
