import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import * as classes from "./button_wrapper.module.scss";

export default function ButtonWrapper({ children, isCentered }) {
  const wrapperClassNames = classNames(classes.button_wrapper, {
    [classes.centered]: isCentered,
  });
  return <menu className={wrapperClassNames}>{children}</menu>;
}

ButtonWrapper.propTypes = {
  isCentered: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

ButtonWrapper.defaultProps = {
  isCentered: false,
};
