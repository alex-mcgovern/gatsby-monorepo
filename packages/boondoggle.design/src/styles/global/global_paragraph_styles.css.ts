import { globalStyle } from "@vanilla-extract/css";
import { vars } from "~styles/themes/theme.css";

globalStyle(`p`, {
  // color: vars.color.text_highContrast,
  overflowWrap: `break-word`,
  // fontSize: vars.fontSize.body_lg,
  lineHeight: vars.lineHeight.body_lg,
  // maxWidth: vars.width.gridSpan6,
});
globalStyle(`p + p`, {
  marginBlockStart: vars.spacing.spacing3,
});

globalStyle(`p + p:last-child`, {
  marginBlockEnd: vars.spacing.spacing3,
});
