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
        getFunctionalClassNames({
          fontSize: "body_sm",
        }),
      ],
      sm: [
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
});

export const isHighlighted = style([
  getFunctionalClassNames({
    backgroundColor: "accent_ui_1",
  }),
]);
export const isSelected = style([
  getFunctionalClassNames({
    backgroundColor: "accent_ui_2",
  }),
]);
export const resultWrapper = style([resetList]);
