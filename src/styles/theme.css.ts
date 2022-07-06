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
import { createGlobalTheme } from "@vanilla-extract/css";
import { createTheme, createThemeContract } from "@vanilla-extract/css";
import { varsAspectRatio } from "./vars/vars_aspect_ratio.css";
import { varsBorderRadius } from "./vars/vars_border_radius.css";
import { varsFontSize } from "./vars/vars_font_size.css";
import { varsFontWeight } from "./vars/vars_font_weight.css";
import { varsGridTemplateColumns } from "./vars/vars_grid_template_columns.css";
import { varsLineHeight } from "./vars/vars_line_height.css";
import { varsSpacing } from "./vars/vars_spacing.css";
import { varsWidth } from "./vars/vars_width.css";

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

const color = createThemeContract({
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

  semantic_green: null,
  semantic_green_2: null,
  semantic_red: null,
  semantic_red_2: null,
  semantic_yellow: null,
  semantic_yellow_2: null,
  semantic_blue: null,
  semantic_blue_2: null,

  black: null,
  white: null,
});

const lightAccentPalette = violet;

const darkAccentPalette = violetDark;

const lightGrayPalette = mauve;
const darkGrayPalette = mauveDark;

export const lightTheme = createTheme(color, {
  /* ——————————————————————————————————————————————————————————————————————————————
  //      Accent SHADES                                                           
  // —————————————————————————————————————————————————————————————————————————————— */

  accent_bg_1: lightAccentPalette.violet1,
  accent_bg_2: lightAccentPalette.violet2,
  accent_bg_3: lightAccentPalette.violet3,

  accent_ui_1: lightAccentPalette.violet4,
  accent_ui_2: lightAccentPalette.violet5,
  accent_ui_3: lightAccentPalette.violet6,

  accent_border_1: lightAccentPalette.violet7,
  accent_border_2: lightAccentPalette.violet8,

  accent_solid_1: lightAccentPalette.violet9,
  accent_solid_2: lightAccentPalette.violet10,

  accent_fg_1: lightAccentPalette.violet11,
  accent_fg_2: lightAccentPalette.violet12,

  /* ——————————————————————————————————————————————————————————————————————————————
  //      NEUTRAL SHADES                                                           
  // —————————————————————————————————————————————————————————————————————————————— */

  neutral_bg_1: lightGrayPalette.mauve1,
  neutral_bg_2: lightGrayPalette.mauve2,
  neutral_bg_3: lightGrayPalette.mauve3,

  neutral_ui_1: lightGrayPalette.mauve4,
  neutral_ui_2: lightGrayPalette.mauve5,
  neutral_ui_3: lightGrayPalette.mauve6,

  neutral_border_1: lightGrayPalette.mauve7,
  neutral_border_2: lightGrayPalette.mauve8,

  neutral_solid_1: lightGrayPalette.mauve9,
  neutral_solid_2: lightGrayPalette.mauve10,

  neutral_fg_1: lightGrayPalette.mauve11,
  neutral_fg_2: lightGrayPalette.mauve12,

  semantic_green: green.green9,
  semantic_green_2: green.green10,

  semantic_red: red.red9,
  semantic_red_2: red.red10,

  semantic_yellow: yellow.yellow9,
  semantic_yellow_2: yellow.yellow10,

  semantic_blue: blue.blue9,
  semantic_blue_2: blue.blue10,

  black: lightAccentPalette.violet12,
  white: lightAccentPalette.violet1,
});

export const darkTheme = createTheme(color, {
  /* ——————————————————————————————————————————————————————————————————————————————
  //      Accent SHADES                                                           
  // —————————————————————————————————————————————————————————————————————————————— */

  accent_bg_1: darkAccentPalette.violet1,
  accent_bg_2: darkAccentPalette.violet2,

  accent_bg_3: darkAccentPalette.violet3,
  accent_ui_1: darkAccentPalette.violet4,
  accent_ui_2: darkAccentPalette.violet5,

  accent_ui_3: darkAccentPalette.violet6,
  accent_border_1: darkAccentPalette.violet7,
  accent_border_2: darkAccentPalette.violet8,

  accent_solid_1: darkAccentPalette.violet9,
  accent_solid_2: darkAccentPalette.violet10,

  accent_fg_1: darkAccentPalette.violet11,
  accent_fg_2: darkAccentPalette.violet12,

  neutral_bg_1: darkGrayPalette.mauve1,
  neutral_bg_2: darkGrayPalette.mauve2,
  neutral_bg_3: darkGrayPalette.mauve3,
  neutral_ui_1: darkGrayPalette.mauve4,
  neutral_ui_2: darkGrayPalette.mauve5,
  neutral_ui_3: darkGrayPalette.mauve6,
  neutral_border_1: darkGrayPalette.mauve7,
  neutral_border_2: darkGrayPalette.mauve8,
  neutral_solid_1: darkGrayPalette.mauve9,
  neutral_solid_2: darkGrayPalette.mauve10,
  neutral_fg_1: darkGrayPalette.mauve11,
  neutral_fg_2: darkGrayPalette.mauve12,

  semantic_green: greenDark.green9,
  semantic_green_2: greenDark.green10,
  semantic_red: redDark.red9,
  semantic_red_2: redDark.red10,
  semantic_yellow: yellowDark.yellow9,
  semantic_yellow_2: yellowDark.yellow10,
  semantic_blue: blueDark.blue9,
  semantic_blue_2: blueDark.blue10,

  black: darkAccentPalette.violet1,
  white: darkAccentPalette.violet12,
});

export const vars = { ...root, color };
