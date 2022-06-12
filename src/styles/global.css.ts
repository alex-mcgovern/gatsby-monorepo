import { globalStyle } from "@vanilla-extract/css";
import "./global/global_button.css";
import "./global/global_fieldset.css";
import "./global/global_headings.css";
import "./global/paragraph.css";
import { varsFontSize } from "./vars/vars_font_size.css";

export const rootColors = {
  light: {
    bg: `white`,
    color: `black`,
  },
  dark: {
    bg: `#0B1222`,
    color: `#CBD5E1`,
  },
};

/* ——————————————————————————————————————————————————————————————————————————————
//      DARK MODE SELECTORS
// —————————————————————————————————————————————————————————————————————————————— */

globalStyle(`.dark`, {
  background: rootColors.dark.bg,
  color: rootColors.dark.color,
});

/* ——————————————————————————————————————————————————————————————————————————————
//      GLOBAL SELECTORS                                                        
// —————————————————————————————————————————————————————————————————————————————— */

globalStyle(`*`, {
  boxSizing: `border-box`,
  margin: 0,
});

globalStyle(`html`, {
  background: rootColors.light.bg,
  color: rootColors.light.color,
  fontSize: 16,
});

globalStyle(`html, body`, {
  height: `100%`,
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
});

globalStyle(`body`, {
  lineHeight: 1.4,
  fontSize: varsFontSize.body_lg,
  WebkitFontSmoothing: `antialiased`,
});

/* ——————————————————————————————————————————————————————————————————————————————
//      ANCHOR TAGS                                                        
// —————————————————————————————————————————————————————————————————————————————— */

globalStyle(`a`, {
  padding: 0,
  margin: 0,
  listStyleType: "none",
  textDecoration: "none",
  color: "inherit",
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
