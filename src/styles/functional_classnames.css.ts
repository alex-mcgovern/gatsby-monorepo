import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { vars } from "./theme.css";
import { varsBackgroundImage } from "./vars/vars_background_image.css";
import { varsDisplay } from "./vars/vars_display.css";
import { varsShadow } from "./vars/vars_shadow.css";

const properties = defineProperties({
  properties: {
    alignItems: ["stretch", "start", "center", "end"],
    aspectRatio: vars.aspectRatio,
    border: ["1px solid", "2px solid"],
    borderRadius: vars.borderRadius,
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
    whiteSpace: ["nowrap"],
    zIndex: ["-1", "1"],
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
    gridTemplateColumns: vars.gridTemplateColumns,
    gridTemplateRows: vars.gridTemplateColumns,
    width: vars.width,
  },
});

const colorProperties = defineProperties({
  conditions: {
    default: {},
    hover: {
      selector: "&:is(&:not([disabled]):hover, &:not([disabled]):focus)",
    },
  },
  defaultCondition: "default",
  properties: {
    backgroundColor: vars.color,
    backgroundImage: varsBackgroundImage,
    borderColor: vars.color,
    boxShadow: varsShadow,
    color: vars.color,
    outline: ["1px solid", "1px dashed"],
    textDecoration: ["underline", "none"],
  },
});

export const getFunctionalClassNames = createSprinkles(
  properties,
  responsiveProperties,
  colorProperties
);

export type FunctionalClassNames = Parameters<
  typeof getFunctionalClassNames
>[0];
