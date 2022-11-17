import React, { useContext } from "react";
import { BoxNew, BoxNewProps } from "../../atoms/box_new/box_new";
import { DownshiftContext } from "./DownshiftContext";

export default function DropdownCombobox({ children, ...rest }: BoxNewProps) {
  const { getComboboxProps } = useContext(DownshiftContext);

  return (
    <BoxNew position="relative" {...rest} {...getComboboxProps()}>
      {children}
    </BoxNew>
  );
}
