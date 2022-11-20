import React from "react";
import type { DropdownItem } from "../Dropdown/types";
import type { DownshiftMultiSelectComboboxProps } from "./DownshiftMultiSelectCombobox";
import { DownshiftMultiSelectCombobox } from "./DownshiftMultiSelectCombobox";
import { DownshiftProviderMulti } from "./DownshiftProviderMulti";

export interface DownshiftMultiSelectProps
  extends DownshiftMultiSelectComboboxProps {
  items: Array<DropdownItem>;
  initialSelectedItems?: Array<DropdownItem>;
  callbackOnSelectedItemsChange?(...args: Array<unknown>): unknown;
  callbackOnSelectItem?(...args: Array<unknown>): unknown;
  selectedItems?: Array<DropdownItem>;
}

export function DownshiftMultiSelect({
  items,
  callbackOnSelectedItemsChange,
  callbackOnSelectItem,
  initialSelectedItems,
  ...rest
}: DownshiftMultiSelectProps) {
  return (
    <DownshiftProviderMulti
      isControlled={false}
      items={items}
      callbackOnSelectedItemsChange={callbackOnSelectedItemsChange}
      callbackOnSelectItem={callbackOnSelectItem}
      initialSelectedItems={initialSelectedItems}
    >
      <DownshiftMultiSelectCombobox {...rest} />
    </DownshiftProviderMulti>
  );
}
