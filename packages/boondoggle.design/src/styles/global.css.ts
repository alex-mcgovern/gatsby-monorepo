import { globalStyle } from "@vanilla-extract/css";
import "../__css__/global/global_checkbox_styles.css";
import "./global/global_code_styles.css";
import "./global/global_fieldset_styles.css";
import "./global/global_heading_styles.css";
import "./global/global_highlight_js_styles.css";
import "./global/global_hr_styles.css";
import "./global/global_input_styles.css";
import "./global/global_list_styles.css";
import "./global/global_menu_styles.css";
import "./global/global_paragraph_styles.css";
import "./global/global_table_styles.css";
import { vars } from "./themes/theme.css";
import { varsLineHeight } from "./vars/vars_line_height.css";

/* —
* GLOBAL SELECTORS                                                        
// — */

globalStyle(`*`, {
  boxSizing: `border-box`,
  margin: 0,
});

globalStyle(`html`, {
  background: vars.color.background_1,
  fontSize: 16,
});

globalStyle(`html, body`, {
  height: `100%`,
});

globalStyle(`body`, {
  lineHeight: varsLineHeight.body_lg,
  fontSize: vars.fontSize.root,
  color: vars.color.text_midContrast,
  WebkitFontSmoothing: `antialiased`,
});

globalStyle(`body, button`, {
  fontFamily: vars.fontFamily.body,
});

/* —
* ANCHOR TAGS                                                        
// — */

globalStyle(`a`, {
  padding: 0,
  margin: 0,
  listStyleType: "none",
  textDecoration: "none",
  color: "inherit",
});

globalStyle(`b`, {
  fontWeight: vars.fontWeight.semibold,
});

/* —
* VISUAL ELEMENTS                                                         
// — */

globalStyle(`img, picture, video, canvas, svg`, {
  display: `block`,
  // maxWidth: `100%`,
});

/* —
* INPUTS                                                                  
// — */

globalStyle(`input, button, textarea, select`, {
  font: `inherit`,
});

/* —
* GATSBY OVERRIDES                                                        
// — */

globalStyle(`___gatsby`, {
  isolation: `isolate`,
});
