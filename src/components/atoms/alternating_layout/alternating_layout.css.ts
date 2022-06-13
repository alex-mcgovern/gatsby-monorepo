import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../../styles/global_theme.css";

export const alternatingLayout = recipe({
  base: [
    {
      display: "grid",
      gap: vars.spacing.spacing6,
      gridTemplateColumns: `repeat(2, 1fr)`,
    },
  ],

  variants: {
    ratio: {
      "1_2": {
        gridTemplateColumns: `1fr 2fr`,
      },
      "1_3": {
        gridTemplateColumns: `1fr 3fr`,
      },
      "2_1": {
        gridTemplateColumns: `2fr 1fr`,
      },
      "3_1": {
        gridTemplateColumns: `3fr 1fr`,
      },
      "5_7": {
        gridTemplateColumns: `5fr 7fr`,
      },
      "7_5": {
        gridTemplateColumns: `7fr 5fr`,
      },
    },
  },
});
