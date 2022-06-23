import { recipe } from "@vanilla-extract/recipes";
import { getFunctionalClassNames } from "../../../styles/functional_classnames.css";

export const button = recipe({
  base: [
    getFunctionalClassNames({
      flexShrink: "0",
      fontWeight: "medium",
      textDecoration: {
        default: "none",
        hover: "underline",
        focus: "underline",
      },
      borderRadius: "sm",
      whiteSpace: "nowrap",
      display: "inline-flex",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
    }),
  ],

  variants: {
    appearance: {
      primary: [
        getFunctionalClassNames({
          paddingX: "spacing2",
          paddingY: "spacing1",

          color: "primary_text_lowContrast",
          backgroundColor: {
            default: "accent_ui_base",
            hover: "primary_ui_hover",
            focus: "primary_ui_hover",
          },

          border: "1px solid",
          borderColor: {
            default: "accent_border_interactive",
            hover: "accent_border_interactive_focus",
            focus: "accent_border_interactive_focus",
          },
        }),
      ],

      secondary: [
        getFunctionalClassNames({
          paddingX: "spacing2",
          paddingY: "spacing1",

          color: "primary_text_lowContrast",
          backgroundColor: {
            default: "neutral_background_dark",
            hover: "primary_ui_hover",
            focus: "primary_ui_hover",
          },

          border: "1px solid",
          borderColor: {
            default: "accent_border_interactive",
            hover: "accent_border_interactive_focus",
            focus: "accent_border_interactive_focus",
          },
        }),
      ],

      tertiary: [
        getFunctionalClassNames({
          color: {
            default: "primary_text_highContrast",
            hover: "primary_text_lowContrast",
            focus: "primary_text_lowContrast",
          },
        }),
      ],
    },
    size: {
      xs: [
        getFunctionalClassNames({
          fontSize: "body_xs",
        }),
      ],

      sm: [
        getFunctionalClassNames({
          fontSize: "body_sm",
        }),
      ],
      lg: [
        getFunctionalClassNames({
          fontSize: "body_lg",
        }),
      ],
    },
  },

  defaultVariants: {
    appearance: "secondary",
    size: "sm",
  },
});
