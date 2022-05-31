import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { varsAspectRatio } from "./vars/vars_aspect_ratio.css";
import { varsColors } from "./vars/vars_colors.css";
import { varsFontSize } from "./vars/vars_font_size.css";
import { varsFontWeight } from "./vars/vars_font_weight.css";
import { varsWidth } from "./vars/vars_grid";
import { varsSpacing } from "./vars/vars_spacing.css";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "flex", "block", "inline", "grid"],
    height: ["100%"],
    fontWeight: varsFontWeight,
    fontSize: varsFontSize,
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    width: varsWidth,
    aspectRatio: varsAspectRatio,
    maxWidth: varsWidth,
    gap: { small: varsSpacing[2] },
    paddingTop: varsSpacing,
    paddingBottom: varsSpacing,
    paddingLeft: varsSpacing,
    paddingRight: varsSpacing,
    marginTop: varsSpacing,
    marginBottom: varsSpacing,
    marginLeft: varsSpacing,
    marginRight: varsSpacing,
    textTransform: ["capitalize", "uppercase", "lowercase"],
    // etc.
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    placeItems: ["justifyContent", "alignItems"],
  },
});

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    outline: ["1px solid", "1px dashed"],
    outlineColor: varsColors,
    borderColor: varsColors,
    color: varsColors,
    background: varsColors,
    // etc.
  },
});

export const getFunctionalClassNames = createSprinkles(
  responsiveProperties,
  colorProperties
);

// It's a good idea to export the TFunctionalClassNames type too
export type TFunctionalClassNames = Parameters<
  typeof getFunctionalClassNames
>[0];
