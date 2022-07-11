import {
  blue,
  blueDark,
  cyan,
  cyanDark,
  green,
  greenDark,
  red,
  redDark,
  slate,
  slateDark,
  yellow,
  yellowDark,
} from "@radix-ui/colors";
import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";
import { varsAspectRatio } from "./vars/vars_aspect_ratio.css";
import { varsBorderRadius } from "./vars/vars_border_radius.css";
import { varsShadow } from "./vars/vars_box_shadow.css";
import { varsFontSize } from "./vars/vars_font_size.css";
import { varsFontWeight } from "./vars/vars_font_weight.css";
import { varsGridTemplateColumns } from "./vars/vars_grid_template_columns.css";
import { varsLineHeight } from "./vars/vars_line_height.css";
import { varsSpacing } from "./vars/vars_spacing.css";
import { varsTransitionTime } from "./vars/vars_transition.css";
import { varsWidth } from "./vars/vars_width.css";

/** —————————————————————————————————————————————————————————————————————————————
 *      GLOBAL VARIABLES
 *      These are declared as css vars at the `root:` level, in scope of the `html` element
 * ——————————————————————————————————————————————————————————————————————————————— */

export const root = createGlobalTheme(":root", {
  aspectRatio: varsAspectRatio,
  fontFamily: {
    display: `"DM Sans", sans-serif;`,
    body: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"`,
  },
  fontSize: varsFontSize,
  fontWeight: varsFontWeight,
  gridTemplateColumns: varsGridTemplateColumns,
  transitionDuration: varsTransitionTime,
  lineHeight: varsLineHeight,
  spacing: varsSpacing,
  width: varsWidth,
  borderRadius: varsBorderRadius,
  boxShadow: varsShadow,
});

/** —————————————————————————————————————————————————————————————————————————————
 *      THEME CONFIG
 * ——————————————————————————————————————————————————————————————————————————————— */

/** —————————————————————————————————————————————
 *      ACCENT PALETTE
 * ——————————————————————————————————————————————— */

export const accentPalette_light = cyan;
export const accentPalette_dark = cyanDark;

/** —————————————————————————————————————————————
 *      NEUTRAL PALETTE
 * ——————————————————————————————————————————————— */

export const grayPalette_light = slate;
export const grayPalette_dark = slateDark;

/** —————————————————————————————————————————————
 *      NEUTRAL PALETTE
 * ——————————————————————————————————————————————— */

export const semanticGreenPalette_light = green;
export const semanticGreenPalette_dark = greenDark;

export const semanticRedPalette_light = red;
export const semanticRedPalette_dark = redDark;

export const semanticYellowPalette_light = yellow;
export const semanticYellowPalette_dark = yellowDark;

export const semanticBluePalette_light = blue;
export const semanticBluePalette_dark = blueDark;

/** ————————————————————————————————————————————————————————————————————————————
 *      COLOR THEME VARIANTS
 * ——————————————————————————————————————————————————————————————————————————————— */

/** —————————————————————————————————————————————
 *      THEME CONTRACT
 * ——————————————————————————————————————————————— */
const color = createThemeContract({
  /** ————————————————————
   *      ACCENT
   * ——————————————————————— */
  accent_bg_1: null,
  accent_bg_2: null,
  accent_ui_1: null,

  accent_ui_2: null,
  accent_ui_3: null,
  accent_border_1: null,

  accent_border_2: null,
  accent_border_3: null,

  accent_solid_1: null,
  accent_solid_2: null,

  accent_fg_1: null,
  accent_fg_2: null,

  /** ————————————————————
   *      NEUTRAL
   * ——————————————————————— */
  // We need absolute values for black and white for some use cases outside dark-mode variants
  black: null,
  white: null,

  neutral_bg_1: null,
  neutral_bg_2: null,

  neutral_ui_1: null,
  neutral_ui_2: null,
  neutral_ui_3: null,

  neutral_border_1: null,
  neutral_border_2: null,
  neutral_border_3: null,

  neutral_solid_1: null,
  neutral_solid_2: null,

  neutral_fg_1: null,
  neutral_fg_2: null,

  /** ————————————————————
   *      SEMANTIC
   * ——————————————————————— */
  semantic_green_bg: null,
  semantic_green_fg: null,

  semantic_red_bg: null,
  semantic_red_fg: null,

  semantic_yellow_bg: null,
  semantic_yellow_fg: null,

  semantic_blue: null,
  semantic_blue_2: null,
});

/** ————————————————————————————————————————————
 *      LIGHT THEME
 * ——————————————————————————————————————————————— */

