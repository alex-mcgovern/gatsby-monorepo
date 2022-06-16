import React from "react";
import Downshift from "downshift";
import { TFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import Button, { IButton } from "../../../atoms/button/button/button";
import SingleSelectDropdownList from "../single_select_dropdown/single_select_dropdown";
import getSelectIndexItemValue from "./helper_functions/get_select_index_item_value";
import * as styles from "./single_select.css";

interface SingleSelectProps {
  searchIndex: {}[];
  display?: TFunctionalClassNames["display"];
  width?: TFunctionalClassNames["width"];
  size?: TSizeProp;
  variant?: IButton["variant"];
  onSelect?(...args: unknown[]): unknown;

  id?: string;
  value?: string;
}

export default function SingleSelect({
  searchIndex,
  value,
  display,
  width,
  id,
  variant,
  size,
  onSelect,
}: SingleSelectProps) {
  return (
    <Downshift itemToString={getSelectIndexItemValue} onChange={onSelect}>
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
              id={id}
              size={size}
              width={width}
              title={inputValue || value || "—"}
              trailingIcon="caret-down"
              display={display}
              variant={variant}
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
  variant: "secondary",
};
