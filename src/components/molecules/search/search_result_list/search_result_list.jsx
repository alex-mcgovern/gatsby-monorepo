import React from "react";
import PropTypes from "prop-types";
import SearchResultListItem from "../search_result_list_item/search_result_list_item";
import * as classes from "./search_result_list.module.scss";

export default function SearchResultList({
  getItemProps,
  getMenuProps,
  highlightedIndex,
  inputValue,
  isOpen,
  searchIndex,
  selectedItem,
}) {
  if (isOpen) {
    return (
      <div className={classes.list_wrapper}>
        <ul className={classes.list_inner} {...getMenuProps()}>
          {searchIndex
            .filter((item) => {
              return (
                !inputValue ||
                item.value.toLowerCase().includes(inputValue.toLowerCase())
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

SearchResultList.propTypes = {
  isOpen: PropTypes.bool,
  getMenuProps: PropTypes.func,
  getItemProps: PropTypes.func,
  inputValue: PropTypes.shape({}),
  searchIndex: PropTypes.arrayOf(PropTypes.shape({})),
  highlightedIndex: PropTypes.number,
  selectedItem: PropTypes.shape({}),
};

SearchResultList.defaultProps = {
  isOpen: null,
  getMenuProps: () => {},
  getItemProps: () => {},
  inputValue: null,
  searchIndex: null,
  highlightedIndex: null,
  selectedItem: null,
};
