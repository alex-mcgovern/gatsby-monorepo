import { globalStyle } from "@vanilla-extract/css";

globalStyle("input", {
  border: "none",
  backgroundImage: "none",
  backgroundColor: "transparent",
  boxShadow: "none",
});

// export const inputStyle = globalStyle(`input:not([type="checkbox"]), select`, {
//   border: "1px solid",
//   borderColor: vars.color.dividerColorDark,
//   borderRadius: vars.borderRadius.sm,

//   backgroundColor: vars.color.background_1,
//   color: vars.color.text_highContrast,

//   fontWeight: vars.fontWeight.normal,
//   textDecoration: "none",
//   // padding: vars.spacing.spacing1,
//   // width: "100%",
//   // marginBottom: vars.spacing.spacing2,
// });

// globalStyle("input:not([disabled]):is(:hover, :focus)", {
//   borderColor: vars.color.focusRing,
// });
// globalStyle("input[disabled]", {
//   borderColor: vars.color.dividerColorLight,
// });
// globalStyle("input::placeholder", {
//   color: vars.color.dividerColorDark,
// });

// /**
//  * SEARCH INPUT WEBKIT CLEAR BUTTON
//  * Override webkit search clear button behavior
//  */

// globalStyle(`input[type="search"]::-webkit-search-cancel-button`, {
//   WebkitAppearance: "none",
//   height: "1em",
//   width: "1em",
//   borderRadius: "50em",
//   background: `url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg)\
//                no-repeat 50% 50%`,
//   backgroundSize: "contain",
//   opacity: 0,
//   pointerEvents: "none",
// });

// globalStyle(`input[type="search"]:focus::-webkit-search-cancel-button`, {
//   opacity: 0.3,
//   pointerEvents: "all",
// });

// globalStyle(`input[type="search"].dark::-webkit-search-cancel-button`, {
//   filter: "invert(1)",
// });
