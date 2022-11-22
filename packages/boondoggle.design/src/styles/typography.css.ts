import { globalFontFace } from "@vanilla-extract/css";

const FONT_FACE_NAME = "Proxima Nova";

globalFontFace(FONT_FACE_NAME, {
  src: "url(/fonts/ProximaNova-Regular.woff2)format(woff2),url(/fonts/ProximaNova-Regular.woff)format(woff)",
  fontWeight: 400,
  fontStyle: "normal",
});
globalFontFace(FONT_FACE_NAME, {
  src: "url(/fonts/ProximaNova-SemiboldIt.woff2)format(woff2),url(/fonts/ProximaNova-SemiboldIt.woff)format(woff)",
  fontWeight: 400,
  fontStyle: "italic",
});
globalFontFace(FONT_FACE_NAME, {
  src: "url(/fonts/ProximaNova-Bold.woff2)format(woff2),url(/fonts/ProximaNova-Bold.woff)format(woff)",
  fontWeight: 700,
  fontStyle: "normal",
});
globalFontFace(FONT_FACE_NAME, {
  src: "url(/fonts/ProximaNova-BoldIt.woff2)format(woff2),url(/fonts/ProximaNova-BoldIt.woff)format(woff)",
  fontWeight: 700,
  fontStyle: "italic",
});
globalFontFace(FONT_FACE_NAME, {
  src: "url(/fonts/ProximaNova-Extrabld.woff2)format(woff2),url(/fonts/ProximaNova-Extrabld.woff)format(woff)",
  fontWeight: 800,
  fontStyle: "normal",
});
