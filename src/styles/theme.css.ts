import {
  green,
  greenDark,
  mauve,
  mauveDark,
  purple,
  purpleDark,
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
import { varsFontSize } from "./vars/vars_font_size.css";
import { varsFontWeight } from "./vars/vars_font_weight.css";
import { varsGridTemplateColumns } from "./vars/vars_grid_template_columns.css";
import { varsLineHeight } from "./vars/vars_line_height.css";
import { varsSpacing } from "./vars/vars_spacing.css";

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
});

const color = createThemeContract({
  primary_background: null,
  primary_background_dark: null,
  primary_ui_base: null,
  primary_ui_hover: null,
  primary_ui_selected: null,
  primary_border_nonInteractive: null,
  primary_border_interactive: null,
  primary_border_interactive_focus: null,
  primary_solid_base: null,
  primary_solid_hover: null,
  primary_text_lowContrast: null,
  primary_text_highContrast: null,

  accent_background: null,
  accent_background_dark: null,
  accent_ui_base: null,
  accent_ui_hover: null,
  accent_ui_selected: null,
  accent_border_nonInteractive: null,
  accent_border_interactive: null,
  accent_border_interactive_focus: null,
  accent_solid_base: null,
  accent_solid_hover: null,
  accent_text_lowContrast: null,
  accent_text_highContrast: null,

  neutral_background: null,
  neutral_background_dark: null,
  neutral_ui_base: null,
  neutral_ui_base_hover: null,
  neutral_ui_selected: null,
  neutral_border_nonInteractive: null,
  neutral_border_interactive: null,
  neutral_border_interactive_focus: null,
  neutral_solid_base: null,
  neutral_solid_focus: null,
  neutral_text_lowContrast: null,
  neutral_text_highContrast: null,

  semanticGreen: null,
  semanticRed: null,
  semanticYellow: null,

  white: null,
});

const lightPrimaryPalette = purple;
const lightAccentPalette = violet;
const darkPrimaryPalette = purpleDark;
const darkAccentPalette = violetDark;

const lightGrayPalette = mauve;
const darkGrayPalette = mauveDark;

export const lightTheme = createTheme(color, {
  /* ——————————————————————————————————————————————————————————————————————————————
  //      PRIMARY SHADES                                                           
  // —————————————————————————————————————————————————————————————————————————————— */

  primary_background: lightPrimaryPalette.purple1,
  primary_background_dark: lightPrimaryPalette.purple2,

  primary_ui_base: lightPrimaryPalette.purple3,
  primary_ui_hover: lightPrimaryPalette.purple4,
  primary_ui_selected: lightPrimaryPalette.purple5,

  primary_border_nonInteractive: lightPrimaryPalette.purple6,
  primary_border_interactive: lightPrimaryPalette.purple7,
  primary_border_interactive_focus: lightPrimaryPalette.purple8,

  primary_solid_base: lightPrimaryPalette.purple9,
  primary_solid_hover: lightPrimaryPalette.purple10,

  primary_text_lowContrast: lightPrimaryPalette.purple11,
  primary_text_highContrast: lightPrimaryPalette.purple12,

  /* ——————————————————————————————————————————————————————————————————————————————
  //      ACCENT SHADES                                                           
  // —————————————————————————————————————————————————————————————————————————————— */

  accent_background: lightAccentPalette.violet1,
  accent_background_dark: lightAccentPalette.violet2,

  accent_ui_base: lightAccentPalette.violet3,
  accent_ui_hover: lightAccentPalette.violet4,
  accent_ui_selected: lightAccentPalette.violet5,

  accent_border_nonInteractive: lightAccentPalette.violet6,
  accent_border_interactive: lightAccentPalette.violet7,
  accent_border_interactive_focus: lightAccentPalette.violet8,

  accent_solid_base: lightAccentPalette.violet9,
  accent_solid_hover: lightAccentPalette.violet10,

  accent_text_lowContrast: lightAccentPalette.violet11,
  accent_text_highContrast: lightAccentPalette.violet12,

  /* ——————————————————————————————————————————————————————————————————————————————
  //      NEUTRAL SHADES                                                           
  // —————————————————————————————————————————————————————————————————————————————— */

  neutral_background: lightGrayPalette.mauve1,
  neutral_background_dark: lightGrayPalette.mauve2,
  neutral_ui_base: lightGrayPalette.mauve3,
  neutral_ui_base_hover: lightGrayPalette.mauve4,
  neutral_ui_selected: lightGrayPalette.mauve5,
  neutral_border_nonInteractive: lightGrayPalette.mauve6,
  neutral_border_interactive: lightGrayPalette.mauve7,
  neutral_border_interactive_focus: lightGrayPalette.mauve8,
  neutral_solid_base: lightGrayPalette.mauve9,
  neutral_solid_focus: lightGrayPalette.mauve10,
  neutral_text_lowContrast: lightGrayPalette.mauve11,
  neutral_text_highContrast: lightGrayPalette.mauve12,

  semanticGreen: green.green10,
  semanticRed: red.red10,
  semanticYellow: yellow.yellow10,

  white: lightPrimaryPalette.purple1,
});

