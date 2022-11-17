import { ButtonProps } from "../button";

export const BUTTON_SIZE_VARIANTS_MOCK: ButtonProps[] = [
  {
    iconTrailing: "arrow-right",
    title: "Click me",

    variant: {
      size: "lg",
    },
    id: "button-lg-primary",
  },
  {
    iconTrailing: "arrow-left",
    title: "Click me",
    variant: {
      size: "md",
    },
    id: "button-md-primary",
  },
  {
    iconTrailing: "arrow-right",
    title: "Button small",
    variant: {
      size: "sm",
    },
    id: "button-xs-primary",
  },
];
