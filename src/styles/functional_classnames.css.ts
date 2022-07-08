import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { darkTheme, vars } from "./theme.css";
import { varsBackgroundImage } from "./vars/vars_background_image.css";
import { varsDisplay } from "./vars/vars_display.css";
import { varsShadow } from "./vars/vars_shadow.css";

const properties = defineProperties({
  properties: {
    aspectRatio: vars.aspectRatio,
    border: ["1px solid", "2px solid"],
    borderRadius: vars.borderRadius,
    flexShrink: ["0"],
    fontSize: vars.fontSize,
    fontWeight: vars.fontWeight,
    gap: vars.spacing,
    isolation: ["isolate"],
    lineHeight: vars.lineHeight,
    overflow: ["hidden"],
    overflowY: ["auto"],
    position: ["relative", "absolute", "sticky"],
    textTransform: ["capitalize", "uppercase", "lowercase"],
    whiteSpace: ["nowrap"],
    zIndex: ["-1", "1"],
  },
});

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: {
      "@media": "screen and (min-width: 376px)",
    },
    desktop: {
      "@media": "screen and (min-width: 768px)",
    },
  },
  defaultCondition: "mobile",
  properties: {
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    display: varsDisplay,
    flexDirection: ["row", "column", "row-reverse", "column-reverse"],
    flexWrap: ["wrap", "nowrap"],
    gridTemplateColumns: vars.gridTemplateColumns,
    gridTemplateRows: vars.gridTemplateColumns,
    height: vars.spacing,
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    marginBottom: vars.spacing,
    marginLeft: vars.spacing,
    marginRight: vars.spacing,
    marginTop: vars.spacing,
    maxHeight: vars.spacing,
    maxWidth: vars.width,
    minHeight: ["100vh"],
    minWidth: vars.width,
    paddingBottom: vars.spacing,
    paddingLeft: vars.spacing,
    paddingRight: vars.spacing,
    paddingTop: vars.spacing,
    textAlign: ["center", "left", "right"],
    width: vars.width,
  },
  shorthands: {
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
  },
});

const colorProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: "&:not([disabled]):hover" },
    focus: { selector: "&:not([disabled]):focus" },
    darkMode: { selector: `${darkTheme} &` },
    darkMode_hover: { selector: `${darkTheme} &:not([disabled]):hover` },
    darkMode_focus: { selector: `${darkTheme} &:not([disabled]):focus` },
  },
  defaultCondition: "default",
  properties: {
    backgroundColor: vars.color,
    backgroundImage: varsBackgroundImage,
    borderColor: vars.color,
    boxShadow: varsShadow,
    color: vars.color,
    outline: ["1px solid", "1px dashed"],
    outlineColor: vars.color,
    textDecoration: ["underline", "none"],
  },
});

export const geFunctionalClassNames = createSprinkles(
  properties,
  responsiveProperties,
  colorProperties
);

export type FunctionalClassNames = Parameters<typeof geFunctionalClassNames>[0];
