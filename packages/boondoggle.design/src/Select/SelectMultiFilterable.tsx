import React from "react";
import type { DropdownItem } from "../..";
import { Box } from "../Box";
import type { InputProps } from "../Input";
import { Label } from "../Label";
import type { GetSprinklesArgs } from "../__css__/getSprinkles.css";
import { DropdownMenu } from "./components/DropdownMenu";
import { SelectInput } from "./components/SelectInput";
import { DownshiftProviderMulti } from "./context/DownshiftProviderMulti";

export interface SelectMultiFilterableProps
  extends Omit<InputProps, "value" | "iconTrailing">,
    GetSprinklesArgs {
  items: Array<DropdownItem>;
  initialValue?: Array<DropdownItem>;
  onValueChange?(...args: Array<unknown>): unknown;
  onSelectItem?(...args: Array<unknown>): unknown;
  selectedItems?: Array<DropdownItem>;
  label?: string;
}

export function SelectMultiFilterable({
  items,
  onValueChange,
  onSelectItem,
  initialValue,
  id,
  disabled,
  iconLeading,
  label,
  placeholder,
  size,
  name,
  ...rest
}: SelectMultiFilterableProps) {
  return (
    <DownshiftProviderMulti
      items={items}
      onValueChange={onValueChange}
      onSelectItem={onSelectItem}
      initialValue={initialValue}
    >
      <Box position="relative" width="100%" {...rest}>
        {label && <Label htmlFor={id} label={label} />}
        <SelectInput
          disabled={disabled}
          iconLeading={iconLeading}
          id={id}
          name={name}
          placeholder={placeholder}
          size={size}
        />
        <DropdownMenu size={size} isSelectMultiFilterable />
      </Box>
    </DownshiftProviderMulti>
  );
}
