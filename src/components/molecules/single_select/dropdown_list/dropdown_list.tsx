import React from "react";
import DropdownListItem from "../dropdown_list_item/dropdown_list_item";
import * as styles from "./dropdown_list.css";

interface DropdownListProps {
  isOpen?: boolean;
  getMenuProps?(...args: unknown[]): {};
  getItemProps?(...args: unknown[]): {};
  size?: TSizeProp;
  inputValue: string | null;
  dropdownItems: IDownshiftItem[];
  highlightedIndex: number | null;
  selectedItem?: IDownshiftItem | null;
}

export default function DropdownList({
  getItemProps,
  getMenuProps,
  highlightedIndex,
  isOpen,
  size,
  dropdownItems,
  selectedItem,
}: DropdownListProps) {
  if (isOpen) {
    return (
      <ul
        className={styles.dropdownWrapper}
        {...(getMenuProps && getMenuProps())}
      >
        {dropdownItems.map((item, index) => {
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

DropdownList.defaultProps = {
  isOpen: null,
  inputValue: "",
  dropdownItems: null,
  highlightedIndex: null,
  selectedItem: null,
};
