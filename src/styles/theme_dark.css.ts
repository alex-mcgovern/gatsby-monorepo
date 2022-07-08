import { createTheme } from "@vanilla-extract/css";
import {
  accentPalette_dark,
  grayPalette_dark,
  semanticBluePalette_dark,
  semanticGreenPalette_dark,
  semanticRedPalette_dark,
  semanticYellowPalette_dark,
} from "./theme.css";
import { color } from "./theme_contract.css";

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

  black: accentPalette_dark.violet1,
  white: accentPalette_dark.violet12,
});
