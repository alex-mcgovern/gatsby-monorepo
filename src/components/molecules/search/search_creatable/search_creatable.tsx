import React from "react";
import { TFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import { Box } from "../../../atoms";
import SearchInput from "../search_input/search_input";
import SearchResultList from "../search_result_list/search_result_list";
import useComboboxWithCreate from "./hooks/use_combobox_with_create";

export interface ISearchCreatableProps {
  id: string;
  isLabelVisible?: boolean;
  items: IDownshiftItem[];
  label: string;
  margin?: TFunctionalClassNames["margin"];
  marginBottom?: TFunctionalClassNames["marginBottom"];
  marginLeft?: TFunctionalClassNames["marginLeft"];
  marginRight?: TFunctionalClassNames["marginRight"];
  marginTop?: TFunctionalClassNames["marginTop"];
  marginX?: TFunctionalClassNames["marginY"];
  marginY?: TFunctionalClassNames["marginX"];
  onSelect(...args: unknown[]): unknown;
  placeholder?: string;
  size?: "sm" | "sm" | "lg";
  width?: TFunctionalClassNames["width"];
}

export const SearchCreatable = ({
  id,
  isLabelVisible,
  items,
  label,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  marginX,
  marginY,
  onSelect,
  placeholder,
  size,
  width,
}: ISearchCreatableProps) => {
  const {
    getComboboxProps,
    getInputProps,
    getItemProps,
    getMenuProps,
    highlightedIndex,
    inputValue,
    isOpen,
    inputItems,
    selectedItem,
  } = useComboboxWithCreate({ items, onSelect });

  return (
    <Box position="relative" {...getComboboxProps()}>
      <SearchInput
        getInputProps={getInputProps}
        placeholder={placeholder}
        size={size}
        isLabelVisible={isLabelVisible}
        width={width}
        label={label}
        id={id}
        margin={margin}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
        marginTop={marginTop}
        marginX={marginX}
        marginY={marginY}
      />
      <SearchResultList
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

export default SearchCreatable;
