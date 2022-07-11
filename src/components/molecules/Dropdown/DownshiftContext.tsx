// Notes: https://making.close.com/posts/highlights-from-a-complex-downshift-js-refactor/
import React from "react";
import { useSelect } from "downshift";
import useComboboxWithCreate from "./hooks/use_combobox_with_create";

export const DownshiftContext = React.createContext({});

export const DownshiftSingleSelectProvider = ({
  items,
  selectedValue,
  onValueChange,
  children,
}) => {
  // cast selectedValue to its relevant item
  const selectedItem = items.find((item) => item.value === selectedValue);

  // fire callback
  const handleSelectedItemsChange = (state) =>
    onValueChange(state.selectedItem.value);

  // convenience function for knowing whether an item is selected
  const isItemSelected = (item) => selectedItem?.value === item.value;

  const {
    toggleMenu,
    isOpen,
    getItemProps,
    getMenuProps,
    getToggleButtonProps,
  } = useSelect({
    items,
    selectedItem,
    onSelectedItemChange: handleSelectedItemsChange,
  });

  return (
    <DownshiftContext.Provider
      value={{
        isOpen,
        items,
        selected: selectedItem,
        isItemSelected,
        toggleMenu,
        getItemProps,
        getMenuProps,
        getToggleButtonProps,
      }}
    >
      {children}
    </DownshiftContext.Provider>
  );
};

export const DownshiftSearchableSelectProvider = ({
  children,
  isCreatable,
  items,
  onSelect,
  onValueChange,
  selectedValue,
  initialInputValue,
}) => {
  // Note the array-specific logic here
  // const selectedItems = selectedValue.map(getItemByValue);

  // const handleSelectedItemsChange = (state) =>
  //   onValueChange(state.selectedItems.map((item) => item.value));

  // const isItemSelected = (item) =>
  //   selectedItems.some((i) => i.value === item.value);

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
    toggleMenu,
  } = useComboboxWithCreate({
    items,
    onSelect,
    isCreatable,
    initialInputValue,
  });

  // More magic for multi-selects!
  // const { setSelectedItems } = useMultipleSelection({
  //   selectedItems,
  //   onSelectedItemsChange: handleSelectedItemsChange,
  // });
  // additional methods that multi-selects may need
  // const selectMultiple = (itemValues) => {
  //   // cast itemValues back to their items
  //   const newItems = itemValues.map((value) =>
  //     items.find((i) => i.value === value)
  //   );
  //   setSelectedItems(newItems);
  // };

  return (
    <DownshiftContext.Provider
      value={{
        getComboboxProps,
        getInputProps,
        getItemProps,
        getMenuProps,
        toggleMenu,
        highlightedIndex,
        inputValue,
        isOpen,
        items: inputItems,
        selectedItem,
        onValueChange,
      }}
    >
      {children}
    </DownshiftContext.Provider>
  );
};
