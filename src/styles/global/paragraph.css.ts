import { globalStyle } from "@vanilla-extract/css";
import { varsFontSize } from "../vars/vars_font_size.css";
import { varsSpacing } from "../vars/vars_spacing.css";

globalStyle(`p`, {
  overflowWrap: `break-word`,
  marginTop: varsSpacing[5],
  marginBottom: varsSpacing[5],
});
