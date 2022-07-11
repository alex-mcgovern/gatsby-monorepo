import { style } from "@vanilla-extract/css";

export const KanbanListItem = style({
  selectors: {
    "&:hover": {
      cursor: "grab",
    },
  },
});
