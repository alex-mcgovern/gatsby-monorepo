import type { DropdownItem } from "../Dropdown/types";

interface FilterDownshiftItemsRemoveInvalidArgs {
  /** All available DownshiftItems */
  allItems: Array<DropdownItem | null | undefined>;
  /** Downshift items passed to component from parent as "initially selected" */
  itemsToFilter?: Array<DropdownItem | null | undefined>;
}

/**
 * Ensures a list of items are valid items.
 * Given a partial list of items, and a list of all available items,
 * returns only initial items that exist in the list of all available items.
 */
export function filterDownshiftItemsRemoveInvalid({
  allItems,
  itemsToFilter,
}: FilterDownshiftItemsRemoveInvalidArgs) {
  if (!itemsToFilter || itemsToFilter.length < 1) return [];

  return itemsToFilter?.filter((initialSelectedItem) => {
    return allItems.some((item) => {
      return item?.label === initialSelectedItem?.label;
    });
  });
}
