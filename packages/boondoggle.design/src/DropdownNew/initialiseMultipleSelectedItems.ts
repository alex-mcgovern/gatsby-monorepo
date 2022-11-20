import type { DropdownItem } from "../Dropdown/types";
import { filterDownshiftItemsRemoveInvalid } from "./filterDownshiftItemsRemoveInvalid";

interface DownshiftProviderMultiProps {
  allItems: Array<DropdownItem>;
  controlledSelectedItems?: Array<DropdownItem | null | undefined>;
  initialSelectedItems?: Array<DropdownItem>;
  isControlled: boolean;
}

export function initializeMultipleSelectedItems({
  allItems,
  controlledSelectedItems,
  initialSelectedItems,
  isControlled,
}: DownshiftProviderMultiProps) {
  if (isControlled) {
    return filterDownshiftItemsRemoveInvalid({
      allItems,
      itemsToFilter: controlledSelectedItems,
    });
  }
  return filterDownshiftItemsRemoveInvalid({
    allItems,
    itemsToFilter: initialSelectedItems,
  });
}
