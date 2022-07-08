import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { geFunctionalClassNames } from "../../../styles/functional_classnames.css";

export const getTagStyle = recipe({
  base: [
    geFunctionalClassNames({
      flexShrink: "0",
      fontSize: "body_sm",
      lineHeight: "lg",
      textDecoration: {
        default: "none",
        hover: "underline",
        focus: "underline",
      },
      borderRadius: "pill",
      whiteSpace: "nowrap",
      display: "block",
      alignItems: "flex-end",
      paddingX: "spacing2",
      paddingY: "spacing0",
    }),
  ],

  variants: {
    state: {
      inactive: [
        geFunctionalClassNames({
          color: "neutral_fg_1",
          backgroundColor: {
            default: "neutral_ui_1",
            hover: "neutral_ui_2",
            focus: "neutral_ui_3",
          },
        }),
      ],

      active: [
        geFunctionalClassNames({
          color: "accent_fg_1",
          backgroundColor: {
            default: "accent_ui_1",
            hover: "accent_ui_2",
            focus: "accent_ui_3",
          },
        }),
      ],
    },
  },

  defaultVariants: {
    state: "inactive",
  },
});

export type TTagVariants = RecipeVariants<typeof getTagStyle>;
