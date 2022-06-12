import * as React from "react";
import { UseComboboxProps, useCombobox } from "downshift";
import { matchSorter } from "match-sorter";
import {
  TFunctionalClassNames,
  getFunctionalClassNames,
} from "../../../../styles/functional_classnames.css";
import SearchInput from "../search_input/search_input";
import SearchResultList from "../search_result_list/search_result_list";

export interface SearchCreatableProps<T> extends UseComboboxProps<T> {
  placeholder?: string;
  items: IDownshiftItem[];
  id?: string;
  width?: TFunctionalClassNames["width"];
  size?: "sm" | "md" | "lg";
  onSelect(...args: unknown[]): unknown;
}

export const SearchCreatable = <T extends IDownshiftItem>({
  items,
  placeholder,
  id,
  width,
  size,
  onSelect,
  ...downshiftProps
}: SearchCreatableProps<T>): React.ReactElement<SearchCreatableProps<T>> => {
  const formStyles = getFunctionalClassNames({ position: "relative" });
  const [localItems, setLocalItems] = React.useState(items);
  const [selected, setSelected] = React.useState<IDownshiftItem | null>(
    localItems[0]
  );

  const handleItemCreate = (item: IDownshiftItem) => {
    const newItem = { label: item.value, value: item.value };
    setLocalItems((currItems) => [...currItems, newItem]);
    setSelected(newItem);
  };

  const handleItemChange = (item?: IDownshiftItem) => {
    setSelected(item || null);
  };
  const [isCreating, setIsCreating] = React.useState(false);
  const [inputItems, setInputItems] = React.useState(items);
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    setHighlightedIndex,
    inputValue,
    selectedItem,
  } = useCombobox({
    ...downshiftProps,
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
    onStateChange: (changes) => {
      if (
        changes.selectedItem?.value === inputValue &&
        !items.includes(changes.selectedItem)
      ) {
        // @ts-ignore
        handleItemCreate(changes.selectedItem);
        onSelect(changes.selectedItem);
        setInputItems(items);
        setIsCreating(false);
      }
    },
  });

  React.useEffect(() => {
    if (inputItems.length === 0) {
      setIsCreating(true);
      // @ts-ignore (not sure how to fix this LOL)
      setInputItems([{ label: `Create ${inputValue}`, value: inputValue }]);
      setHighlightedIndex(0);
    }
  }, [inputItems, setIsCreating, setHighlightedIndex, inputValue]);

  return (
    <form className={formStyles} {...getComboboxProps()}>
      <SearchInput
        getInputProps={getInputProps}
        placeholder={placeholder}
        size={size}
        width={width}
      />
      <SearchResultList
        getItemProps={getItemProps}
        getMenuProps={getMenuProps}
        highlightedIndex={highlightedIndex}
        inputValue={inputValue}
        isOpen={isOpen}
        searchIndex={inputItems}
        selectedItem={selectedItem}
      />
    </form>
  );
};

export default SearchCreatable;
