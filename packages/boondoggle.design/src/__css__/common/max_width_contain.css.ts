import { assignVars, createTheme, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import { MEDIA_QUERY_TABLET } from "~styles/global/css_vars_media_queries";
import { vars } from "~styles/themes/theme.css";
import { varsWidth } from "~styles/vars/vars_width.css";

export const [maxWidthTheme, varsMaxWidthTheme] = createTheme({
  maxWidth: vars.width.gridSpan12,
});

export const variantMaxWidth = styleVariants({
  gridSpan6: {
    vars: assignVars(varsMaxWidthTheme, {
      maxWidth: vars.width.gridSpan6,
    }),
  },
  gridSpan8: {
    vars: assignVars(varsMaxWidthTheme, {
      maxWidth: vars.width.gridSpan8,
    }),
  },
  gridSpan12: {
    vars: assignVars(varsMaxWidthTheme, {
      maxWidth: vars.width.gridSpan12,
    }),
  },
});

export const maxWidthContain = recipe({
  base: {
    maxWidth: calc.subtract("100%", vars.spacing.spacing4),
    marginLeft: "auto",
    marginRight: "auto",
    "@media": {
      [MEDIA_QUERY_TABLET]: {
        maxWidth: calc.subtract("100%", vars.spacing.spacing8),
      },

      [`only screen and (min-width: ${varsWidth.gridSpan12})`]: {
        maxWidth: varsMaxWidthTheme.maxWidth,
      },
    },
  },
  variants: {
    maxWidth: variantMaxWidth,
  },
  defaultVariants: {
    maxWidth: "gridSpan12",
  },
});

export type VariantVMaxWidthEnum = keyof typeof variantMaxWidth;
