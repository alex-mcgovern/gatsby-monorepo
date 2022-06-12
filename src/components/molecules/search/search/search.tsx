import React from "react";
import Downshift from "downshift";
import {
  TFunctionalClassNames,
  getFunctionalClassNames,
} from "../../../../styles/functional_classnames.css";
import SearchInput from "../search_input/search_input";
import SearchResultList from "../search_result_list/search_result_list";
import getSearchIndexItemValue from "./helper_functions/get_search_index_item_value";

interface SearchProps {
  placeholder?: string;
  id?: string;
  width?: TFunctionalClassNames["width"];
  searchIndex?: {}[];
  size?: "sm" | "md" | "lg";
  onSelect(...args: unknown[]): unknown;
}

export default function Search({
  searchIndex,
  placeholder,
  id,
  width,
  size,
  onSelect,
}: SearchProps) {
  const formStyles = getFunctionalClassNames({ position: "relative" });
  return (
    <Downshift itemToString={getSearchIndexItemValue} onChange={onSelect}>
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
          <form className={formStyles}>
            <SearchInput
              getInputProps={getInputProps}
              placeholder={placeholder}
              size={size}
              width={width}
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
