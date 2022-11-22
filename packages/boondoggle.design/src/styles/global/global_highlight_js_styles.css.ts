import { globalStyle } from "@vanilla-extract/css";
import { vars } from "../themes/theme.css";

globalStyle(".lineNumber", {
  opacity: 0.5,
  marginRight: vars.spacing.spacing2,
  display: "inline-block",
  width: vars.spacing.spacing2,
  paddingRight: vars.spacing.spacing2,
  textAlign: "right",
  userSelect: "none",
  pointerEvents: "none",
  wordBreak: "normal",
});

globalStyle(`.hljs-keyword, .hljs-selector-tag, .hljs-addition`, {
  color: vars.color.accent_base,
});

globalStyle(
  `.hljs-attribute, .hljs-attr, .hljs-variable, .hljs-template-variable, .hljs-title, .hljs-type`,
  {
    color: vars.color.ui.base,
    width: vars.spacing.spacing2,
    paddingRight: vars.spacing.spacing2,
    textAlign: "right",
    userSelect: "none",
    pointerEvents: "none",
    wordBreak: "normal",
  }
);

globalStyle(`.hljs-comment, .hljs-quote`, {
  opacity: 0.5,
});
