import { vars } from "@alexmcgovern/boondoggle.design";
import { calc } from "@vanilla-extract/css-utils";
import { buildChartTheme } from "@visx/xychart";

export const VISX_CHART_THEME = buildChartTheme({
  /** ---------------------------------------------
   * Colors
   * ----------------------------------------------- */

  backgroundColor: vars.color.accent_background_raised,

  colors: [vars.color.accent_text_lowContrast],

  /** ---------------------------------------------
   * Labels
   * ----------------------------------------------- */

  svgLabelBig: {
    fill: vars.color.accent_text_lowContrast,
    fontSize: vars.fontSize.body_md,
    fontFamily: vars.fontFamily.display,
  },

  svgLabelSmall: {
    fill: vars.color.neutral_text_highContrast,
    fontSize: vars.fontSize.body_sm,
    fontFamily: vars.fontFamily.display,
    height: calc.multiply(vars.fontSize.body_md, 1),
  },

  htmlLabel: {
    fill: vars.color.neutral_text_highContrast,
    fontSize: vars.fontSize.body_md,
    fontFamily: vars.fontFamily.display,
  },

  /** ---------------------------------------------
   * Lines
   * ----------------------------------------------- */

  xAxisLineStyles: {
    stroke: vars.color.neutral_border_interactiveActive,
  },

  yAxisLineStyles: {
    stroke: vars.color.neutral_border_interactive,
  },

  tickLength: 8,

  /** ---------------------------------------------
   * Grid
   * ----------------------------------------------- */

  gridColor: vars.color.neutral_border_nonInteractive,

  gridColorDark: vars.color.neutral_border_interactive,

  gridStyles: {},
});
