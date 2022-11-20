import type { DropdownItem } from "../Dropdown/types";
import { getIsDownshiftItemSelected } from "./getIsDownshiftItemSelected";

interface HandleMultipleSelectionArgs {
  newSelectedItem: DropdownItem | null | undefined;
  selectedItems: Array<DropdownItem | null | undefined> | undefined;
}

export function handleMultipleSelection({
  newSelectedItem,
  selectedItems,
}: HandleMultipleSelectionArgs) {
  if (selectedItems && selectedItems.length > 0) {
    const isItemSelected = getIsDownshiftItemSelected({
      item: newSelectedItem,
      selectedItems,
    });

    if (isItemSelected) {
      return selectedItems?.filter((selectedItem) => {
        return selectedItem?.label !== newSelectedItem?.label;
      });
    }

    return [...selectedItems, newSelectedItem];
  }

  return [newSelectedItem];
}
