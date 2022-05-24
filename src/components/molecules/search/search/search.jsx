import React from "react";
import Downshift from "downshift";
import PropTypes from "prop-types";
import SearchInput from "../search_input/search_input";
import SearchResultList from "../search_result_list/search_result_list";
import * as classes from "./search.module.scss";

export default function Search({ searchIndex, placeholder }) {
  return (
    <Downshift
      // onChange={(selection) => {
      //   return alert(`You selected ${selection.value}`);
      // }}
      itemToString={(item) => {
        return item ? item.value : "";
      }}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
      }) => {
        return (
          <div className={classes.search_wrapper}>
            {/* <label {...getLabelProps()}>Enter a fruit</label> */}
            <SearchInput
              getInputProps={getInputProps}
              placeholder={placeholder}
            />
            <SearchResultList
              getItemProps={getItemProps}
              getMenuProps={getMenuProps}
              highlightedIndex={highlightedIndex}
              inputValue={inputValue}
              isOpen={isOpen}
              searchIndex={searchIndex}
              selectedItem={selectedItem}
            />
          </div>
        );
      }}
    </Downshift>
  );
}

Search.propTypes = {
  searchIndex: PropTypes.arrayOf(PropTypes.shape),
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  searchIndex: null,
  placeholder: null,
};
