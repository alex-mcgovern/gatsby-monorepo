import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../../utils/font_awesome";
import * as classes from "./button.module.scss";

interface ButtonInnerContentProps {
  title?: string | number;
  leadingIcon?: IconProp;
  trailingIcon?: IconProp;
  size?: "sm" | "md" | "lg";
  onClick?(...args: unknown[]): unknown;
}

export default function ButtonInnerContent({
  title,
  leadingIcon,
  trailingIcon,
}: ButtonInnerContentProps) {
  return (
    <>
      {leadingIcon && <FontAwesomeIcon icon={leadingIcon} />}
      {title && <>{title}</>}
      {trailingIcon && <FontAwesomeIcon icon={trailingIcon} />}
    </>
  );
}
