import React from "react";
import PropTypes from "prop-types";
import SingleSelectDropdownListItem from "../single_select_dropdown_list_item/single_select_dropdown_list_item";
import * as classes from "./single_select_dropdown.module.scss";

export default function SingleSelectDropdownList({
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

SingleSelectDropdownList.propTypes = {
  isOpen: PropTypes.bool,
  getMenuProps: PropTypes.func,
  getItemProps: PropTypes.func,
  inputValue: PropTypes.string,
  searchIndex: PropTypes.arrayOf(PropTypes.shape({})),
  highlightedIndex: PropTypes.number,
  selectedItem: PropTypes.shape({}),
};

SingleSelectDropdownList.defaultProps = {
  isOpen: null,
  getMenuProps: () => {},
  getItemProps: () => {},
  inputValue: "",
  searchIndex: null,
  highlightedIndex: null,
  selectedItem: null,
};
