import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { darkTheme, vars } from "./theme.css";
import { varsBackgroundImage } from "./vars/vars_background_image.css";
import { varsShadow } from "./vars/vars_shadow.css";
import { varsTransition } from "./vars/vars_transition.css";

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
    isolation: ["isolate"],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    aspectRatio: vars.aspectRatio,
    border: ["1px solid", "2px solid"],
    borderRadius: vars.borderRadius,
    display: [
      "block",
      "flex",
      "grid",
      "inline-block",
      "inline-flex",
      "inline",
      "none",
    ],
    flexDirection: ["row", "column", "row-reverse", "column-reverse"],
    flexShrink: ["0"],
    flexWrap: ["wrap", "nowrap"],
    fontSize: vars.fontSize,
    fontWeight: vars.fontWeight,
    gap: vars.spacing,
    gridAutoFlow: ["dense"],
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
    lineHeight: vars.lineHeight,
    marginBottom: vars.spacing,
    marginLeft: vars.spacing,
    marginRight: vars.spacing,
    marginTop: vars.spacing,
    maxHeight: vars.spacing,
    maxWidth: vars.width,
    minHeight: ["100vh"],
    minWidth: vars.width,
    overflow: ["hidden"],
    overflowY: ["auto"],
    paddingBottom: vars.spacing,
    paddingLeft: vars.spacing,
    paddingRight: vars.spacing,
    paddingTop: vars.spacing,
    position: ["relative", "absolute", "sticky"],
    textAlign: ["center", "left", "right"],
    textTransform: ["capitalize", "uppercase", "lowercase"],
    transition: varsTransition,
    whiteSpace: ["nowrap"],
    width: vars.width,
    zIndex: ["-1", "1"],
  },
  shorthands: {
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
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

export const getFunctionalClassNames = createSprinkles(
  responsiveProperties,
  colorProperties
);

// It's a good idea to export the TFunctionalClassNames type too
export type TFunctionalClassNames = Parameters<
  typeof getFunctionalClassNames
>[0];
