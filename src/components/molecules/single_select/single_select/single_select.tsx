import React from "react";
import Downshift from "downshift";
import { TFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import { Box } from "../../../atoms";
import Button from "../../../atoms/button/button";
import { IButton } from "../../../atoms/button/i_button";
import DropdownList from "../dropdown_list/dropdown_list";
import getSelectIndexItemValue from "./helper_functions/get_select_index_item_value";

interface SingleSelectProps {
  dropdownItems: IDownshiftItem[];
  display?: TFunctionalClassNames["display"];
  width?: TFunctionalClassNames["width"];
  size?: TSizeProp;
  appearance?: IButton["appearance"];
  onSelect?(...args: unknown[]): unknown;

  id?: string;
  value?: string;
}

export default function SingleSelect({
  dropdownItems,
  value,
  display,
  width,
  id,
  appearance,
  size,
  onSelect,
}: SingleSelectProps) {
  return (
    <Downshift itemToString={getSelectIndexItemValue} onChange={onSelect}>
      {({
        getItemProps,
        getToggleButtonProps,
        getMenuProps,
        getRootProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
      }) => {
        return (
          <Box position="relative" {...getRootProps()}>
            <Button
              id={id}
              size={size}
              width={width}
              title={inputValue || value || "—"}
              iconTrailing="caret-down"
              display={display}
              appearance={appearance}
              {...getToggleButtonProps()}
            />
            <DropdownList
              size={size}
              getItemProps={getItemProps}
              getMenuProps={getMenuProps}
              highlightedIndex={highlightedIndex}
              inputValue={inputValue}
              isOpen={isOpen}
              dropdownItems={dropdownItems}
              selectedItem={selectedItem}
            />
          </Box>
        );
      }}
    </Downshift>
  );
}

SingleSelect.defaultProps = {
  dropdownItems: null,
  size: "sm",
  value: null,
  appearance: "secondary",
};
