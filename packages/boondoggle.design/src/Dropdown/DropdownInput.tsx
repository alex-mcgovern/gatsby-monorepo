import React, { useContext } from "react";
import type { InputProps } from "../Input";
import { Input } from "../Input";
import { DownshiftContext } from "./DownshiftContext";

export default function DropdownInput(props: InputProps) {
  const { onValueChange, getInputProps, toggleMenu } =
    useContext(DownshiftContext);

  return (
    <Input
      {...props}
      onChange={onValueChange}
      onClick={toggleMenu}
      {...getInputProps()}
    />
  );
}
