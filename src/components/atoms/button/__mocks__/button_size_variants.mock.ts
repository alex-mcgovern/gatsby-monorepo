import { IButton } from "../button";

export const BUTTON_SIZE_VARIANTS_MOCK: IButton[] = [
  {
    iconTrailing: "arrow-right",
    title: "Click me",

    variant: {
      size: "lg",
    },
    id: "button-lg-primary",
  },
  {
    iconTrailing: "arrow-right",
    title: "Click me",
    variant: {
      size: "md",
    },
    id: "button-md-primary",
  },
  {
    iconTrailing: "arrow-right",
    title: "Click me",
    variant: {
      size: "sm",
    },
    id: "button-xs-primary",
  },
];
