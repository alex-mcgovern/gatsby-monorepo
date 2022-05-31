import React from "react";
import * as styles from "./layout_max_width_container.css";

interface LayoutMaxWidthContainerProps {
  children?: React.ReactNode;
}

export default function LayoutMaxWidthContainer({
  children,
}: LayoutMaxWidthContainerProps) {
  return <section className={styles.maxWidthContainer}>{children}</section>;
}

LayoutMaxWidthContainer.defaultProps = {
  children: null,
};
