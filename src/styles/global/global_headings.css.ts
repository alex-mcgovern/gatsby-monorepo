import { globalStyle } from "@vanilla-extract/css";
import { varsFontSize } from "../vars/vars_font_size.css";
import { varsFontWeight } from "../vars/vars_font_weight.css";
import { varsSpacing } from "../vars/vars_spacing.css";

globalStyle(`h1, h2, h3, h4, h5, h6`, {
  overflowWrap: `break-word`,
  fontWeight: varsFontWeight.bold,
  lineHeight: 1.2,
  marginTop: varsSpacing[5],
  marginBottom: varsSpacing[5],
});

globalStyle(`h6`, {
  fontSize: varsFontSize.h6,
});

globalStyle(`h5`, {
  fontSize: varsFontSize.h5,
});

globalStyle(`h4`, {
  fontSize: varsFontSize.h4,
});

globalStyle(`h3`, {
  fontSize: varsFontSize.h3,
});

globalStyle(`h2`, {
  fontSize: varsFontSize.h2,
});

globalStyle(`h1`, {
  fontSize: varsFontSize.h1,
});
