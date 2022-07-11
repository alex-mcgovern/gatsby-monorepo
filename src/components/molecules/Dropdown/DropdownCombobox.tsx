import React, { useContext } from "react";
import { Box, BoxProps } from "../../atoms/box/box";
import { DownshiftContext } from "./DownshiftContext";

export default function DropdownCombobox({
  customisation,
  children,
}: BoxProps) {
  const { getComboboxProps } = useContext(DownshiftContext);

  return (
    <Box
      customisation={{ ...customisation, position: "relative" }}
      {...getComboboxProps()}
    >
      {children}
    </Box>
  );
}
