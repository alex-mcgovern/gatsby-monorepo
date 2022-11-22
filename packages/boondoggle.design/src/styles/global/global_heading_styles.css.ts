import { globalStyle } from "@vanilla-extract/css";
import { vars } from "../../__css__/theme.css";
import { varsFontSize } from "../vars/vars_font_size.css";
import { varsLineHeight } from "../vars/vars_line_height.css";

globalStyle(`h1, h2, h3, h4, h5, h6`, {
  overflowWrap: `break-word`,
  color: vars.color.neutral_text_highContrast,
  // maxWidth: vars.width.gridSpan6,
  // marginTop: vars.spacing.spacing2,
  marginBottom: vars.spacing.spacing2,
});

globalStyle(`h1`, {
  fontSize: varsFontSize.h1,
  lineHeight: varsLineHeight.h1,
  fontWeight: vars.fontWeight.extrabold,
});

globalStyle(`h2`, {
  fontSize: varsFontSize.h2,
  lineHeight: varsLineHeight.h2,
  fontWeight: vars.fontWeight.extrabold,
});

globalStyle(`h3`, {
  fontSize: varsFontSize.h3,
  lineHeight: varsLineHeight.h3,
  fontWeight: vars.fontWeight.extrabold,
});

globalStyle(`h4`, {
  fontSize: varsFontSize.h4,
  lineHeight: varsLineHeight.h4,
  fontWeight: vars.fontWeight.bold,
});

globalStyle(`h5`, {
  fontSize: varsFontSize.h5,
  lineHeight: varsLineHeight.h5,
  fontWeight: vars.fontWeight.bold,
});

globalStyle(`h6`, {
  fontSize: varsFontSize.h6,
  lineHeight: varsLineHeight.h6,
  fontWeight: vars.fontWeight.bold,
});
