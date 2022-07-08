import { createTheme } from "@vanilla-extract/css";
import {
  accentPalette_light,
  grayPalette_light,
  semanticBluePalette_light,
  semanticGreenPalette_light,
  semanticRedPalette_light,
  semanticYellowPalette_light,
} from "./theme.css";
import { color } from "./theme_contract.css";

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
