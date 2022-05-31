import React from "react";
import Downshift from "downshift";
import Button from "../../../atoms/button/button/button";
import SingleSelectDropdownList from "../single_select_dropdown/single_select_dropdown";
import getSelectIndexItemValue from "./helper_functions/get_select_index_item_value";
import * as styles from "./single_select.css";

interface SingleSelectProps {
  searchIndex: {}[];
  size?: TSizeProp;
  value?: string;
}

export default function SingleSelect({
  searchIndex,
  value,
  size,
}: SingleSelectProps) {
  return (
    <Downshift itemToString={getSelectIndexItemValue}>
      {({
        getItemProps,
        getToggleButtonProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
      }) => {
        return (
          <div className={styles.wrapper}>
            <Button
              size={size}
              title={value}
              variant="secondary"
              trailingIcon="caret-down"
              {...getToggleButtonProps()}
            />
            <SingleSelectDropdownList
              size={size}
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

SingleSelect.defaultProps = {
  searchIndex: null,
  size: "md",
  value: null,
};
