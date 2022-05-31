import { style } from "@vanilla-extract/css";
import { varsWidth } from "../../../styles/vars/vars_grid";

export const maxWidthContainer = style({
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: varsWidth.gridWidth,
});
