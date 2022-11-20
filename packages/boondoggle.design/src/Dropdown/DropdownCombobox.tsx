import React, { useContext } from "react";
import type { BoxProps } from "../Box";
import { Box } from "../Box";
import { DownshiftContext } from "./DownshiftContext";

export function DropdownCombobox({ children, ...rest }: BoxProps) {
  const { getComboboxProps } = useContext(DownshiftContext);

  return (
    <Box position="relative" {...rest} {...getComboboxProps()}>
      {children}
    </Box>
  );
}
