import React, { useContext } from "react";
import { Box } from "~components/box/box";
import { DownshiftContext } from "../DownshiftContext";
import type { DownshiftListItemInnerProps } from "../DownshiftListItem";
import { getIsDownshiftItemSelected } from "../getIsDownshiftItemSelected";

export function DownshiftListItemInnerCheckBox({
  item,
}: DownshiftListItemInnerProps) {
  const { selectedItems } = useContext(DownshiftContext) || {};

  const isSelected = getIsDownshiftItemSelected({ item, selectedItems });
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (
    <Box
      display="flex"
      alignItems="center"
      gap="spacing1"
    >
      <input
        type="checkbox"
        readOnly
        tabIndex={-1}
        checked={isSelected || false}
      />
      {item.label}
    </Box>
  );
}
