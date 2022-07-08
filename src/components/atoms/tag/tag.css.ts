import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { getFunctionalClassNames } from "../../../styles/functional_classnames.css";

export const getTagStyle = recipe({
  base: [
    { flexShrink: 0 },

    getFunctionalClassNames({
      fontSize: "body_sm",
      lineHeight: "lg",
      textDecoration: {
        default: "none",
        hover: "underline",
      },
      borderRadius: "pill",
      whiteSpace: "nowrap",
      display: "block",
      alignItems: "end",
      paddingX: "spacing2",
      paddingY: "spacing0",
    }),
  ],

  variants: {
    state: {
      inactive: [
        getFunctionalClassNames({
          color: "neutral_fg_1",
          backgroundColor: {
            default: "neutral_ui_1",
            hover: "neutral_ui_2",
          },
        }),
      ],

      active: [
        getFunctionalClassNames({
          color: "accent_fg_1",
          backgroundColor: {
            default: "accent_ui_1",
            hover: "accent_ui_2",
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
