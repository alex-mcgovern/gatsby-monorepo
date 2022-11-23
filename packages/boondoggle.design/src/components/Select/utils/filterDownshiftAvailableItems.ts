import type { DropdownItem } from "../types";

interface FilterDownshiftAvailableItemsArgs {
  /** All available DownshiftItems */
  items?: Array<DropdownItem>;
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
  return (
    Array.isArray(items) &&
    items.filter((item) => {
      return item?.label?.toLowerCase().includes(inputValue.toLowerCase());
    })
  );
}
