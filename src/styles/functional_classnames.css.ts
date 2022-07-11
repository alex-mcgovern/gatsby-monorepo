import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { vars } from "./theme.css";
import { varsDisplay } from "./vars/vars_display.css";

const properties = defineProperties({
  properties: {
    alignItems: ["stretch", "start", "center", "end"],
    aspectRatio: vars.aspectRatio,
    boxShadow: vars.boxShadow,
    display: varsDisplay,
    flexDirection: ["row", "column", "row-reverse", "column-reverse"],
    flexWrap: ["wrap", "nowrap"],
    fontSize: vars.fontSize,
    fontWeight: vars.fontWeight,
    gap: vars.spacing,
    height: vars.spacing,
    justifyContent: [
      "stretch",
      "start",
      "center",
      "end",
      "space-around",
      "space-between",
    ],
    lineHeight: vars.lineHeight,
    margin: vars.spacing,
    padding: vars.spacing,
    marginBottom: vars.spacing,
    marginLeft: vars.spacing,
    marginRight: vars.spacing,
    marginTop: vars.spacing,
    maxHeight: vars.spacing,
    maxWidth: vars.width,
    minHeight: ["100vh", "75vh"],
    overflow: ["hidden"],
    overflowY: ["auto"],
    paddingBottom: vars.spacing,
    paddingLeft: vars.spacing,
    paddingRight: vars.spacing,
    paddingTop: vars.spacing,
    position: ["relative", "absolute", "sticky"],
    textAlign: ["center", "left", "right"],
    textDecoration: ["underline", "none"],
    textTransform: ["capitalize", "uppercase", "lowercase"],
    whiteSpace: ["nowrap"],
    zIndex: ["-1", "1"],
  },
  shorthands: {
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
  },
});

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: {
      "@media": "screen and (min-width: 376px)",
    },
    desktop: {
      "@media": "screen and (min-width: 960px)",
    },
  },
  defaultCondition: "mobile",
  properties: {
    gridTemplateColumns: vars.gridTemplateColumns,
    gridTemplateRows: vars.gridTemplateColumns,
    width: vars.width,
  },
});

export const getUtilityClasses = createSprinkles(
  properties,
  responsiveProperties
);

export type FunctionalClassNames = Parameters<typeof getUtilityClasses>[0];
