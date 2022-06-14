import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { vars } from "./global_theme.css";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 960px)" },
  },
  defaultCondition: "mobile",
  properties: {
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    aspectRatio: vars.aspectRatio,
    borderRadius: {
      "50%": "50%",
      lg: 24,
      md: 16,
      sm: 4,
    },
    border: ["1px solid", "2px solid"],
    boxShadow: vars.shadow,
    display: ["none", "flex", "block", "inline", "inline-flex", "grid"],
    flexDirection: ["row", "column", "row-reverse", "column-reverse"],
    flexShrink: ["0"],
    fontSize: vars.fontSize,
    fontWeight: vars.fontWeight,
    gap: vars.spacing,
    gridTemplateColumns: vars.gridTemplateColumns,
    gridAutoFlow: ["dense"],
    height: vars.spacing,
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    lineHeight: vars.lineHeight,
    marginBottom: vars.spacing,
    marginLeft: vars.spacing,
    marginRight: vars.spacing,
    marginTop: vars.spacing,
    maxWidth: vars.spacing,
    maxHeight: vars.spacing,
    minHeight: ["100vh"],
    minWidth: vars.spacing,
    overflow: ["hidden"],
    overflowY: ["auto"],
    paddingBottom: vars.spacing,
    paddingLeft: vars.spacing,
    paddingRight: vars.spacing,
    paddingTop: vars.spacing,
    position: ["relative", "absolute", "sticky"],
    textAlign: ["center", "left", "right"],
    textTransform: ["capitalize", "uppercase", "lowercase"],
    whiteSpace: ["nowrap"],
    width: vars.spacing,
    zIndex: ["-1", "1"],
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
    outlineColor: vars.color,
    borderColor: vars.color,
    color: vars.color,
    background: vars.color,
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
