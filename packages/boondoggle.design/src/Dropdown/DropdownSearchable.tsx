import React from "react";
import type { InputProps } from "../Input";
import { DownshiftSearchableSelectProvider } from "./DownshiftContext";
import DropdownCombobox from "./DropdownCombobox";
import DropdownInput from "./DropdownInput";
import { DropdownList } from "./DropdownList";
import { DropdownItem } from "./types";

export interface DropdownSearchableProps extends InputProps {
  isSearchable?: boolean;
  isCreatable?: boolean;
  items: DropdownItem[];
  onSelect?(...args: unknown[]): unknown;
  initialInputValue: string | null;
}

export function DropdownSearchable({
  id,
  isLabelVisible,
  isCreatable,
  iconLeading,
  iconTrailing,
  isDisabled,
  items,
  label,
  customisation,
  onSelect,
  placeholder,
  initialInputValue,
  variant,
  type,
  name,
}: DropdownSearchableProps) {
  return (
    <DownshiftSearchableSelectProvider
      items={items}
      onValueChange={onSelect}
      isCreatable={isCreatable}
      onSelect={onSelect}
      selectedValue={initialInputValue}
      initialInputValue={initialInputValue}
    >
      <DropdownCombobox>
        <DropdownInput
          name={name}
          type={type}
          placeholder={placeholder}
          id={id}
          isDisabled={isDisabled}
          iconLeading={iconLeading}
          iconTrailing={iconTrailing}
          label={label}
          customisation={customisation}
          isLabelVisible={isLabelVisible}
        />

        <DropdownList size={variant?.size} />
      </DropdownCombobox>
    </DownshiftSearchableSelectProvider>
  );
}

export default DropdownSearchable;
