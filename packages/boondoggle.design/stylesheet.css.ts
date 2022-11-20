import { globalStyle } from "@vanilla-extract/css";
import "./src/__css__/global/global_button.css";
import "./src/__css__/global/global_code.css";
import "./src/__css__/global/global_fieldset.css";
import "./src/__css__/global/global_headings.css";
import "./src/__css__/global/global_hr.css";
import "./src/__css__/global/global_input.css";
import "./src/__css__/global/global_list_styles.css";
import "./src/__css__/global/global_paragraph_styles.css";
import "./src/__css__/global/global_tables.css";
import { vars } from "./src/__css__/theme.css";

/* ——————————————————————————————————————————————————————————————————————————————
//      GLOBAL SELECTORS                                                        
// —————————————————————————————————————————————————————————————————————————————— */

globalStyle(`*`, {
  boxSizing: `border-box`,
  margin: 0,
});

globalStyle(`html`, {
  fontSize: vars.fontSize.root,
  color: vars.color.neutral_text_highContrast,
  backgroundColor: vars.color.neutral_background_raised,
});

globalStyle(`html, body`, {
  height: `100%`,
  fontFamily: vars.fontFamily.body,
});

globalStyle(`body`, {
  lineHeight: 1.8,
  WebkitFontSmoothing: `antialiased`,
  width: "100vw",
});

/* ——————————————————————————————————————————————————————————————————————————————
//      ANCHOR TAGS                                                        
// —————————————————————————————————————————————————————————————————————————————— */

globalStyle(`a`, {
  padding: 0,
  margin: 0,
  listStyleType: "none",
  color: vars.color.accent_text_lowContrast,
});

/* ——————————————————————————————————————————————————————————————————————————————
//      VISUAL ELEMENTS                                                         
// —————————————————————————————————————————————————————————————————————————————— */

globalStyle(`img, picture, video, canvas, svg`, {
  display: `block`,
  maxWidth: `100%`,
});

/* ——————————————————————————————————————————————————————————————————————————————
//      INPUTS                                                                  
// —————————————————————————————————————————————————————————————————————————————— */

globalStyle(`input, button, textarea, select`, {
  font: `inherit`,
});

/* ——————————————————————————————————————————————————————————————————————————————
//      GATSBY OVERRIDES                                                        
// —————————————————————————————————————————————————————————————————————————————— */

globalStyle(`___gatsby`, {
  isolation: `isolate`,
});
