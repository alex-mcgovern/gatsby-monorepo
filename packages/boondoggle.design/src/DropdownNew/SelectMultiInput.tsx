import React, { useContext, useEffect, useState } from "react";
import type { InputProps } from "../Input";
import { Input } from "../Input";
import { DownshiftContext } from "./DownshiftContext";

export function SelectMultiInput({ placeholder = "All", ...rest }: InputProps) {
  const [inputPlaceholder, setInputPlaceholder] = useState(placeholder);

  const { getInputProps, toggleMenu, getDropdownProps, isOpen, selectedItems } =
    useContext(DownshiftContext);

  useEffect(() => {
    const computedSelectedCopy =
      selectedItems && selectedItems.length > 0
        ? `${selectedItems?.length} selected`
        : placeholder;

    setInputPlaceholder(computedSelectedCopy);
  }, [placeholder, selectedItems]);

  return (
    <Input
      {...getInputProps({
        ...getDropdownProps({ preventKeyAction: isOpen }),
        onClick: toggleMenu,
        placeholder: inputPlaceholder || placeholder,
        ...rest,
      })}
    />
  );
}
