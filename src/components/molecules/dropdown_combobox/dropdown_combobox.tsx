import React from "react";
import { Box } from "../../atoms/box/box";
import { Button, IButtonCustomisation } from "../../atoms/button/button";
import { TButtonVariants } from "../../atoms/button/button.css";
import { IInputCustomisation, Input } from "../../atoms/input/input";
import DropdownList from "../single_select/dropdown_list/dropdown_list";
import useComboboxWithCreate from "./hooks/use_combobox_with_create";

interface IDropdownComboboxCustomisation
  extends IButtonCustomisation,
    IInputCustomisation {}

export interface IDropdownComboboxProps {
  id: string;
  isLabelVisible?: boolean;
  isSearchable?: boolean;
  isCreatable?: boolean;
  items: IDownshiftItem[];
  customisation?: IDropdownComboboxCustomisation;
  label: string;
  buttonTitle?: string;
  iconLeading?: string;
  onSelect?(...args: unknown[]): unknown;
  placeholder?: string;
  variant?: TButtonVariants;
}

export const DropdownCombobox = ({
  buttonTitle,
  id,
  isLabelVisible,
  isSearchable,
  isCreatable,
  iconLeading,
  items,
  label,
  customisation,
  onSelect,
  placeholder,
  variant,
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
    <Box customisation={{ position: "relative" }} {...getComboboxProps()}>
      {isSearchable ? (
        <Input
          placeholder={placeholder}
          isLabelVisible={isLabelVisible}
          label={label}
          iconLeading={iconLeading}
          id={id}
          customisation={customisation}
          {...getInputProps()}
        />
      ) : (
        <Button
          id={id}
          title={inputValue || buttonTitle || "—"}
          iconTrailing="caret-down"
          variant={variant}
          iconLeading={iconLeading}
          customisation={customisation}
          {...getToggleButtonProps()}
        />
      )}
      <DropdownList
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
