import React from "react";
import DropdownListItem from "../../single_select/dropdown_list_item/dropdown_list_item";
import * as styles from "./search_result_list.css";

interface SearchResultListProps {
  selectItem(...args: unknown[]): unknown;
  getItemProps(...args: unknown[]): unknown;
  getMenuProps(...args: unknown[]): unknown;
  highlightedIndex?: number;
  inputValue?: string;
  isOpen?: boolean;
  searchIndex: IDownshiftItem[];
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
  selectItem,
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
                  selectItem={selectItem}
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
