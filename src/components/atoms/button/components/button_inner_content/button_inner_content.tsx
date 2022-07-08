import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import "../../../../../utils/font_awesome";
import * as styles from "./button_inner_content.css";

interface ButtonInnerContentProps {
  title?: string | number;
  iconLeading?: IconProp;
  iconTrailing?: IconProp;
  size?: IconProp & TSizeProp;
  isIconSpinning?: boolean;
  onClick?(...args: unknown[]): unknown;
}

export default function ButtonInnerContent({
  title,
  iconLeading,
  iconTrailing,
  size,
  isIconSpinning,
}: ButtonInnerContentProps) {
  const trailingIconClassnames = classNames(styles.iconTrailing, {
    [styles.iconSpin]: isIconSpinning,
  });
  return (
    <>
      {iconLeading && (
        <FontAwesomeIcon
          className={styles.iconLeading}
          size={size}
          icon={iconLeading}
        />
      )}
      {title && <span>{title}</span>}
      {iconTrailing && (
        <FontAwesomeIcon
          className={trailingIconClassnames}
          size={size}
          icon={iconTrailing}
        />
      )}
    </>
  );
}
