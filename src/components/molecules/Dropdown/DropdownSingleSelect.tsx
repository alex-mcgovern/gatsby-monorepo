import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { BoxNew } from "../../atoms/box_new/box_new";
import { ButtonCustomisation } from "../../atoms/button/button";
import { ButtonVariants } from "../../atoms/button/button.css";
import { DownshiftSingleSelectProvider } from "./DownshiftContext";
import DropdownButton from "./DropdownButton";
import { DropdownList } from "./DropdownList";

export interface DropdownSingleSelect {
  buttonCustomisation?: ButtonCustomisation;
  buttonTitle?: string;
  iconLeading?: IconProp;
  iconTrailing?: IconProp;
  id: string;
  initialInputValue: string;
  isDisabled?: boolean;
  isLabelVisible?: boolean;
  isSearchable?: boolean;
  items: IDownshiftItem[];
  label: string;
  onSelect?(...args: unknown[]): unknown;
  placeholder?: string;
  title: string;
  variant?: ButtonVariants;
}

export const DropdownSingleSelect = ({
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
}: DropdownSingleSelect) => {
  return (
    <DownshiftSingleSelectProvider
      items={items}
      onValueChange={onSelect}
      selectedValue={initialInputValue}
    >
      <BoxNew position="relative">
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
      </BoxNew>
    </DownshiftSingleSelectProvider>
  );
};

export default DropdownSingleSelect;

DropdownSingleSelect.defaultProps = {
  iconTrailing: "caret-down",
};
