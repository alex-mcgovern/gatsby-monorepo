import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { getFunctionalClassNames } from "../../../styles/functional_classnames.css";
import { vars } from "../../../styles/global_theme.css";
import { resetInput } from "../../../styles/resets/reset_input.css";

export const getInputWrapperStyles = recipe({
  base: [
    {
      borderRadius: 999,
      fontWeight: vars.fontWeight.semibold,
      textDecoration: "none",
      border: "1px solid",
      color: vars.color.gray500,
      width: "100%",
      selectors: {
        "&:hover": {
          borderColor: vars.color.magenta50,
        },
        "&:focus-within": {
          borderColor: vars.color.magenta,
          boxShadow: `0px 0px 0px 4px ${vars.color.orange50}, 0px 0px 0px 8px ${vars.color.white}`,
        },
      },
    },
    getFunctionalClassNames({
      display: "flex",
      alignItems: "center",
    }),
  ],

  variants: {
    size: {
      sm: [
        {
          fontSize: vars.fontSize.body_sm,
          height: vars.spacing.spacing4,
        },
        getFunctionalClassNames({ paddingX: "spacing2", paddingY: "spacing1" }),
      ],
      md: [
        {
          fontSize: vars.fontSize.body_md,
          height: vars.spacing.spacing6,
        },
        getFunctionalClassNames({ paddingX: "spacing2", paddingY: "spacing1" }),
      ],
      lg: [
        {
          fontSize: vars.fontSize.body_lg,
          height: vars.spacing.spacing6,
        },
        getFunctionalClassNames({ paddingX: "spacing2", paddingY: "spacing1" }),
      ],
    },

    rounded: {
      true: { borderRadius: 999 },
    },
  },

  defaultVariants: {
    size: "md",
  },
});

export const inputElement = style([resetInput]);
export const icon = style({
  color: vars.color.gray500,
  marginRight: vars.spacing.spacing4,
});
