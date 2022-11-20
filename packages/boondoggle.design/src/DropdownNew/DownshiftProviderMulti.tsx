import type { ReactNode } from "react";
import React, { useEffect, useMemo, useState } from "react";
import { useCombobox, useMultipleSelection } from "downshift";
import type { DropdownItem } from "../Dropdown/types";
import { DownshiftContext } from "./DownshiftContext";
import { filterDownshiftAvailableItems } from "./filterDownshiftAvailableItems";
import { getIsDownshiftItemSelected } from "./getIsDownshiftItemSelected";
import { handleMultipleSelection } from "./handleMultipleSelection";
import { initializeMultipleSelectedItems } from "./initialiseMultipleSelectedItems";

interface DownshiftProviderMultiProps {
  items: Array<DropdownItem>;
  initialSelectedItems?: Array<DropdownItem>;
  initialInputValue?: string;
  callbackOnSelectedItemsChange?(...args: Array<unknown>): unknown;
  children: ReactNode;
  selectedItems?: Array<DropdownItem | null | undefined>;
  callbackOnSelectItem?(item: DropdownItem | null | undefined): void;
  isControlled: boolean;
}

export function DownshiftProviderMulti({
  items,
  initialSelectedItems,
  initialInputValue = "",
  callbackOnSelectedItemsChange,
  callbackOnSelectItem,
  children,
  selectedItems: controlledSelectedItems,
  isControlled,
}: // onSelectItem,
DownshiftProviderMultiProps) {
  /**
   * State to manage combobox text input value
   */
  const [inputValue, setInputValue] = useState<string>(initialInputValue);

  /**
   * State to manage currently selected items
   * Initialized with optional controlledSelectedItems,
   * falling back to initialSelectedItems
   */
  const [selectedItems, setSelectedItems] = useState<
    (DropdownItem | null | undefined)[]
  >(
    initializeMultipleSelectedItems({
      allItems: items,
      controlledSelectedItems,
      initialSelectedItems,
      isControlled,
    })
  );

  /**
   * Update state when controlled items change
   */

  useEffect(() => {
    if (Array.isArray(controlledSelectedItems)) {
      setSelectedItems(controlledSelectedItems);
    }
  }, [controlledSelectedItems]);

  /**
   * Call optional callback when selected items changes
   */

  useEffect(() => {
    if (callbackOnSelectedItemsChange) {
      callbackOnSelectedItemsChange(selectedItems);
    }
  }, [callbackOnSelectedItemsChange, selectedItems]);

  /**
   * Filter all available items based on the combobox input value
   */

  const filteredItems = useMemo(() => {
    return filterDownshiftAvailableItems({
      items,
      inputValue,
    });
  }, [inputValue, items]);

  /**
   * Initialise Downshift `useMultipleSelection` hook
   */

  const { activeIndex, getDropdownProps, getSelectedItemProps } =
    useMultipleSelection<DropdownItem>({
      selectedItems: selectedItems as Array<DropdownItem>,
    });

  /**
   * Initialise Downshift `useCombobox` hook
   */

  const {
    closeMenu,
    getInputProps,
    getItemProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    isOpen,
    openMenu,
    reset,
    toggleMenu,
  } = useCombobox({
    inputValue,
    items: filteredItems,
    selectedItem: null,
    stateReducer(state, actionAndChanges) {
      const { changes, type } = actionAndChanges;

      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          return {
            ...changes,
            ...(changes.selectedItem && {
              /** Keep menu open on selection */
              isOpen: true,
              /** Keep same item highlighted on selection */
              highlightedIndex: state.highlightedIndex,
            }),
          };
        default:
          return changes;
      }
    },
    onStateChange({
      inputValue: newInputValue,
      type,
      selectedItem: newSelectedItem,
    }) {
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          setSelectedItems(
            handleMultipleSelection({
              newSelectedItem,
              selectedItems,
            })
          );
          if (callbackOnSelectItem) {
            callbackOnSelectItem(newSelectedItem);
          }
          break;

        case useCombobox.stateChangeTypes.InputChange:
          if (newInputValue !== undefined) {
            setInputValue(newInputValue);
          }

          break;
        default:
          break;
      }
    },
  });

  /**
   * Context provider value
   */

  const providedValue = useMemo(() => {
    return {
      activeIndex,
      closeMenu,
      getDropdownProps,
      getInputProps,
      getIsDownshiftItemSelected,
      getItemProps,
      getMenuProps,
      getSelectedItemProps,
      getToggleButtonProps,
      highlightedIndex,
      isOpen,
      items: filteredItems,
      openMenu,
      reset,
      selectedItem: null,
      selectedItems,
      toggleMenu,
    };
  }, [
    activeIndex,
    closeMenu,
    getDropdownProps,
    getInputProps,
    getItemProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    getSelectedItemProps,
    isOpen,
    filteredItems,
    openMenu,
    reset,
    selectedItems,
    toggleMenu,
  ]);

  return (
    <DownshiftContext.Provider value={providedValue}>
      {children}
    </DownshiftContext.Provider>
  );
}