export const lightTheme = createTheme(color, {
  /** ————————————————————
   *      ACCENT
   * ——————————————————————— */
  accent_bg_1: accentPalette_light.cyan1,
  accent_bg_2: accentPalette_light.cyan2,

  accent_ui_1: accentPalette_light.cyan3,
  accent_ui_2: accentPalette_light.cyan4,
  accent_ui_3: accentPalette_light.cyan5,

  accent_border_1: accentPalette_light.cyan6,
  accent_border_2: accentPalette_light.cyan7,
  accent_border_3: accentPalette_light.cyan8,

  accent_solid_1: accentPalette_light.cyan9,
  accent_solid_2: accentPalette_light.cyan10,

  accent_fg_1: accentPalette_light.cyan11,
  accent_fg_2: accentPalette_light.cyan12,

  /** ————————————————————
   *      NEUTRAL
   * ——————————————————————— */
  black: grayPalette_light.slate12,
  white: grayPalette_light.slate1,

  neutral_bg_1: grayPalette_light.slate1,
  neutral_bg_2: grayPalette_light.slate2,

  neutral_ui_1: grayPalette_light.slate3,
  neutral_ui_2: grayPalette_light.slate4,
  neutral_ui_3: grayPalette_light.slate5,

  neutral_border_1: grayPalette_light.slate6,
  neutral_border_2: grayPalette_light.slate7,
  neutral_border_3: grayPalette_light.slate8,

  neutral_solid_1: grayPalette_light.slate9,
  neutral_solid_2: grayPalette_light.slate10,

  neutral_fg_1: grayPalette_light.slate11,
  neutral_fg_2: grayPalette_light.slate12,

  /** ————————————————————
   *      SEMANTIC
   * ——————————————————————— */
  semantic_green_bg: semanticGreenPalette_light.green5,
  semantic_green_fg: semanticGreenPalette_light.green10,

  semantic_red_bg: semanticRedPalette_light.red5,
  semantic_red_fg: semanticRedPalette_light.red10,

  semantic_yellow_bg: semanticYellowPalette_light.yellow5,
  semantic_yellow_fg: semanticYellowPalette_light.yellow10,

  semantic_blue: semanticBluePalette_light.blue9,
  semantic_blue_2: semanticBluePalette_light.blue10,
});

{
  /** ————————————————————————————————————————————
   *      DARK THEME
   * ——————————————————————————————————————————————— */
}

export const darkTheme = createTheme(color, {
  /** ————————————————————
   *      ACCENT
   * ——————————————————————— */
  accent_bg_1: accentPalette_dark.cyan1,
  accent_bg_2: accentPalette_dark.cyan2,

  accent_ui_1: accentPalette_dark.cyan3,
  accent_ui_2: accentPalette_dark.cyan4,
  accent_ui_3: accentPalette_dark.cyan5,

  accent_border_1: accentPalette_dark.cyan6,
  accent_border_2: accentPalette_dark.cyan7,
  accent_border_3: accentPalette_dark.cyan8,

  accent_solid_1: accentPalette_dark.cyan9,
  accent_solid_2: accentPalette_dark.cyan10,

  accent_fg_1: accentPalette_dark.cyan11,
  accent_fg_2: accentPalette_dark.cyan12,

  /** ————————————————————
   *      NEUTRAL
   * ——————————————————————— */

  black: grayPalette_dark.slate1,
  white: grayPalette_dark.slate12,

  neutral_bg_1: grayPalette_dark.slate1,
  neutral_bg_2: grayPalette_dark.slate2,

  neutral_ui_1: grayPalette_dark.slate3,
  neutral_ui_2: grayPalette_dark.slate4,
  neutral_ui_3: grayPalette_dark.slate5,

  neutral_border_1: grayPalette_dark.slate6,
  neutral_border_2: grayPalette_dark.slate7,
  neutral_border_3: grayPalette_dark.slate8,

  neutral_solid_1: grayPalette_dark.slate9,
  neutral_solid_2: grayPalette_dark.slate10,

  neutral_fg_1: grayPalette_dark.slate11,
  neutral_fg_2: grayPalette_dark.slate12,

  /** ————————————————————
   *      SEMANTIC
   * ——————————————————————— */
  semantic_green_bg: semanticGreenPalette_dark.green5,
  semantic_green_fg: semanticGreenPalette_dark.green10,

  semantic_red_bg: semanticRedPalette_dark.red5,
  semantic_red_fg: semanticRedPalette_dark.red10,

  semantic_yellow_bg: semanticYellowPalette_dark.yellow5,
  semantic_yellow_fg: semanticYellowPalette_dark.yellow10,

  semantic_blue: semanticBluePalette_dark.blue9,
  semantic_blue_2: semanticBluePalette_dark.blue10,
});

/** —————————————————————————————————————————————————————————————————————————————
 *      EXPORT GLOBAL VARIABLES
 * ——————————————————————————————————————————————————————————————————————————————— */

export const vars = { ...root, color };
