import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TSizeProp } from "../../../../global";
import "../../../../utils/font_awesome";
import * as styles from "./button_inner_content.css";

interface ButtonInnerContentProps {
  title?: string | number;
  leadingIcon?: IconProp;
  trailingIcon?: IconProp;
  size?: IconProp & TSizeProp;
  onClick?(...args: unknown[]): unknown;
}

export default function ButtonInnerContent({
  title,
  leadingIcon,
  trailingIcon,
  size,
}: ButtonInnerContentProps) {
  return (
    <>
      {leadingIcon && (
        <FontAwesomeIcon
          className={styles.leadingIcon}
          size={size}
          icon={leadingIcon}
        />
      )}
      {title && <span>{title}</span>}
      {trailingIcon && (
        <FontAwesomeIcon
          className={styles.trailingIcon}
          size={size}
          icon={trailingIcon}
        />
      )}
    </>
  );
}
