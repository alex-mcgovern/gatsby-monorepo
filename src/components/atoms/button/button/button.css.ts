import { recipe } from "@vanilla-extract/recipes";
import { getFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import { vars } from "../../../../styles/global_theme.css";

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
      fontSize: "body_md",
      paddingX: "spacing3",
      paddingY: "spacing1",
      borderRadius: "md",
    }),
  ],

  variants: {
    color: {
      primary: [
        {
          color: vars.color.violet12,
          background: vars.color.violetA7,
          selectors: {
            "&:not([disabled]):hover": {
              backgroundColor: vars.color.violet4,
            },
          },
        },
        getFunctionalClassNames({
          paddingX: "spacing2",
          paddingY: "spacing1",
          borderColor: { lightMode: "white", darkMode: "violet3" },
          // background: { lightMode: "white", darkMode: "violet3" },
        }),
      ],
      secondary: [
        {
          selectors: {
            "&:not([disabled]):hover": {
              backgroundColor: vars.color.magenta30,
            },
          },
        },
        getFunctionalClassNames({
          paddingX: "spacing2",
          paddingY: "spacing1",
          border: "1px solid",
          color: { lightMode: "black", darkMode: "white" },
          borderColor: { lightMode: "black", darkMode: "white" },
          // background: { lightMode: "white", darkMode: "violet3" },
        }),
      ],
    },
    size: {
      sm: [
        {
          height: vars.spacing.spacing4,
          minWidth: vars.spacing.spacing4,
        },
      ],

      md: [
        {
          height: vars.spacing.spacing6,
          minWidth: vars.spacing.spacing6,
        },
      ],
      lg: [
        {
          height: vars.spacing.spacing8,
          minWidth: vars.spacing.spacing8,
        },
      ],
    },
  },

  defaultVariants: {
    color: "secondary",
    size: "md",
  },
});
