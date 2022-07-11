import React, { useContext } from "react";
import { Input, InputProps } from "../../atoms/input/input";
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
