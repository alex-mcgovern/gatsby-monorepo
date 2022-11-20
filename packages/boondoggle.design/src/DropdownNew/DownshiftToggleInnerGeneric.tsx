import React from "react";
import type { DropdownItem } from "../Dropdown/types";

export interface DropdownToggleInnerProps {
  selectedItem: DropdownItem | null;
  initialInputValue: string;
}

export function DownshiftToggleInnerGeneric({
  initialInputValue,
  selectedItem,
}: DropdownToggleInnerProps) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{selectedItem?.label || initialInputValue}</>;
}
