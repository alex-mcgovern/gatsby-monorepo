import React, { useContext } from "react";
import type { ButtonProps } from "../Button";
import { Button } from "../Button";
import { DownshiftContext } from "./DownshiftContext";

export function DropdownButton(props: ButtonProps) {
  const { toggleMenu, getToggleButtonProps } = useContext(DownshiftContext);

  return <Button {...props} onClick={toggleMenu} {...getToggleButtonProps()} />;
}
