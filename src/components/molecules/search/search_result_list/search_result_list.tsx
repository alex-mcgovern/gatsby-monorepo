import React from "react";
import DropdownList from "../../single_select/dropdown_list/dropdown_list";

interface SearchResultListProps {
  getItemProps(...args: unknown[]): unknown;
  getMenuProps(...args: unknown[]): unknown;
  highlightedIndex?: number;
  inputValue?: string;
  isOpen?: boolean;
  dropdownItems: IDownshiftItem[];
  selectedItem?: IDownshiftItem | null;
}

export default function SearchResultList({
  getItemProps,
  getMenuProps,
  highlightedIndex,
  inputValue,
  isOpen,
  dropdownItems,
  selectedItem,
}: SearchResultListProps) {
  const filteredDropdownItems = dropdownItems.filter((item) => {
    return (
      !inputValue ||
      item?.value.toLowerCase().includes(inputValue.toLowerCase())
    );
  });
  return (
    <DropdownList
      // size={size}
      getItemProps={getItemProps}
      getMenuProps={getMenuProps}
      highlightedIndex={highlightedIndex}
      inputValue={inputValue}
      isOpen={isOpen}
      dropdownItems={filteredDropdownItems}
      selectedItem={selectedItem}
    />
  );
}

SearchResultList.defaultProps = {
  isOpen: null,
  getMenuProps: () => {},
  getItemProps: () => {},
  dropdownItems: null,
  highlightedIndex: null,
  selectedItem: null,
};
