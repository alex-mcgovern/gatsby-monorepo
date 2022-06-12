import { recipe } from "@vanilla-extract/recipes";
import { resetList } from "../../../styles/resets/reset_list.css";
import { varsSpacing } from "../../../styles/vars/vars_spacing.css";

export const responsiveGrid = recipe({
  base: [
    resetList,
    {
      display: "grid",
      gap: varsSpacing.spacing6,
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
