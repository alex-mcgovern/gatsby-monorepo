import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import * as classes from "./horizontal_divider.module.scss";

export default function HorizontalDivider({ position }) {
  const dividerClassNames = classNames(classes.horizontal_divider, {
    [classes.position_top]: position === "top",
    [classes.position_bottom]: position === "bottom",
  });
  return <hr className={dividerClassNames} />;
}

HorizontalDivider.propTypes = {
  position: PropTypes.oneOf(["top", "bottom"]),
};

HorizontalDivider.defaultProps = {
  position: null,
};
