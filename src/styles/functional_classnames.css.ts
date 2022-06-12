import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { varsAspectRatio } from "./vars/vars_aspect_ratio.css";
import { varsColors } from "./vars/vars_colors.css";
import { varsFontSize } from "./vars/vars_font_size.css";
import { varsFontWeight } from "./vars/vars_font_weight.css";
import { varsGrid } from "./vars/vars_grid.css";
import { varsLineHeight } from "./vars/vars_line_height.css";
import { varsShadow } from "./vars/vars_shadow.css";
import { varsSpacing } from "./vars/vars_spacing.css";
import { varsZIndex } from "./vars/vars_z_index.css";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    aspectRatio: varsAspectRatio,
    borderRadius: {
      "50%": "50%",
      lg: 24,
      md: 16,
      sm: 4,
    },
    boxShadow: varsShadow,
    display: ["none", "flex", "block", "inline", "inline-flex", "grid"],
    flexDirection: ["row", "column", "row-reverse", "column-reverse"],
    flexShrink: ["0"],
    fontSize: varsFontSize,
    fontWeight: varsFontWeight,
    gap: varsSpacing,
    gridTemplateColumns: varsGrid,
    gridAutoFlow: ["dense"],
    height: varsSpacing,
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    lineHeight: varsLineHeight,
    marginBottom: varsSpacing,
    marginLeft: varsSpacing,
    marginRight: varsSpacing,
    marginTop: varsSpacing,
    maxWidth: varsSpacing,
    maxHeight: varsSpacing,
    minHeight: ["100vh"],
    minWidth: varsSpacing,
    overflow: ["hidden"],
    overflowY: ["auto"],
    paddingBottom: varsSpacing,
    paddingLeft: varsSpacing,
    paddingRight: varsSpacing,
    paddingTop: varsSpacing,
    position: ["relative", "absolute", "sticky"],
    textAlign: ["center", "left", "right"],
    textTransform: ["capitalize", "uppercase", "lowercase"],
    whiteSpace: ["nowrap"],
    width: varsSpacing,
    zIndex: varsZIndex,
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
