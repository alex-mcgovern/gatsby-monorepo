import { globalStyle } from "@vanilla-extract/css";
import { vars } from "~styles/themes/theme.css";
import { varsSpacing } from "~styles/vars/vars_spacing.css";

globalStyle(`hr`, {
  borderBottom: "none",
  borderTop: "1px solid",
  borderColor: vars.color.dividerColorLight,
  marginTop: varsSpacing.spacing4,
  marginBottom: varsSpacing.spacing4,
});
