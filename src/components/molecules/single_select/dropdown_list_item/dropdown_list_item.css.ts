import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { getFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import { resetList } from "../../../../styles/resets/reset_list.css";

export const getDropdownStyles = recipe({
  base: [
    {
      display: "block",
      textDecoration: "none",
      textAlign: "left",
    },
    getFunctionalClassNames({
      whiteSpace: "nowrap",
      color: "primary_text_highContrast",
      backgroundColor: {
        hover: "primary_ui_hover",
        focus: "primary_ui_selected",
      },
      padding: "spacing2",
      width: "100%",
    }),
  ],
  variants: {
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
});

export const isHighlighted = style([
  getFunctionalClassNames({
    backgroundColor: "primary_ui_hover",
  }),
]);
export const isSelected = style([
  getFunctionalClassNames({
    backgroundColor: "primary_ui_selected",
  }),
]);
export const resultWrapper = style([resetList]);
