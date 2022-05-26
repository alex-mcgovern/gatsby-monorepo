import React from "react";
import * as classes from "./layout_max_width_container.module.scss";

interface LayoutMaxWidthContainerProps {
  children?: React.ReactNode;
}

export default function LayoutMaxWidthContainer({
  children
}: LayoutMaxWidthContainerProps) {
  return (
    <section className={classes.layout_max_width_container}>{children}</section>
  );
}

LayoutMaxWidthContainer.defaultProps = {
  children: null,
};
