import React from "react";
import SearchResultListItem from "../search_result_list_item/search_result_list_item";
import * as classes from "./search_result_list.module.scss";

type Item = {
  value: string;
} | null;

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
      <div className={classes.list_wrapper}>
        <ul className={classes.list_inner} {...getMenuProps()}>
          {searchIndex
            .filter((item) => {
              return (
                !inputValue ||
                item?.value.toLowerCase().includes(inputValue.toLowerCase())
              );
            })
            .map((item, index) => {
              return (
                <SearchResultListItem
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
