import { globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

globalStyle(`h1, h2, h3, h4, h5, h6`, {
  overflowWrap: `break-word`,
  fontWeight: vars.fontWeight.bold,
  lineHeight: 1.2,
  margin: 0,
});

globalStyle(`h6`, {
  fontSize: vars.fontSize.body_sm,
});

globalStyle(`h5`, {
  fontSize: vars.fontSize.body_lg,
});

globalStyle(`h4`, {
  fontSize: vars.fontSize.h6,
});

globalStyle(`h3`, {
  fontSize: vars.fontSize.h5,
});

globalStyle(`h2`, {
  fontSize: vars.fontSize.h4,
});

globalStyle(`h1`, {
  fontSize: vars.fontSize.h3,
});
