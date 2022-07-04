import { globalStyle } from "@vanilla-extract/css";
import "./global/global_button.css";
import "./global/global_code.css";
import "./global/global_fieldset.css";
import "./global/global_headings.css";
import "./global/global_hr.css";
import "./global/global_input.css";
import "./global/global_paragraph_styles.css";
import "./global/global_tables.css";
import { vars } from "./theme.css";
import { varsBackgroundImage } from "./vars/vars_background_image.css";

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
  backgroundColor: rootColors.dark.bg,
  color: rootColors.dark.color,
});

/* ——————————————————————————————————————————————————————————————————————————————
//      GLOBAL SELECTORS                                                        
// —————————————————————————————————————————————————————————————————————————————— */

globalStyle(`*`, {
  boxSizing: `border-box`,
  margin: 0,
  // outline: "1px solid red",
});

globalStyle(`html`, {
  color: vars.color.neutral_fg_2,
  fontSize: 16,
  backgroundColor: vars.color.neutral_bg_2,
  backgroundImage: varsBackgroundImage.noise,
});

globalStyle(`html, body`, {
  height: `100%`,
  fontSize: 16,
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
});

globalStyle(`body`, {
  fontSize: vars.fontSize.body_lg,
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
  // textDecoration: "none",
  color: vars.color.accent_fg_1,
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