export const darkTheme = createTheme(color, {
  /* ——————————————————————————————————————————————————————————————————————————————
  //      PRIMARY SHADES                                                           
  // —————————————————————————————————————————————————————————————————————————————— */

  primary_background: darkPrimaryPalette.purple1,
  primary_background_dark: darkPrimaryPalette.purple2,

  primary_ui_base: darkPrimaryPalette.purple3,
  primary_ui_hover: darkPrimaryPalette.purple4,
  primary_ui_selected: darkPrimaryPalette.purple5,

  primary_border_nonInteractive: darkPrimaryPalette.purple6,
  primary_border_interactive: darkPrimaryPalette.purple7,
  primary_border_interactive_focus: darkPrimaryPalette.purple8,

  primary_solid_base: darkPrimaryPalette.purple9,
  primary_solid_hover: darkPrimaryPalette.purple10,

  primary_text_lowContrast: darkPrimaryPalette.purple11,
  primary_text_highContrast: darkPrimaryPalette.purple12,

  accent_background: darkAccentPalette.violet1,
  accent_background_dark: darkAccentPalette.violet2,
  accent_ui_base: darkAccentPalette.violet3,
  accent_ui_hover: darkAccentPalette.violet4,
  accent_ui_selected: darkAccentPalette.violet5,
  accent_border_nonInteractive: darkAccentPalette.violet6,
  accent_border_interactive: darkAccentPalette.violet7,
  accent_border_interactive_focus: darkAccentPalette.violet8,
  accent_solid_base: darkAccentPalette.violet9,
  accent_solid_hover: darkAccentPalette.violet10,
  accent_text_lowContrast: darkAccentPalette.violet11,
  accent_text_highContrast: darkAccentPalette.violet12,

  neutral_background: darkGrayPalette.mauve1,
  neutral_background_dark: darkGrayPalette.mauve2,
  neutral_ui_base: darkGrayPalette.mauve3,
  neutral_ui_base_hover: darkGrayPalette.mauve4,
  neutral_ui_selected: darkGrayPalette.mauve5,
  neutral_border_nonInteractive: darkGrayPalette.mauve6,
  neutral_border_interactive: darkGrayPalette.mauve7,
  neutral_border_interactive_focus: darkGrayPalette.mauve8,
  neutral_solid_base: darkGrayPalette.mauve9,
  neutral_solid_focus: darkGrayPalette.mauve10,
  neutral_text_lowContrast: darkGrayPalette.mauve11,
  neutral_text_highContrast: darkGrayPalette.mauve12,

  semanticGreen: greenDark.green10,
  semanticRed: redDark.red10,
  semanticYellow: yellowDark.yellow10,

  white: darkPrimaryPalette.purple12,
});

export const vars = { ...root, color };
