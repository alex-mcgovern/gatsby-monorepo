import type { DropdownItem } from "../Dropdown/types";

export interface GetIsDropdownItemSelectedArgs {
  item: DropdownItem | null | undefined;
  selectedItems?: Array<DropdownItem | null | undefined>;
}

export const getIsDownshiftItemSelected = ({
  item,
  selectedItems,
}: GetIsDropdownItemSelectedArgs) => {
  return (
    selectedItems &&
    selectedItems.length > 0 &&
    selectedItems.some((currentItem) => {
      return currentItem && currentItem.label === item?.label;
    })
  );
};
