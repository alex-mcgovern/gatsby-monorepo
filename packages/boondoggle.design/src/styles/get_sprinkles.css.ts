/* eslint-disable sonarjs/no-duplicate-string */
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { varsBorder } from "../__css__/vars/vars_border.css";
import {
  MEDIA_QUERY_DESKTOP,
  MEDIA_QUERY_TABLET,
} from "./global/css_vars_media_queries";
import { vars } from "./themes/theme.css";
import { varsHeight } from "./vars/vars_height";
import { varsZIndex } from "./vars/vars_z_index.css";

const properties = defineProperties({
  properties: {
    color: vars.color,
    alignItems: ["", "stretch", "flex-start", "center", "flex-end"],
    aspectRatio: vars.aspectRatio,
    border: varsBorder,
    borderTop: varsBorder,
    borderBottom: varsBorder,
    borderLeft: varsBorder,
    borderRight: varsBorder,
    borderRadius: {
      "50%": "50%",
      lg: 24,
      md: 16,
      sm: 4,
      pill: 99999,
    },
    top: ["0"],
    left: ["0"],
    right: ["0"],
    bottom: ["0"],

    boxShadow: vars.boxShadow,
    fill: vars.color,
    flexGrow: ["0", "1"],
    flexShrink: ["0", "1"],
    flex: ["1 0 auto", "1 1 auto", "0 1 auto"],
    flexWrap: ["wrap", "nowrap"],
    textOverflow: ["ellipsis"],

    fontWeight: vars.fontWeight,
    rowGap: vars.spacing,
    columnGap: vars.spacing,
    gap: vars.spacing,
    gridAutoFlow: ["dense"],
    gridTemplateRows: vars.gridTemplateColumns,
    isolation: ["isolate"],

    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    justifyItems: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    justifySelf: ["start", "end"],
    letterSpacing: vars.letterSpacing,

    maxHeight: { ...vars.spacing, ...vars.height },
    minHeight: { ...vars.spacing, ...vars.height },
    minWidth: { ...vars.spacing, ...vars.width },
    overflow: ["hidden", "visible"],
    overflowY: ["auto"],
    overflowX: ["auto"],
    objectFit: ["contain", "cover"],
    opacity: ["0.3", "0.5", "0.8"],
    isolation: ["isolate"],
    position: ["relative", "absolute", "sticky"],
    textTransform: ["capitalize", "uppercase", "lowercase"],
    whiteSpace: ["nowrap", "break-spaces"],
    zIndex: varsZIndex,
  },
  shorthands: {
    placeItems: ["justifyContent", "alignItems"],
  },
});

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": MEDIA_QUERY_TABLET },
    desktop: { "@media": MEDIA_QUERY_DESKTOP },
  },
  defaultCondition: "mobile",
  properties: {
    height: { ...varsHeight, ...vars.spacing },
    display: [
      "none",
      "flex",
      "block",
      "inline",
      "inline-flex",
      "inline-block",
      "grid",
    ],
    marginBottom: vars.spacing,
    fontSize: vars.fontSize,
    lineHeight: vars.lineHeight,
    marginLeft: vars.spacing,
    marginRight: vars.spacing,
    marginTop: vars.spacing,
    paddingBottom: vars.spacing,
    paddingLeft: vars.spacing,
    paddingRight: vars.spacing,
    paddingTop: vars.spacing,
    flexDirection: ["row", "column", "row-reverse", "column-reverse"],
    gridTemplateColumns: vars.gridTemplateColumns,
    maxWidth: { ...vars.width, ...vars.spacing },
    width: { ...vars.width, ...vars.spacing },
    textAlign: ["center", "left", "right"],
  },
  shorthands: {
    fontStyle: ["fontSize", "lineHeight"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
  },
});

const colorProperties = defineProperties({
  properties: {
    outline: ["1px solid", "1px dashed"],
    outlineColor: vars.color,
    borderColor: vars.color,
    background: vars.color,
    backgroundColor: vars.color,
    textDecoration: ["underline", "none"],
  },
});

/** Gets utility classnames within TrueLayer design system parameters. */
export const getSprinkles = createSprinkles(
  responsiveProperties,
  colorProperties,
  properties
);

export type GetSprinklesArgs = Parameters<typeof getSprinkles>[0];
