import { styleVariants } from "@vanilla-extract/css";
import { getSprinkles } from "../getSprinkles.css";

export const variantInteractiveElementSize = styleVariants({
  sm: [
    getSprinkles({
      height: { mobile: "spacing5", desktop: "spacing3" },
      fontStyle: { mobile: "body_lg", desktop: "body_sm" },
    }),
  ],
  md: [
    getSprinkles({
      height: { mobile: "spacing5", desktop: "spacing4" },
      fontStyle: { mobile: "body_lg", desktop: "body_md" },
    }),
  ],
  lg: [
    getSprinkles({
      height: { mobile: "spacing5", desktop: "spacing5" },
      fontStyle: { mobile: "body_lg", desktop: "body_lg" },
    }),
  ],

  sm_square: [
    getSprinkles({
      paddingX: "none",
      paddingY: "spacing1",
      height: "spacing3",
      width: "spacing3",
      fontStyle: "body_sm",
    }),
  ],
  md_square: [
    getSprinkles({
      paddingX: "spacing1",
      paddingY: "spacing1",
      height: "spacing4",
      width: "spacing4",
      fontStyle: "body_md",
    }),
  ],
  lg_square: [
    getSprinkles({
      paddingX: "spacing1",
      paddingY: "spacing1",
      height: "spacing5",
      width: "spacing5",
      fontStyle: "body_lg",
    }),
  ],
});

export type VariantInteractiveElementSizeEnum =
  keyof typeof variantInteractiveElementSize;
