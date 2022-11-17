import {
  blue,
  blueDark,
  green,
  greenDark,
  mauve,
  mauveDark,
  plum,
  plumDark,
  red,
  redDark,
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

export const accentPalette_light = plum;
export const accentPalette_dark = plumDark;

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
  accent_bg_1: accentPalette_light.plum1,
  accent_bg_2: accentPalette_light.plum2,

  accent_ui_1: accentPalette_light.plum3,
  accent_ui_2: accentPalette_light.plum4,
  accent_ui_3: accentPalette_light.plum5,

  accent_border_1: accentPalette_light.plum6,
  accent_border_2: accentPalette_light.plum7,
  accent_border_3: accentPalette_light.plum8,

  accent_solid_1: accentPalette_light.plum9,
  accent_solid_2: accentPalette_light.plum10,

  accent_fg_1: accentPalette_light.plum11,
  accent_fg_2: accentPalette_light.plum12,

  /** ————————————————————
   *      NEUTRAL
   * ——————————————————————— */
  black: grayPalette_light.mauve12,
  white: grayPalette_light.mauve1,

  neutral_bg_1: grayPalette_light.mauve1,
  neutral_bg_2: grayPalette_light.mauve2,

  neutral_ui_1: grayPalette_light.mauve3,
  neutral_ui_2: grayPalette_light.mauve4,
  neutral_ui_3: grayPalette_light.mauve5,

  neutral_border_1: grayPalette_light.mauve6,
  neutral_border_2: grayPalette_light.mauve7,
  neutral_border_3: grayPalette_light.mauve8,

  neutral_solid_1: grayPalette_light.mauve9,
  neutral_solid_2: grayPalette_light.mauve10,

  neutral_fg_1: grayPalette_light.mauve11,
  neutral_fg_2: grayPalette_light.mauve12,

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
  accent_bg_1: accentPalette_dark.plum1,
  accent_bg_2: accentPalette_dark.plum2,

  accent_ui_1: accentPalette_dark.plum3,
  accent_ui_2: accentPalette_dark.plum4,
  accent_ui_3: accentPalette_dark.plum5,

  accent_border_1: accentPalette_dark.plum6,
  accent_border_2: accentPalette_dark.plum7,
  accent_border_3: accentPalette_dark.plum8,

  accent_solid_1: accentPalette_dark.plum9,
  accent_solid_2: accentPalette_dark.plum10,

  accent_fg_1: accentPalette_dark.plum11,
  accent_fg_2: accentPalette_dark.plum12,

  /** ————————————————————
   *      NEUTRAL
   * ——————————————————————— */

  black: grayPalette_dark.mauve1,
  white: grayPalette_dark.mauve12,

  neutral_bg_1: grayPalette_dark.mauve1,
  neutral_bg_2: grayPalette_dark.mauve2,

  neutral_ui_1: grayPalette_dark.mauve3,
  neutral_ui_2: grayPalette_dark.mauve4,
  neutral_ui_3: grayPalette_dark.mauve5,

  neutral_border_1: grayPalette_dark.mauve6,
  neutral_border_2: grayPalette_dark.mauve7,
  neutral_border_3: grayPalette_dark.mauve8,

  neutral_solid_1: grayPalette_dark.mauve9,
  neutral_solid_2: grayPalette_dark.mauve10,

  neutral_fg_1: grayPalette_dark.mauve11,
  neutral_fg_2: grayPalette_dark.mauve12,

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
