import {
  green,
  greenDark,
  mauve,
  mauveDark,
  orange,
  orangeDark,
  pink,
  pinkDark,
  red,
  redDark,
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
import { varsShadow } from "./vars/vars_shadow.css";
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
  shadow: varsShadow,
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

const lightPrimaryPalette = pink;
const lightAccentPalette = orange;
const darkPrimaryPalette = pinkDark;
const darkAccentPalette = orangeDark;

const lightGrayPalette = mauve;
const darkGrayPalette = mauveDark;

export const lightTheme = createTheme(color, {
  primary_background: lightPrimaryPalette.pink1,
  primary_background_dark: lightPrimaryPalette.pink2,
  primary_ui_base: lightPrimaryPalette.pink3,
  primary_ui_hover: lightPrimaryPalette.pink4,
  primary_ui_selected: lightPrimaryPalette.pink5,
  primary_border_nonInteractive: lightPrimaryPalette.pink6,
  primary_border_interactive: lightPrimaryPalette.pink7,
  primary_border_interactive_focus: lightPrimaryPalette.pink8,
  primary_solid_base: lightPrimaryPalette.pink9,
  primary_solid_hover: lightPrimaryPalette.pink10,
  primary_text_lowContrast: lightPrimaryPalette.pink11,
  primary_text_highContrast: lightPrimaryPalette.pink12,

  accent_background: lightAccentPalette.orange1,
  accent_background_dark: lightAccentPalette.orange2,
  accent_ui_base: lightAccentPalette.orange3,
  accent_ui_hover: lightAccentPalette.orange4,
  accent_ui_selected: lightAccentPalette.orange5,
  accent_border_nonInteractive: lightAccentPalette.orange6,
  accent_border_interactive: lightAccentPalette.orange7,
  accent_border_interactive_focus: lightAccentPalette.orange8,
  accent_solid_base: lightAccentPalette.orange9,
  accent_solid_hover: lightAccentPalette.orange10,
  accent_text_lowContrast: lightAccentPalette.orange11,
  accent_text_highContrast: lightAccentPalette.orange12,

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

  white: lightPrimaryPalette.pink1,
});

export const darkTheme = createTheme(color, {
  primary_background: darkPrimaryPalette.pink1,
  primary_background_dark: darkPrimaryPalette.pink2,
  primary_ui_base: darkPrimaryPalette.pink3,
  primary_ui_hover: darkPrimaryPalette.pink4,
  primary_ui_selected: darkPrimaryPalette.pink5,
  primary_border_nonInteractive: darkPrimaryPalette.pink6,
  primary_border_interactive: darkPrimaryPalette.pink7,
  primary_border_interactive_focus: darkPrimaryPalette.pink8,
  primary_solid_base: darkPrimaryPalette.pink9,
  primary_solid_hover: darkPrimaryPalette.pink10,
  primary_text_lowContrast: darkPrimaryPalette.pink11,
  primary_text_highContrast: darkPrimaryPalette.pink12,

  accent_background: darkAccentPalette.orange1,
  accent_background_dark: darkAccentPalette.orange2,
  accent_ui_base: darkAccentPalette.orange3,
  accent_ui_hover: darkAccentPalette.orange4,
  accent_ui_selected: darkAccentPalette.orange5,
  accent_border_nonInteractive: darkAccentPalette.orange6,
  accent_border_interactive: darkAccentPalette.orange7,
  accent_border_interactive_focus: darkAccentPalette.orange8,
  accent_solid_base: darkAccentPalette.orange9,
  accent_solid_hover: darkAccentPalette.orange10,
  accent_text_lowContrast: darkAccentPalette.orange11,
  accent_text_highContrast: darkAccentPalette.orange12,

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

  white: darkPrimaryPalette.pink12,
});

export const vars = { ...root, color };
