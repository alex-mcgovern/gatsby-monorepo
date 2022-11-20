import React, { useContext } from "react";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useLayer } from "react-laag";
import { Box } from "../Box";
import type { InputProps } from "../Input";
import { Label } from "../Label";
import type { GetSprinklesArgs } from "../__css__/getSprinkles.css";
import { DownshiftContext } from "./DownshiftContext";
import { DownshiftList } from "./DownshiftList";
import type { DropdownCustomComponents } from "./downshift.types";
import { DownshiftListItemInnerCheckBox } from "./dropdown_list_items/dropdown_list_item_inner_checkbox";

export interface DownshiftMultiSelectTableHeaderProps
  extends Omit<InputProps, "value">,
    GetSprinklesArgs {
  customComponents?: DropdownCustomComponents;
  iconTrailing?: IconProp;
  isLabelVisible?: boolean;
  label?: string;
}

export function DownshiftMultiSelectTableHeader({
  id,
  isLabelVisible,
  customComponents,
  label,
  title,
  size,
  ...rest
}: DownshiftMultiSelectTableHeaderProps) {
  const { getDropdownProps, toggleMenu, isOpen } = useContext(DownshiftContext);

  // const { triggerProps, layerProps, renderLayer } = useLayer({
  //   isOpen,
  //   placement: "bottom-start",
  // });

  return (
    <Box position="relative" width="100%" {...rest}>
      {label && isLabelVisible && <Label htmlFor={id} label={label} />}
      <Box
        {...getDropdownProps({
          onClick: toggleMenu,
          // ...triggerProps,
        })}
        display="flex"
        alignItems="center"
        gap="spacing0"
        justifyContent="center"
      >
        {title}
        <FontAwesomeIcon icon={faFilter} size="xs" />
      </Box>
      {/* {renderLayer( */}
        <DownshiftList
          // {...layerProps}
          size={size}
          dropdownListItemInner={
            customComponents?.dropdownListItemChild ||
            DownshiftListItemInnerCheckBox
          }
        />
      {/* )} */}
    </Box>
  );
}
