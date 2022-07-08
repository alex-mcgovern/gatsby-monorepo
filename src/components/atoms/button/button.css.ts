import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { getFunctionalClassNames } from "../../../styles/functional_classnames.css";

export const getButtonStyle = recipe({
  base: [
    { width: "auto", display: "table" },
    getFunctionalClassNames({
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
        getFunctionalClassNames({
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
        getFunctionalClassNames({
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
        getFunctionalClassNames({
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
  defaultVariants: {
    appearance: "primary",
    size: "md",
  },
});

export type TButtonVariants = RecipeVariants<typeof getButtonStyle>;
