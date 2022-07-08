import { TypographyProps } from "../typography";

export const TYPOGRAPHY_SIZE_VARIANTS_MOCK: TypographyProps[] = [
  {
    children: "Lorem ipsum dolor sit amet",
    as: "h1",
  },
  {
    children: "Consectetur adipiscing elit",
    as: "h2",
  },
  {
    children: "Sed do eiusmod tempor incididunt",
    as: "h3",
  },
  {
    children: "Ut labore et dolore magna aliqua",
    as: "h4",
  },
  {
    as: "h5",
    children: "Ut enim ad minim veniam",
  },
  {
    as: "h6",
    children: "Ut enim ad minim veniam",
  },
  {
    children: "Ut enim ad minim veniam",
    customisation: {
      fontSize: "body_lg",
    },
  },
  {
    children: "Quis nostrud exercitation ullamco",
    customisation: {
      fontSize: "body_sm",
    },
  },
];
