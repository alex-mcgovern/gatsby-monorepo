import type { ElementType } from "react";
import React, { forwardRef, useContext } from "react";
import type { VariantInteractiveElementSizeEnum } from "../__css__/common/variant_interactive_element_size.css";
import { DownshiftContext } from "./DownshiftContext";
import { DownshiftListItem } from "./DownshiftListItem";
import { DownshiftMenu } from "./DownshiftMenu";
import { getIsDownshiftItemSelected } from "./getIsDownshiftItemSelected";

interface DownshiftListProps {
  size?: VariantInteractiveElementSizeEnum;
  dropdownListItemInner: ElementType;
}

export const DownshiftList = forwardRef(
  (
    {
      size = "md",
      dropdownListItemInner: DownshiftListItemInner,
      ...rest
    }: DownshiftListProps,
    ref
  ) => {
    const { highlightedIndex, items, getItemProps } =
      useContext(DownshiftContext);

    /**
     * Note: `DownshiftMenu` *must* not be in a conditional render, or
     * downshift's `getMenuProps` will be unable to apply a ref and throw an error
     */
    return (
      <DownshiftMenu {...rest} ref={ref}>
        {items?.length > 0 &&
          items.map((item, index) => {
            if (!item.label) {
              return null;
            }

            const isSelected = getIsDownshiftItemSelected({ item });

            return (
              <DownshiftListItem
                item={item}
                isHighlighted={highlightedIndex === index}
                key={item.label}
                isDropdownItemSelected={isSelected}
                size={size}
                {...getItemProps({
                  index,
                  item,
                })}
              >
                {DownshiftListItemInner && (
                  <DownshiftListItemInner item={item} />
                )}
              </DownshiftListItem>
            );
          })}
      </DownshiftMenu>
    );
  }
);
