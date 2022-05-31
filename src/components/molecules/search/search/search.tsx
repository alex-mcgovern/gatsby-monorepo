import React from "react";
import Downshift from "downshift";
import SearchInput from "../search_input/search_input";
import SearchResultList from "../search_result_list/search_result_list";
import getSearchIndexItemValue from "./helper_functions/get_search_index_item_value";
import * as classes from "./search.module.scss";

interface SearchProps {
  placeholder?: string;
  searchIndex?: {}[];
  size?: "sm" | "md" | "lg";
}

export default function Search({
  searchIndex,
  placeholder,
  size,
}: SearchProps) {
  return (
    <Downshift itemToString={getSearchIndexItemValue}>
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
      }) => {
        return (
          <form>
            <SearchInput
              getInputProps={getInputProps}
              placeholder={placeholder}
              size={size}
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
          </form>
        );
      }}
    </Downshift>
  );
}

Search.defaultProps = {
  searchIndex: null,
  placeholder: null,
  size: "md",
};
