import React from "react";
import SingleSelectDropdownListItem from "../single_select_dropdown_list_item/single_select_dropdown_list_item";
import * as classes from "./single_select_dropdown.module.scss";

interface SingleSelectDropdownListProps {
  isOpen?: boolean;
  getMenuProps(...args: unknown[]): unknown;
  getItemProps(...args: unknown[]): unknown;
  inputValue?: string;
  searchIndex: {
    value: string;
  }[];
  highlightedIndex?: number;
  selectedItem?: {};
}

export default function SingleSelectDropdownList({
  getItemProps,
  getMenuProps,
  highlightedIndex,
  inputValue,
  isOpen,
  searchIndex,
  selectedItem,
}: SingleSelectDropdownListProps) {
  if (isOpen) {
    return (
      <ul className={classes.list_wrapper} {...getMenuProps()}>
        {searchIndex
          .filter((item) => {
            return (
              !inputValue ||
              item.value.toLowerCase().includes(inputValue.toLowerCase())
            );
          })
          .map((item, index) => {
            return (
              <SingleSelectDropdownListItem
                getItemProps={getItemProps}
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