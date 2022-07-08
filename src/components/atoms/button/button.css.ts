import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { geFunctionalClassNames } from "../../../styles/functional_classnames.css";

export const getButtonStyle = recipe({
  base: [
    geFunctionalClassNames({
      // width: "auto",
      display: "table",
      position: "relative",
      lineHeight: "md",
      flexShrink: "0",
      marginY: "spacing2",
      textDecoration: {
        default: "none",
        hover: "underline",
        focus: "underline",
      },
      borderRadius: "sm",
      whiteSpace: "nowrap",
      alignItems: "center",
      // textAlign: "center",
      // justifyContent: "center",
    }),
  ],

  variants: {
    appearance: {
      primary: [
        geFunctionalClassNames({
          paddingX: "spacing2",
          paddingY: "spacing1",
          fontWeight: "medium",

          color: "accent_fg_1",
          backgroundColor: {
            default: "accent_bg_3",
            hover: "accent_ui_1",
            focus: "accent_ui_1",
          },

          border: "1px solid",
          borderColor: {
            default: "accent_border_1",
            hover: "accent_border_2",
            focus: "accent_border_2",
          },
        }),
      ],

      secondary: [
        geFunctionalClassNames({
          paddingX: "spacing2",
          paddingY: "spacing1",
          fontWeight: "medium",

          color: "accent_fg_1",
          backgroundColor: {
            default: "neutral_bg_2",
            hover: "accent_ui_1",
            focus: "accent_ui_1",
          },

          border: "1px solid",
          borderColor: {
            default: "accent_border_1",
            hover: "accent_border_2",
            focus: "accent_border_2",
          },
        }),
      ],

      tertiary: [
        geFunctionalClassNames({
          color: {
            default: "neutral_fg_1",
            hover: "neutral_fg_2",
            focus: "neutral_fg_2",
          },
          // backgroundColor: {
          //   hover: "accent_ui_1",
          //   focus: "accent_ui_1",
          // },
        }),
      ],
    },
    size: {
      sm: [
        geFunctionalClassNames({
          fontSize: "body_sm",
        }),
      ],
      md: [
        geFunctionalClassNames({
          fontSize: "body_md",
        }),
      ],
      lg: [
        geFunctionalClassNames({
          fontSize: "body_lg",
        }),
      ],
    },
  },
  defaultVariants: {
    appearance: "primary",
    size: "md",
  },
});

export type TButtonVariants = RecipeVariants<typeof getButtonStyle>;
