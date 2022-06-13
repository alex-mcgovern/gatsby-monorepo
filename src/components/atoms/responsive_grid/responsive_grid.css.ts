import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../../styles/global_theme.css";
import { resetList } from "../../../styles/resets/reset_list.css";

export const responsiveGrid = recipe({
  base: [
    resetList,
    {
      display: "grid",
      gap: vars.spacing.spacing6,
      justifyItems: "center",
      width: "100%",
    },
  ],

  variants: {
    split: {
      2: {
        gridTemplateColumns: `repeat(2, 1fr)`,
      },
      3: {
        gridTemplateColumns: `repeat(3, 1fr)`,
      },
      4: {
        gridTemplateColumns: `repeat(4, 1fr)`,
      },
    },
  },

  defaultVariants: {
    split: 3,
  },
});
