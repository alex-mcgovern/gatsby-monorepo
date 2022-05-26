import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import HorizontalDivider from "../../atoms/horizontal_divider/horizontal_divider";
import * as classes from "./layout_section_inner.module.scss";

export default function LayoutSectionInner({
  children,
  hasArrowsTop,
  hasArrowsBottom,
  hasOutline,
  hasMarginRight,
  hasMarginLeft,
  hasBackground,
  hasPadding,
}) {
  const sectionContentClassNames = classNames(classes.wrapper, {
    [classes.outline]: hasOutline,
    [classes.margin_left]: hasMarginLeft,
    [classes.margin_right]: hasMarginRight,
    [classes.background]: hasBackground,
    [classes.hasPadding]: hasPadding,
  });
  return (
    <div className={sectionContentClassNames}>
      {hasArrowsTop && <HorizontalDivider position="top" />}
      {children}
      {hasArrowsBottom && <HorizontalDivider position="bottom" />}
    </div>
  );
}

LayoutSectionInner.propTypes = {
  hasBackground: PropTypes.bool,
  hasArrowsTop: PropTypes.bool,
  hasArrowsBottom: PropTypes.bool,
  hasOutline: PropTypes.bool,
  children: PropTypes.node,
  hasMarginRight: PropTypes.bool,
  hasPadding: PropTypes.bool,
  hasMarginLeft: PropTypes.bool,
};

LayoutSectionInner.defaultProps = {
  hasBackground: false,
  hasArrowsTop: false,
  hasArrowsBottom: false,
  hasOutline: false,
  children: null,
  hasMarginRight: false,
  hasPadding: false,
  hasMarginLeft: false,
};
