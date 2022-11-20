import React, { forwardRef } from "react";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Box } from "../Box";
import type { ButtonProps } from "../Button";
import type { DropdownItem } from "../Dropdown/types";
import { Label } from "../Label";
import type { GetSprinklesArgs } from "../__css__/getSprinkles.css";
import { DownshiftContext } from "./DownshiftContext";
import { DownshiftList } from "./DownshiftList";
import { DownshiftProviderSingle } from "./DownshiftProviderSingle";
import { DownshiftToggleButton } from "./DownshiftToggleButton";
import { DownshiftToggleInnerGeneric } from "./DownshiftToggleInnerGeneric";
import type { DropdownCustomComponents } from "./downshift.types";
import { DownshiftListItemInnerGeneric } from "./dropdown_list_items/dropdown_list_item_inner_generic";

export interface SingleSelectProps {
  /** FontAwesome icon shown on the left side of select. */
  iconLeading?: IconProp;
  /** FontAwesome icon shown on the right side of select. */
  iconTrailing?: IconProp;
  /** An object containing components to customize the dropdown elements  */
  customComponents?: DropdownCustomComponents;
  /** HTML id attribute */
  id: string;
  /** Initial value for the select */
  initialInputValue: string;
  /** HTML disabled attribute for the select element. */
  disabled?: boolean;
  /** An array of Downshift compatible options */
  items: Array<DropdownItem>;
  /** a11y name for the select element */
  name: string;
  /** Callback when an item is selected */
  onChange?(selectedItem: DropdownItem): unknown;
  buttonProps?: ButtonProps;
  isLabelVisible?: boolean;
  invalid?: boolean;
  label?: string;
  size: ButtonProps["size"];
  wrapperProps?: GetSprinklesArgs;
}

export const SingleSelect = forwardRef(
  (
    {
      buttonProps,
      label,
      isLabelVisible,
      customComponents,
      disabled,
      iconLeading,
      iconTrailing,
      id,
      invalid,
      initialInputValue,
      items,
      name,
      onChange,
      size,
      ...rest
    }: SingleSelectProps,
    ref
  ) => {
    const DropdownToggleInner =
      (customComponents && customComponents.dropdownToggleChild) ||
      DownshiftToggleInnerGeneric;

    return (
      <DownshiftProviderSingle
        items={items}
        onChange={onChange}
        initialInputValue={initialInputValue}
      >
        <DownshiftContext.Consumer>
          {({ selectedItem }) => {
            return (
              <Box position="relative" {...rest}>
                {label && isLabelVisible && (
                  <Label htmlFor={id} label={label} />
                )}
                <DownshiftToggleButton
                  id={id}
                  ref={ref}
                  invalid={invalid}
                  disabled={disabled}
                  iconLeading={iconLeading}
                  iconTrailing={iconTrailing}
                  name={name}
                  size={size}
                  {...buttonProps}
                >
                  <DropdownToggleInner
                    selectedItem={selectedItem}
                    initialInputValue={initialInputValue}
                  />
                </DownshiftToggleButton>
                <DownshiftList
                  size={size}
                  dropdownListItemInner={
                    customComponents?.dropdownListItemChild ||
                    DownshiftListItemInnerGeneric
                  }
                />
              </Box>
            );
          }}
        </DownshiftContext.Consumer>
      </DownshiftProviderSingle>
    );
  }
);
