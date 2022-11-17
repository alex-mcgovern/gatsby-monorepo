import { useEffect, useState } from "react";
import { useCombobox } from "downshift";
import { matchSorter } from "match-sorter";
import checkHasLength from "../../../../utils/map_if_has_length/map_if_has_length";

interface IDownshiftChanges {
  highlightedIndex?: number;
  selectedItem?: IDownshiftItem | null;
  isOpen?: boolean;
  inputValue?: string;
}

interface IUseComboboxWithCreateArgs {
  isCreatable?: boolean;
  items: IDownshiftItem[];
  initialInputValue: string;
  onSelect?(...args: unknown[]): unknown;
}

export default function useComboboxWithCreate({
  items,
  isCreatable,
  initialInputValue,
  onSelect,
}: IUseComboboxWithCreateArgs) {
  const [isCreating, setIsCreating] = useState(false);
  const [inputItems, setInputItems] = useState(items);

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    setHighlightedIndex,
    inputValue,
    selectedItem,
    toggleMenu,
  } = useCombobox({
    items: inputItems,
    initialInputValue,

    onInputValueChange: ({ inputValue }) => {
      const filteredItems = matchSorter(items, inputValue || "", {
        keys: ["value", "label"],
      });

      if (isCreating && filteredItems.length > 0) {
        setIsCreating(false);
      }

      setInputItems(filteredItems);
    },
    itemToString: (item) => {
      return item ? item.value : "";
    },
    onStateChange: (changes: IDownshiftChanges) => {
      if (
        changes.selectedItem?.value === inputValue &&
        !items.includes(changes.selectedItem)
      ) {
        // Can receive an optional callback
        if (onSelect) {
          onSelect(changes.selectedItem);
        }
        setInputItems(items);
        setIsCreating(false);
      }
    },
  });

  useEffect(() => {
    if (!checkHasLength(inputItems) && isCreatable) {
      setIsCreating(true);
      setInputItems([{ label: `+ Create ${inputValue}`, value: inputValue }]);
      setHighlightedIndex(0);
    }
  }, [inputItems, setIsCreating, setHighlightedIndex, inputValue]);

  return {
    getComboboxProps,
    getInputProps,
    getItemProps,
    getMenuProps,
    toggleMenu,
    highlightedIndex,
    inputValue,
    isOpen,
    inputItems,
    selectedItem,
  };
}
