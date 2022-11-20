// Notes: https://making.close.com/posts/highlights-from-a-complex-downshift-js-refactor/
import type { ReactNode } from "react";
import React, { useCallback, useMemo } from "react";
import type { UseSelectStateChange } from "downshift";
import { useSelect } from "downshift";
import type { DropdownItem } from "../Dropdown/types";
import { DownshiftContext } from "./DownshiftContext";
import type { GetIsDropdownItemSelectedArgs } from "./getIsDownshiftItemSelected";

interface DownshiftProviderSingleProps {
  items: Array<DropdownItem>;
  initialInputValue: string;
  onChange?(selectedItem: DropdownItem): unknown;
  children: ReactNode;
}

export function DownshiftProviderSingle({
  items,
  initialInputValue,
  onChange,
  children,
}: DownshiftProviderSingleProps) {
  // cast selectedValue to its relevant item
  const initialSelectedItem = items.find((item) => {
    return item.label === initialInputValue;
  });

  // fire callback
  const handleSelectedItemsChange = ({
    selectedItem,
  }: UseSelectStateChange<DropdownItem>): void => {
    if (selectedItem?.label && onChange) {
      onChange(selectedItem);
    }
  };

  const {
    toggleMenu,
    isOpen,
    openMenu,
    closeMenu,
    getItemProps,
    getMenuProps,
    getToggleButtonProps,
    selectedItem,
    highlightedIndex,
    selectItem,
    reset,
  } = useSelect({
    items,
    initialSelectedItem,
    onSelectedItemChange: handleSelectedItemsChange,
  });

  // convenience function for knowing whether an item is selected
  const getIsDownshiftItemSelected = useCallback(
    ({ item }: GetIsDropdownItemSelectedArgs) => {
      return selectedItem?.label === item?.label;
    },
    [selectedItem?.label]
  );

  const providedValue = useMemo(() => {
    return {
      closeMenu,
      getDropdownProps: () => {},
      getInputProps: () => {},
      getIsDownshiftItemSelected,
      getItemProps,
      getMenuProps,
      getSelectedItemProps: () => {},
      getToggleButtonProps,
      highlightedIndex,
      isOpen,
      items,
      openMenu,
      removeSelectedItem: () => {},
      reset,
      selectedItem,
      selectedItems: [],
      selectItem,
      toggleMenu,
    };
  }, [
    closeMenu,
    getIsDownshiftItemSelected,
    getItemProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    isOpen,
    items,
    openMenu,
    reset,
    selectItem,
    selectedItem,
    toggleMenu,
  ]);

  return (
    <DownshiftContext.Provider value={providedValue}>
      {children}
    </DownshiftContext.Provider>
  );
}
