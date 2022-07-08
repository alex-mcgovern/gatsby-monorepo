import { ITag } from "../tag";

export const BUTTON_SIZE_VARIANTS_MOCK: ITag[] = [
  // Large tags
  {
    iconTrailing: "arrow-right",
    title: "Click me",

    variant: {
      size: "lg",
    },
    id: "tag-lg-primary",
  },

  // Medium tags
  {
    iconTrailing: "arrow-right",
    title: "Click me",
    variant: {
      size: "sm",
    },
    id: "tag-sm-primary",
  },

  // Small tags
  {
    iconTrailing: "arrow-right",
    title: "Click me",
    variant: {
      size: "md",
    },
    id: "tag-xs-primary",
  },
];
