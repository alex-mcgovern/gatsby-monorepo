import { useEffect, useState } from "react";
import { useCombobox } from "downshift";
import { matchSorter } from "match-sorter";

interface IDownshiftChanges {
  highlightedIndex?: number;
  selectedItem?: IDownshiftItem | null;
  isOpen?: boolean;
  inputValue?: string;
}

interface IUseComboboxWithCreateArgs {
  items: IDownshiftItem[];
  onSelect(...args: unknown[]): unknown;
}

export default function useComboboxWithCreate({
  items,
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
  } = useCombobox({
    // ...downshiftProps,
    items: inputItems,
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
        onSelect(changes.selectedItem);
        setInputItems(items);
        setIsCreating(false);
      }
    },
  });

  useEffect(() => {
    if (inputItems.length === 0) {
      setIsCreating(true);

      setInputItems([{ label: `Create ${inputValue}`, value: inputValue }]);
      setHighlightedIndex(0);
    }
  }, [inputItems, setIsCreating, setHighlightedIndex, inputValue]);

  return {
    getComboboxProps,
    getInputProps,
    getItemProps,
    getMenuProps,
    highlightedIndex,
    inputValue,
    isOpen,
    inputItems,
    selectedItem,
  };
}
