import { style } from "@vanilla-extract/css";
import { varsGrid } from "../../../styles/vars/vars_grid.css";

export const maxWidthContainer = style({
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: varsGrid.gridWidth,
});
