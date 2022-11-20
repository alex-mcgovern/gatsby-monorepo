import type { JSXElementConstructor } from "react";
import type { DownshiftListItemInnerProps } from "./DownshiftListItem";
import type { DropdownToggleInnerProps } from "./DownshiftToggleInnerGeneric";

export interface DropdownCustomComponents {
  dropdownToggleChild?: JSXElementConstructor<DropdownToggleInnerProps>;
  dropdownListItemChild?: JSXElementConstructor<DownshiftListItemInnerProps>;
}
