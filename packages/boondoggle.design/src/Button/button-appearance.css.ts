import { styleVariants } from "@vanilla-extract/css";
import { focusBaseStyle } from "../__css__/common/focus_ring_styles.css";
import { getSprinkles } from "../__css__/getSprinkles.css";
import { vars } from "../__css__/theme.css";
import {
  SELECTOR_LINK_BUTTON_FOCUS,
  SELECTOR_LINK_BUTTON_HOVER,
  SELECTOR_LINK_BUTTON_HOVER_FOCUS,
} from "../styles/global/css_selector_vars";
import { varsButtonTheme } from "./button.theme.css";

export const variantButtonAppearance = styleVariants({
  primary: [
    getSprinkles({
      paddingX: "spacing1",
      // paddingY: "spacing0",
      justifyContent: "center",
      whiteSpace: "nowrap",
      fontWeight: "semibold",
    }),
    {
      color: varsButtonTheme.textColor_alt,
      background: varsButtonTheme.backgroundColor,
      selectors: {
        [SELECTOR_LINK_BUTTON_HOVER]: {
          color: varsButtonTheme.textColor_alt,
          background: varsButtonTheme.backgroundColor_hover,
          boxShadow: vars.boxShadow.lg,
        },
      },
    },
  ],

  secondary: [
    getSprinkles({
      paddingX: "spacing2",
      paddingY: "spacing1",
      justifyContent: "center",
      whiteSpace: "nowrap",
      fontWeight: "semibold",
    }),
    {
      color: varsButtonTheme.textColor,
      border: "1px solid",
      borderColor: varsButtonTheme.borderColor,
      selectors: {
        [SELECTOR_LINK_BUTTON_HOVER]: {
          color: varsButtonTheme.textColor,
          background: varsButtonTheme.backgroundColor_tint,
        },
        [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
          color: varsButtonTheme.textColor,
          background: varsButtonTheme.backgroundColor_tint,
        },
      },
    },
  ],

  select: [
    getSprinkles({
      paddingX: "spacing2",
      paddingY: "spacing1",
      whiteSpace: "nowrap",
    }),
    {
      color: varsButtonTheme.textColor,
      border: "1px solid",
      borderColor: varsButtonTheme.borderColor,
      selectors: {
        [SELECTOR_LINK_BUTTON_HOVER]: {
          borderColor: vars.color.neutral_border_interactiveActive,
        },
        [SELECTOR_LINK_BUTTON_FOCUS]: { ...focusBaseStyle },
      },
    },
  ],

  tertiary: [
    getSprinkles({
      textAlign: "left",
      fontWeight: "semibold",
    }),
    {
      color: varsButtonTheme.textColor,
      selectors: {
        [SELECTOR_LINK_BUTTON_HOVER]: {
          color: varsButtonTheme.textColor_hover,
          textDecoration: "underline",
        },
        [`&[data-state="active"]`]: {
          color: varsButtonTheme.textColor_hover,
          // textDecoration: "underline",
        },
      },
    },
  ],

  uiLink: {
    color: varsButtonTheme.textColor,
    textDecoration: "underline",
    textDecorationColor: "transparent",
    selectors: {
      [SELECTOR_LINK_BUTTON_HOVER]: {
        color: varsButtonTheme.textColor_hover,
        textDecorationColor: varsButtonTheme.textColor_hover,
      },
    },
  },
});

export type VariantButtonAppearanceEnum = keyof typeof variantButtonAppearance;
