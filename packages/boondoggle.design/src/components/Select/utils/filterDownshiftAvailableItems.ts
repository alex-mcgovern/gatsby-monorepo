import type { DropdownItem } from "../types";

interface FilterDownshiftAvailableItemsArgs {
  /** All available DownshiftItems */
  items: Array<DropdownItem>;
  /** Value of controlled combobox input */
  inputValue?: string;
}

/**
 * Removes items not matching `inputValue` from `items`
 */
export function filterDownshiftAvailableItems({
  items,
  inputValue,
}: FilterDownshiftAvailableItemsArgs) {
  if (!inputValue) {
    return items;
  }
  /**
   * Filter out items that don't match the `inputValue`
   */
  if (items && items.length > 0) {
    return items.filter((item) => {
      return item?.label?.toLowerCase().includes(inputValue.toLowerCase());
    });
  }

  return items;
}
