import { createThemeContract } from "@vanilla-extract/css";

export const color = createThemeContract({
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
