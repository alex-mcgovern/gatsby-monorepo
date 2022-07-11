import React, { useContext } from "react";
import { Button, ButtonProps } from "../../atoms/button/button";
import { DownshiftContext } from "./DownshiftContext";

export default function DropdownButton(props: ButtonProps) {
  const { toggleMenu, getToggleButtonProps } = useContext(DownshiftContext);

  return <Button {...props} onClick={toggleMenu} {...getToggleButtonProps()} />;
}
