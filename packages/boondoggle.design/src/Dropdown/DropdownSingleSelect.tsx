import React from "react";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Box } from "../Box";
import type { ButtonVariants } from "../Button/button.css";
import { DownshiftSingleSelectProvider } from "./DownshiftContext";
import DropdownButton from "./DropdownButton";
import { DropdownList } from "./DropdownList";

export interface DropdownSingleSelectProps {
  buttonCustomisation?: ButtonCustomisation;
  buttonTitle?: string;
  iconLeading?: IconProp;
  iconTrailing?: IconProp;
  id: string;
  initialInputValue: string;
  isDisabled?: boolean;
  isLabelVisible?: boolean;
  isSearchable?: boolean;
  items: DropdownItem[];
  label: string;
  onSelect?(...args: unknown[]): unknown;
  placeholder?: string;
  title: string;
  variant?: ButtonVariants;
}

export function DropdownSingleSelect({
  id,
  isLabelVisible,
  iconLeading,
  iconTrailing,
  isDisabled,
  items,
  label,
  title,
  buttonCustomisation,
  onSelect,
  initialInputValue,
  variant,
}: DropdownSingleSelectProps) {
  return (
    <DownshiftSingleSelectProvider
      items={items}
      onValueChange={onSelect}
      selectedValue={initialInputValue}
    >
      <Box position="relative">
        <DropdownButton
          id={id}
          label={label}
          isLabelVisible={isLabelVisible}
          title={initialInputValue}
          isDisabled={isDisabled}
          customisation={buttonCustomisation}
          iconLeading={iconLeading}
          iconTrailing={iconTrailing}
          variant={variant}
        />
        <DropdownList size={variant?.size} />
      </Box>
    </DownshiftSingleSelectProvider>
  );
}

export default DropdownSingleSelect;
