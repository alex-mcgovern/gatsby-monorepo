import React from "react";
import PropTypes from "prop-types";
import * as classes from "./inner_wrapper.module.scss";

export default function InnerWrapper({ children }) {
  return <section className={classes.inner_wrapper}>{children}</section>;
}

InnerWrapper.propTypes = {
  children: PropTypes.node,
};

InnerWrapper.defaultProps = {
  children: null,
};
