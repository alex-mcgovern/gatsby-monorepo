import { globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

// globalStyle(`h1, h2, h3, h4, h5, h6`, {
//   overflowWrap: `break-word`,
//   fontWeight: vars.fontWeight.bold,
//   lineHeight: 1.2,
//   margin: 0,
// });

globalStyle(`table`, {
  borderRadius: 8,
  overflow: "hidden",
  boxSizing: "border-box",
  border: "1px solid",
  borderColor: vars.color.neutral_ui_3,
  borderSpacing: 0,
  emptyCells: "show",
  marginBottom: vars.spacing.spacing3,
  marginTop: vars.spacing.spacing3,
});

globalStyle(`thead`, {
  backgroundColor: vars.color.neutral_bg_3,
  textAlign: "left",
  verticalAlign: "bottom",
});

globalStyle(`tr`, {
  overflow: "visible",
});

globalStyle(`tbody tr:nth-of-type(odd)`, {
  backgroundColor: vars.color.neutral_bg_2,
});

globalStyle(`th`, {
  textAlign: "left",
  padding: vars.spacing.spacing2,
});

globalStyle(`td`, {
  verticalAlign: "top",
  border: "none",

  padding: vars.spacing.spacing2,

  fontSize: "inherit",
  margin: 0,
  overflow: "visible",
});
