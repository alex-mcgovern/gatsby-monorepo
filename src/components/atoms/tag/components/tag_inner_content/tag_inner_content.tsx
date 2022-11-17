import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../../../utils/font_awesome";
import * as styles from "./tag_inner_content.css";

interface TagInnerContentProps {
  title?: string | number;
  iconLeading?: IconProp;
  iconTrailing?: IconProp;
  size?: IconProp & TSizeProp;
  onClick?(...args: unknown[]): unknown;
}

export default function TagInnerContent({
  title,
  iconLeading,
  iconTrailing,
  size,
}: TagInnerContentProps) {
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
          className={styles.iconTrailing}
          size={size}
          icon={iconTrailing}
        />
      )}
    </>
  );
}
