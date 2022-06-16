import { recipe } from "@vanilla-extract/recipes";
import { getFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import { vars } from "../../../../styles/theme.css";

export const button = recipe({
  base: [
    {
      fontWeight: vars.fontWeight.semibold,
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
      transition: "background 0.1s ease",
      whiteSpace: "nowrap",
    },
    getFunctionalClassNames({
      borderRadius: "lg",
      // paddingY: "spacing0",
      paddingX: "spacing1",
    }),
  ],

  variants: {
    color: {
      primary: [
        getFunctionalClassNames({
          color: "white",

          background: {
            default: "primary_solid_base",
            hover: "primary_solid_hover",
            focus: "primary_solid_hover",
          },

          textDecoration: {
            default: "none",
            hover: "underline",
            focus: "underline",
          },
        }),
      ],
      secondary: [
        getFunctionalClassNames({
          color: "primary_text_lowContrast",

          background: {
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

          textDecoration: {
            default: "none",
            hover: "underline",
            focus: "underline",
          },
        }),
      ],
      tertiary: [
        getFunctionalClassNames({
          color: {
            default: "neutral_text_highContrast",
            hover: "neutral_text_lowContrast",
            focus: "neutral_text_lowContrast",
          },

          textDecoration: {
            default: "none",
            hover: "underline",
            focus: "underline",
          },
        }),
      ],
    },
    size: {
      sm: [
        getFunctionalClassNames({
          fontSize: "body_sm",
          paddingY: "spacing0",
          paddingX: "spacing2",
        }),
      ],

      md: [
        getFunctionalClassNames({
          fontSize: "body_md",
          paddingY: "spacing0",
          paddingX: "spacing2",
        }),
      ],
      lg: [
        getFunctionalClassNames({
          fontSize: "body_lg",
          paddingY: "spacing1",
          paddingX: "spacing2",
        }),
      ],
    },
  },

  defaultVariants: {
    color: "secondary",
    size: "md",
  },
});
