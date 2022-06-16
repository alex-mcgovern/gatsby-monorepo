import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { vars } from "./theme.css";
import { varsTransition } from "./vars/vars_transition.css";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: {
      "@media": "screen and (min-width: 768px)",
    },
    desktop: {
      "@media": "screen and (min-width: 960px)",
    },
  },
  defaultCondition: "mobile",
  properties: {
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    aspectRatio: vars.aspectRatio,
    border: ["1px solid", "2px solid"],
    borderRadius: {
      "50%": "50%",
      lg: 24,
      md: 16,

      sm: 8,
    },
    display: ["none", "flex", "block", "inline", "inline-flex", "grid"],
    flexDirection: ["row", "column", "row-reverse", "column-reverse"],
    flexShrink: ["0"],
    fontSize: vars.fontSize,
    fontWeight: vars.fontWeight,
    gap: vars.spacing,
    gridAutoFlow: ["dense"],
    gridTemplateColumns: vars.gridTemplateColumns,
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
    maxWidth: vars.spacing,
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
    transition: varsTransition,
    whiteSpace: ["nowrap"],
    width: vars.spacing,
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
  },
  defaultCondition: "default",
  properties: {
    background: vars.color,
    borderColor: vars.color,
    boxShadow: vars.shadow,
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
