import {
  blue,
  blueDark,
  green,
  greenDark,
  mauve,
  mauveDark,
  red,
  redDark,
  violet,
  violetDark,
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
import { varsFontSize } from "./vars/vars_font_size.css";
import { varsFontWeight } from "./vars/vars_font_weight.css";
import { varsGridTemplateColumns } from "./vars/vars_grid_template_columns.css";
import { varsLineHeight } from "./vars/vars_line_height.css";
import { varsSpacing } from "./vars/vars_spacing.css";
import { varsWidth } from "./vars/vars_width.css";

/** —————————————————————————————————————————————————————————————————————————————
 *      GLOBAL VARIABLES
 *      These are declared as css vars at the `root:` level, in scope of the `html` element
 * ——————————————————————————————————————————————————————————————————————————————— */

export const root = createGlobalTheme(":root", {
  aspectRatio: varsAspectRatio,
  fontFamily: {
    body: '-apple-system, "Segoe UI", Verdana, Arial',
  },
  fontSize: varsFontSize,
  fontWeight: varsFontWeight,
  gridTemplateColumns: varsGridTemplateColumns,
  lineHeight: varsLineHeight,
  spacing: varsSpacing,
  width: varsWidth,
  borderRadius: varsBorderRadius,
});

/** —————————————————————————————————————————————————————————————————————————————
 *      THEME CONFIG
 * ——————————————————————————————————————————————————————————————————————————————— */

/** —————————————————————————————————————————————
 *      ACCENT PALETTE
 * ——————————————————————————————————————————————— */

export const accentPalette_light = violet;
export const accentPalette_dark = violetDark;

/** —————————————————————————————————————————————
 *      NEUTRAL PALETTE
 * ——————————————————————————————————————————————— */

export const grayPalette_light = mauve;
export const grayPalette_dark = mauveDark;

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
  accent_bg_3: null,

  accent_ui_1: null,
  accent_ui_2: null,
  accent_ui_3: null,

  accent_border_1: null,
  accent_border_2: null,

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
  neutral_bg_3: null,

  neutral_ui_1: null,
  neutral_ui_2: null,
  neutral_ui_3: null,

  neutral_border_1: null,
  neutral_border_2: null,

  neutral_solid_1: null,
  neutral_solid_2: null,

  neutral_fg_1: null,
  neutral_fg_2: null,

  /** ————————————————————
   *      SEMANTIC
   * ——————————————————————— */
  semantic_green: null,
  semantic_green_2: null,

  semantic_red: null,
  semantic_red_2: null,

  semantic_yellow: null,
  semantic_yellow_2: null,

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
  accent_bg_1: accentPalette_light.violet1,
  accent_bg_2: accentPalette_light.violet2,
  accent_bg_3: accentPalette_light.violet3,

  accent_ui_1: accentPalette_light.violet4,
  accent_ui_2: accentPalette_light.violet5,
  accent_ui_3: accentPalette_light.violet6,

  accent_border_1: accentPalette_light.violet7,
  accent_border_2: accentPalette_light.violet8,

  accent_solid_1: accentPalette_light.violet9,
  accent_solid_2: accentPalette_light.violet10,

  accent_fg_1: accentPalette_light.violet11,
  accent_fg_2: accentPalette_light.violet12,

  /** ————————————————————
   *      NEUTRAL
   * ——————————————————————— */
  black: grayPalette_light.mauve12,
  white: grayPalette_light.mauve1,

  neutral_bg_1: grayPalette_light.mauve1,
  neutral_bg_2: grayPalette_light.mauve2,
  neutral_bg_3: grayPalette_light.mauve3,

  neutral_ui_1: grayPalette_light.mauve4,
  neutral_ui_2: grayPalette_light.mauve5,
  neutral_ui_3: grayPalette_light.mauve6,

  neutral_border_1: grayPalette_light.mauve7,
  neutral_border_2: grayPalette_light.mauve8,

  neutral_solid_1: grayPalette_light.mauve9,
  neutral_solid_2: grayPalette_light.mauve10,

  neutral_fg_1: grayPalette_light.mauve11,
  neutral_fg_2: grayPalette_light.mauve12,

  /** ————————————————————
   *      SEMANTIC
   * ——————————————————————— */
  semantic_green: semanticGreenPalette_light.green9,
  semantic_green_2: semanticGreenPalette_light.green10,

  semantic_red: semanticRedPalette_light.red9,
  semantic_red_2: semanticRedPalette_light.red10,

  semantic_yellow: semanticYellowPalette_light.yellow9,
  semantic_yellow_2: semanticYellowPalette_light.yellow10,

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
  accent_bg_1: accentPalette_dark.violet1,
  accent_bg_2: accentPalette_dark.violet2,

  accent_bg_3: accentPalette_dark.violet3,
  accent_ui_1: accentPalette_dark.violet4,
  accent_ui_2: accentPalette_dark.violet5,

  accent_ui_3: accentPalette_dark.violet6,
  accent_border_1: accentPalette_dark.violet7,
  accent_border_2: accentPalette_dark.violet8,

  accent_solid_1: accentPalette_dark.violet9,
  accent_solid_2: accentPalette_dark.violet10,

  accent_fg_1: accentPalette_dark.violet11,
  accent_fg_2: accentPalette_dark.violet12,

  /** ————————————————————
   *      NEUTRAL
   * ——————————————————————— */

  black: grayPalette_dark.mauve1,
  white: grayPalette_dark.mauve12,

  neutral_bg_1: grayPalette_dark.mauve1,
  neutral_bg_2: grayPalette_dark.mauve2,
  neutral_bg_3: grayPalette_dark.mauve3,

  neutral_ui_1: grayPalette_dark.mauve4,
  neutral_ui_2: grayPalette_dark.mauve5,
  neutral_ui_3: grayPalette_dark.mauve6,

  neutral_border_1: grayPalette_dark.mauve7,
  neutral_border_2: grayPalette_dark.mauve8,

  neutral_solid_1: grayPalette_dark.mauve9,
  neutral_solid_2: grayPalette_dark.mauve10,

  neutral_fg_1: grayPalette_dark.mauve11,
  neutral_fg_2: grayPalette_dark.mauve12,

  /** ————————————————————
   *      SEMANTIC
   * ——————————————————————— */
  semantic_green: semanticGreenPalette_dark.green9,
  semantic_green_2: semanticGreenPalette_dark.green10,

  semantic_red: semanticRedPalette_dark.red9,
  semantic_red_2: semanticRedPalette_dark.red10,

  semantic_yellow: semanticYellowPalette_dark.yellow9,
  semantic_yellow_2: semanticYellowPalette_dark.yellow10,

  semantic_blue: semanticBluePalette_dark.blue9,
  semantic_blue_2: semanticBluePalette_dark.blue10,
});

/** —————————————————————————————————————————————————————————————————————————————
 *      EXPORT GLOBAL VARIABLES
 * ——————————————————————————————————————————————————————————————————————————————— */

export const vars = { ...root, color };
