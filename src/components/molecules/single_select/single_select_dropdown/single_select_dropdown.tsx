import React from "react";
import DropdownListItem from "../dropdown_list_item/dropdown_list_item";
import * as styles from "./single_select_dropdown.css";

interface SingleSelectDropdownListProps {
  isOpen?: boolean;
  getMenuProps(...args: unknown[]): unknown;
  getItemProps(...args: unknown[]): unknown;
  size: "sm" | "md" | "lg";
  inputValue: string | null;
  searchIndex: {
    value: string;
    link: string;
  }[];
  highlightedIndex: number | null;
  selectedItem?: {};
}

export default function SingleSelectDropdownList({
  getItemProps,
  getMenuProps,
  highlightedIndex,
  inputValue,
  isOpen,
  size,
  searchIndex,
  selectedItem,
}: SingleSelectDropdownListProps) {
  if (isOpen) {
    return (
      <ul className={styles.dropdownWrapper} {...getMenuProps()}>
        {searchIndex
          .filter((item) => {
            return (
              !inputValue ||
              item.value.toLowerCase().includes(inputValue.toLowerCase())
            );
          })
          .map((item, index) => {
            return (
              <DropdownListItem
                getItemProps={getItemProps}
                size={size}
                highlightedIndex={highlightedIndex}
                index={index}
                item={item}
                selectedItem={selectedItem}
              />
            );
          })}
      </ul>
    );
  }
  return null;
}

SingleSelectDropdownList.defaultProps = {
  isOpen: null,
  getMenuProps: () => {},
  getItemProps: () => {},
  inputValue: "",
  searchIndex: null,
  highlightedIndex: null,
  selectedItem: null,
};
