import React from "react";
import Downshift from "downshift";
import PropTypes from "prop-types";
import Button from "../../../atoms/button/button/button";
import SingleSelectDropdownList from "../single_select_dropdown/single_select_dropdown";
import * as classes from "./single_select.module.scss";

export default function SingleSelect({ searchIndex, value, size }) {
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
        // getInputProps,
        getItemProps,
        // getLabelProps,
        getToggleButtonProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
      }) => {
        return (
          <div className={classes.search_wrapper}>
            {/* <label {...getLabelProps()}>Enter a fruit</label> */}
            <Button
              size={size}
              title={value}
              variant="secondary"
              trailingIcon="caret-down"
              {...getToggleButtonProps()}
            />
            <SingleSelectDropdownList
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

SingleSelect.propTypes = {
  searchIndex: PropTypes.arrayOf(PropTypes.shape),
  size: PropTypes.oneOf(["lg", "md", "sm"]),
  value: PropTypes.string,
};

SingleSelect.defaultProps = {
  searchIndex: null,
  size: "md",
  value: null,
};
