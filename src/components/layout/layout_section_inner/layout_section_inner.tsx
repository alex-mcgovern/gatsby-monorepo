import React from "react";
import classNames from "classnames";
import LayoutDecorativeArrows from "../layout_decorative_arrows/layout_decorative_arrows";
import * as classes from "./layout_section_inner.module.scss";

interface LayoutSectionInnerProps {
  hasBackground?: boolean;
  hasArrowsTop?: boolean;
  hasArrowsBottom?: boolean;
  hasOutline?: boolean;
  children?: React.ReactNode;
  hasMarginRight?: boolean;
  hasPadding?: boolean;
  hasMarginLeft?: boolean;
  isVerticallyCentered?: boolean;
}

export default function LayoutSectionInner({
  children,
  hasArrowsTop,
  hasArrowsBottom,
  hasOutline,
  hasMarginRight,
  hasMarginLeft,
  hasBackground,
  hasPadding,
  isVerticallyCentered,
}: LayoutSectionInnerProps) {
  const sectionContentClassNames = classNames(classes.wrapper, {
    [classes.outline]: hasOutline,
    [classes.margin_left]: hasMarginLeft,
    [classes.margin_right]: hasMarginRight,
    [classes.background]: hasBackground,
    [classes.hasPadding]: hasPadding,
    [classes.isVerticallyCentered]: isVerticallyCentered,
  });
  return (
    <div className={sectionContentClassNames}>
      {hasArrowsTop && <LayoutDecorativeArrows position="top" />}
      {children}
      {hasArrowsBottom && <LayoutDecorativeArrows position="bottom" />}
    </div>
  );
}
