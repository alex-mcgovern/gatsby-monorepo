import React from "react";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Icon } from "../Icon";
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
        <Icon className={styles.iconLeading} size={size} icon={iconLeading} />
      )}
      {title && <span>{title}</span>}
      {iconTrailing && (
        <Icon className={styles.iconTrailing} size={size} icon={iconTrailing} />
      )}
    </>
  );
}
