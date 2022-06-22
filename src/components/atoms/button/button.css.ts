import { recipe } from "@vanilla-extract/recipes";
import { getFunctionalClassNames } from "../../../styles/functional_classnames.css";

export const button = recipe({
  base: [
    getFunctionalClassNames({
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

          color: "white",

          backgroundColor: {
            default: "primary_solid_base",
            hover: "primary_solid_hover",
            focus: "primary_solid_hover",
          },
        }),
      ],
      primaryAccent: [
        getFunctionalClassNames({
          paddingX: "spacing2",
          paddingY: "spacing1",

          color: "white",

          backgroundColor: {
            default: "accent_solid_base",
            hover: "accent_solid_hover",
            focus: "accent_solid_hover",
          },
        }),
      ],

      secondary: [
        getFunctionalClassNames({
          paddingX: "spacing2",
          paddingY: "spacing1",

          color: "accent_text_lowContrast",
          backgroundColor: {
            default: "primary_ui_base",
            hover: "primary_ui_hover",
            focus: "primary_ui_hover",
          },

          border: "1px solid",
          borderColor: {
            default: "primary_border_interactive",
            hover: "primary_border_interactive_focus",
            focus: "primary_border_interactive_focus",
          },
        }),
      ],
      secondaryAccent: [
        getFunctionalClassNames({
          paddingX: "spacing2",
          paddingY: "spacing1",

          color: "accent_text_lowContrast",
          backgroundColor: {
            default: "accent_ui_base",
            hover: "accent_ui_hover",
            focus: "accent_ui_hover",
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
            hover: "accent_text_lowContrast",
            focus: "accent_text_lowContrast",
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
