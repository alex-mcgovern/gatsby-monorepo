import React from "react";
import { TFunctionalClassNames } from "../../../styles/functional_classnames.css";
import { Box, Button } from "../../atoms";
import { IButton } from "../../atoms/button/i_button";
import Input from "../../atoms/input/input";
import DropdownList from "../single_select/dropdown_list/dropdown_list";
import useComboboxWithCreate from "./hooks/use_combobox_with_create";

export interface IDropdownComboboxProps {
  id: string;
  isLabelVisible?: boolean;
  isSearchable?: boolean;
  isCreatable?: boolean;
  items: IDownshiftItem[];
  buttonAppearance?: IButton["appearance"];
  label: string;
  buttonTitle?: string;
  iconLeading?: string;
  margin?: TFunctionalClassNames["margin"];
  justifyContent?: TFunctionalClassNames["justifyContent"];
  marginBottom?: TFunctionalClassNames["marginBottom"];
  marginLeft?: TFunctionalClassNames["marginLeft"];
  marginRight?: TFunctionalClassNames["marginRight"];
  marginTop?: TFunctionalClassNames["marginTop"];
  marginX?: TFunctionalClassNames["marginY"];
  marginY?: TFunctionalClassNames["marginX"];
  onSelect?(...args: unknown[]): unknown;
  placeholder?: string;
  size?: "sm" | "sm" | "lg";
  width?: TFunctionalClassNames["width"];
}

export const DropdownCombobox = ({
  buttonAppearance,
  buttonTitle,
  id,
  isLabelVisible,
  isSearchable,
  isCreatable,
  iconLeading,
  items,
  label,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  justifyContent,
  marginTop,
  marginX,
  marginY,
  onSelect,
  placeholder,
  size,
  width,
}: IDropdownComboboxProps) => {
  const {
    getComboboxProps,
    getInputProps,
    getItemProps,
    getMenuProps,
    highlightedIndex,
    getToggleButtonProps,
    inputValue,
    isOpen,
    inputItems,
    selectedItem,
  } = useComboboxWithCreate({ items, onSelect, isCreatable });

  return (
    <Box position="relative" {...getComboboxProps()}>
      {isSearchable ? (
        <Input
          placeholder={placeholder}
          size={size}
          isLabelVisible={isLabelVisible}
          width={width}
          label={label}
          iconLeading={iconLeading}
          id={id}
          margin={margin}
          marginBottom={marginBottom}
          marginLeft={marginLeft}
          marginRight={marginRight}
          marginTop={marginTop}
          marginX={marginX}
          marginY={marginY}
          {...getInputProps()}
        />
      ) : (
        <Button
          id={id}
          size={size}
          width={width}
          title={inputValue || buttonTitle || "—"}
          iconTrailing="caret-down"
          appearance={buttonAppearance}
          justifyContent={justifyContent}
          iconLeading={iconLeading}
          margin={margin}
          marginBottom={marginBottom}
          marginLeft={marginLeft}
          marginRight={marginRight}
          marginTop={marginTop}
          marginX={marginX}
          marginY={marginY}
          {...getToggleButtonProps()}
        />
      )}
      <DropdownList
        size={size}
        getItemProps={getItemProps}
        getMenuProps={getMenuProps}
        highlightedIndex={highlightedIndex}
        inputValue={inputValue}
        isOpen={isOpen}
        dropdownItems={inputItems}
        selectedItem={selectedItem}
      />
    </Box>
  );
};

export default DropdownCombobox;
