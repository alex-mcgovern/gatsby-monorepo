import React from "react";
import classNames from "classnames";
import * as classes from "./layout_decorative_arrows.module.scss";

interface LayoutDecorativeArrowsProps {
  position?: "top" | "bottom";
}

export default function LayoutDecorativeArrows({
  position,
}: LayoutDecorativeArrowsProps) {
  const arrowsClassNames = classNames(classes.layout_decorative_arrows, {
    [classes.position_top]: position === "top",
    [classes.position_bottom]: position === "bottom",
  });
  return <div className={arrowsClassNames} />;
}

LayoutDecorativeArrows.defaultProps = {
  position: null,
};
