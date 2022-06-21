import { recipe } from "@vanilla-extract/recipes";
import { getFunctionalClassNames } from "../../../styles/functional_classnames.css";
import { vars } from "../../../styles/theme.css";

export const button = recipe({
  base: [
    {
      fontWeight: vars.fontWeight.semibold,
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
      // transition: "background 0.1s ease",
      whiteSpace: "nowrap",
    },
  ],

  variants: {
    color: {
      primary: [
        getFunctionalClassNames({
          color: "white",
          paddingX: "spacing1",
          borderRadius: "lg",

          backgroundColor: {
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
          paddingX: "spacing1",
          borderRadius: "lg",

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

          textDecoration: {
            default: "none",
            hover: "underline",
            focus: "underline",
          },
        }),
      ],
      tertiary: [
        { background: "none" },
        getFunctionalClassNames({
          borderRadius: "sm",

          color: {
            default: "primary_text_highContrast",
            hover: "primary_text_lowContrast",
            focus: "primary_text_lowContrast",
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
        }),
      ],

      md: [
        getFunctionalClassNames({
          fontSize: "body_md",
        }),
      ],
      lg: [
        getFunctionalClassNames({
          fontSize: "body_lg",
        }),
      ],
    },
  },

  compoundVariants: [
    {
      variants: {
        color: "primary",
        size: "sm",
      },
      style: getFunctionalClassNames({
        paddingY: "spacing0",
        paddingX: "spacing2",
      }),
    },
    {
      variants: {
        color: "primary",
        size: "md",
      },
      style: getFunctionalClassNames({
        paddingY: "spacing0",
        paddingX: "spacing2",
      }),
    },
    {
      variants: {
        color: "primary",
        size: "lg",
      },
      style: getFunctionalClassNames({
        paddingY: "spacing1",
        paddingX: "spacing2",
      }),
    },
    {
      variants: {
        color: "secondary",
        size: "sm",
      },
      style: getFunctionalClassNames({
        paddingY: "spacing0",
        paddingX: "spacing2",
      }),
    },
    {
      variants: {
        color: "secondary",
        size: "md",
      },
      style: getFunctionalClassNames({
        paddingY: "spacing0",
        paddingX: "spacing2",
      }),
    },
    {
      variants: {
        color: "secondary",
        size: "lg",
      },
      style: getFunctionalClassNames({
        paddingY: "spacing1",
        paddingX: "spacing2",
      }),
    },
  ],

  defaultVariants: {
    color: "secondary",
    size: "md",
  },
});
