import React from "react";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Box } from "../Box";
import type { InputProps } from "../Input";
import { Label } from "../Label";
import type { GetSprinklesArgs } from "../__css__/getSprinkles.css";
import { DownshiftList } from "./DownshiftList";
import { SelectMultiInput } from "./SelectMultiInput";
import type { DropdownCustomComponents } from "./downshift.types";
import { DownshiftListItemInnerCheckBox } from "./dropdown_list_items/dropdown_list_item_inner_checkbox";

export interface DownshiftMultiSelectComboboxProps
  extends Omit<InputProps, "value">,
    GetSprinklesArgs {
  customComponents?: DropdownCustomComponents;
  iconTrailing?: IconProp;
  isLabelVisible?: boolean;
  label?: string;
}

export function DownshiftMultiSelectCombobox({
  id,
  isLabelVisible,
  iconLeading,
  iconTrailing,
  customComponents,
  disabled,
  label,
  placeholder,
  type,
  size,
  name,
  ...rest
}: DownshiftMultiSelectComboboxProps) {
  return (
    <Box position="relative" width="100%" {...rest}>
      {label && isLabelVisible && <Label htmlFor={id} label={label} />}
      <SelectMultiInput
        name={name}
        type={type}
        placeholder={placeholder}
        id={id}
        disabled={disabled}
        iconLeading={iconLeading}
        iconTrailing={iconTrailing}
        size={size}
      />
      <DownshiftList
        size={size}
        dropdownListItemInner={
          customComponents?.dropdownListItemChild ||
          DownshiftListItemInnerCheckBox
        }
      />
    </Box>
  );
}
