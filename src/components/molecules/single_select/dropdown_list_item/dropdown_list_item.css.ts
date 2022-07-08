import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { geFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import { resetList } from "../../../../styles/resets/reset_list.css";

export const getDropdownStyles = recipe({
  base: [
    {
      display: "block",
      textDecoration: "none",
      textAlign: "left",
    },
    geFunctionalClassNames({
      whiteSpace: "nowrap",
      color: "accent_fg_2",
      backgroundColor: {
        hover: "accent_ui_1",
        focus: "accent_ui_2",
      },
      padding: "spacing2",
      width: "100%",
    }),
  ],
  variants: {
    size: {
      xs: [
        geFunctionalClassNames({
          fontSize: "body_sm",
        }),
      ],
      sm: [
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
});

export const isHighlighted = style([
  geFunctionalClassNames({
    backgroundColor: "accent_ui_1",
  }),
]);
export const isSelected = style([
  geFunctionalClassNames({
    backgroundColor: "accent_ui_2",
  }),
]);
export const resultWrapper = style([resetList]);
