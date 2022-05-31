import React from "react";
import DropdownListItem from "../../single_select/dropdown_list_item/dropdown_list_item";
import * as styles from "./search_result_list.css";

type Item = {
  link: string;
  value: string;
};

interface SearchResultListProps {
  getItemProps(...args: unknown[]): unknown;
  getMenuProps(...args: unknown[]): unknown;
  highlightedIndex?: number;
  inputValue?: string;
  isOpen?: boolean;
  searchIndex: Item[];
  selectedItem?: {};
}

export default function SearchResultList({
  getItemProps,
  getMenuProps,
  highlightedIndex,
  inputValue,
  isOpen,
  searchIndex,
  selectedItem,
}: SearchResultListProps) {
  if (isOpen) {
    return (
      <div className={styles.listWrapper}>
        <ul className={styles.listInner} {...getMenuProps()}>
          {searchIndex
            .filter((item) => {
              return (
                !inputValue ||
                item?.value.toLowerCase().includes(inputValue.toLowerCase())
              );
            })
            .map((item, index) => {
              return (
                <DropdownListItem
                  getItemProps={getItemProps}
                  highlightedIndex={highlightedIndex}
                  index={index}
                  item={item}
                  selectedItem={selectedItem}
                />
              );
            })}
        </ul>
      </div>
    );
  }
  return null;
}

SearchResultList.defaultProps = {
  isOpen: null,
  getMenuProps: () => {},
  getItemProps: () => {},
  searchIndex: null,
  highlightedIndex: null,
  selectedItem: null,
};
