import { globalStyle } from "@vanilla-extract/css";
import { vars } from "../themes/theme.css";
import { MEDIA_QUERY_DESKTOP } from "./css_vars_media_queries";

globalStyle(`table`, {
  fontSize: vars.fontSize.body_sm,
  lineHeight: vars.lineHeight.body_sm,

  border: `1px solid ${vars.color.dividerColorLight}`,
  borderSpacing: 0,
  borderCollapse: "separate",

  marginTop: vars.spacing.spacing3,
  marginBottom: vars.spacing.spacing3,

  width: "100%",

  "@media": {
    [MEDIA_QUERY_DESKTOP]: {
      // tableLayout: "fixed",
    },
  },
});
globalStyle(`table thead`, {
  color: vars.color.text_lowContrast,
  // background: vars.color.background_2,
});

// globalStyle(`tbody tr`, {
//   borderTop: `1px solid ${vars.color.dividerColorLight}`,
// });

globalStyle(`table tr:not(:last-child) td, table thead tr th`, {
  borderBottom: `1px solid ${vars.color.dividerColorLight}`,
});

globalStyle(`th, td`, {
  textAlign: "left",
  verticalAlign: "middle",
  padding: vars.spacing.spacing2,
});
