import { style } from "@vanilla-extract/css";
import { getFunctionalClassNames } from "../../../styles/functional_classnames.css";
import { vars } from "../../../styles/theme.css";

export const phoneMockup = style([
  {
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 6,
    gridColumnEnd: 9,
  },
  getFunctionalClassNames({
    backgroundColor: "primary_background_dark",
    borderRadius: "md",
    // aspectRatio: "phone",
    // maxHeight: "50vh",
    padding: "spacing1",
    boxShadow: "inset_md",
  }),
]);
export const desktopMockup = style([
  {
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 2,
    gridColumnEnd: 8,
    // selectors: {
    //   "&:before": {
    //     content: "''",
    //     height: 16,
    //     width: 56,
    //     position: "absolute",
    //     background: `radial-gradient(12px circle at 8px 8px, ${vars.color.semanticRed} 50%, transparent 51%), radial-gradient(12px circle at 28px 8px, ${vars.color.semanticYellow} 50%, transparent 51%), radial-gradient(12px circle at 48px 8px, ${vars.color.semanticGreen} 50%, transparent 51%)`,
    //   },
    // },
  },
  getFunctionalClassNames({
    backgroundColor: "primary_background_dark",
    borderRadius: "md",
    aspectRatio: "wide",

    padding: "spacing1",
    boxShadow: "inset_sm",
  }),
]);
export const terminalMockup = style([
  {
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 1,
    gridColumnEnd: 3,
    // selectors: {
    //   "&:before": {
    //     content: "''",
    //     height: 16,
    //     width: 56,
    //     position: "absolute",
    //     background: `radial-gradient(12px circle at 8px 8px, ${vars.color.semanticRed} 50%, transparent 51%), radial-gradient(12px circle at 28px 8px, ${vars.color.semanticYellow} 50%, transparent 51%), radial-gradient(12px circle at 48px 8px, ${vars.color.semanticGreen} 50%, transparent 51%)`,
    //   },
    // },
  },
  getFunctionalClassNames({
    backgroundColor: "primary_background",
    borderRadius: "md",
    aspectRatio: "square",

    padding: "spacing1",
    boxShadow: "inset_sm",
  }),
]);
