// Notes: https://making.close.com/posts/highlights-from-a-complex-downshift-js-refactor/
import { createContext } from "react";
import type {
  UseComboboxActions,
  UseComboboxPropGetters,
  UseMultipleSelectionActions,
  UseMultipleSelectionPropGetters, // UseSelectActions,
} from "downshift";
import type { DropdownItem } from "../Dropdown/types";
import type { GetIsDropdownItemSelectedArgs } from "./getIsDownshiftItemSelected";

export interface DownshiftContextProvided {
  closeMenu: UseComboboxActions<DropdownItem>["closeMenu"];
  getDropdownProps: UseMultipleSelectionPropGetters<DropdownItem>["getDropdownProps"];
  getInputProps: UseComboboxPropGetters<DropdownItem>["getInputProps"];
  getIsDownshiftItemSelected: (
    args: GetIsDropdownItemSelectedArgs
  ) => boolean | undefined;
  getItemProps: UseComboboxPropGetters<DropdownItem>["getItemProps"];
  getSelectedItemProps: UseMultipleSelectionPropGetters<DropdownItem>["getSelectedItemProps"];
  getMenuProps: UseComboboxPropGetters<DropdownItem>["getMenuProps"];
  getToggleButtonProps: UseComboboxPropGetters<DropdownItem>["getToggleButtonProps"];
  highlightedIndex: number | undefined;
  isOpen: boolean;
  items: Array<DropdownItem>;
  openMenu: UseComboboxActions<DropdownItem>["openMenu"];
  reset: UseMultipleSelectionActions<DropdownItem>["reset"];
  selectedItem: DropdownItem | null;
  selectedItems: (DropdownItem | null | undefined)[] | undefined;
  // selectItem: UseSelectActions<DropdownItem>["selectItem"];
  toggleMenu: UseComboboxActions<DropdownItem>["openMenu"];
}

export const DownshiftContext = createContext<DownshiftContextProvided>({
  selectedItems: [],
  closeMenu: () => {},
  getDropdownProps: () => {},
  getInputProps: () => {},
  getIsDownshiftItemSelected: () => {
    return false;
  },
  getItemProps: () => {},
  getSelectedItemProps: () => {},
  getMenuProps: () => {},
  getToggleButtonProps: () => {},
  highlightedIndex: undefined,
  isOpen: false,
  items: [],
  openMenu: () => {},
  reset: () => {},
  selectedItem: null,
  // selectItem: () => {},
  toggleMenu: () => {},
});
