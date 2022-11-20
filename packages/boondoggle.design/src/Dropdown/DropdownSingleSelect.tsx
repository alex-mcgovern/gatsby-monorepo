import React from "react";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Box } from "../Box";
import type { ButtonProps } from "../Button";
import type { ButtonVariants } from "../Button/button.css";
import { SingleSelectProvider } from "./DownshiftContext";
import { DropdownButton } from "./DropdownButton";
import { DropdownList } from "./DropdownList";
import type { DropdownItem } from "./types";

export interface DropdownSingleSelectProps {
  buttonTitle?: string;
  buttonProps?: ButtonProps;
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
  variant?: ButtonVariants;
}

export function DropdownSingleSelect({
  buttonProps,
  iconLeading,
  iconTrailing,
  id,
  initialInputValue,
  isDisabled,
  isLabelVisible,
  items,
  label,
  onSelect,

  variant,
}: DropdownSingleSelectProps) {
  return (
    <SingleSelectProvider
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
          iconLeading={iconLeading}
          iconTrailing={iconTrailing}
          variant={variant}
          {...buttonProps}
        />
        <DropdownList size={variant?.size} />
      </Box>
    </SingleSelectProvider>
  );
}
