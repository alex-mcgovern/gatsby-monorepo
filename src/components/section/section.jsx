import React from "react";
import PropTypes from "prop-types";
import * as classes from "./section.module.scss";

export default function Section({ children }) {
  return <section className={classes.section}>{children}</section>;
}

Section.propTypes = {
  children: PropTypes.node,
};

Section.defaultProps = {
  children: null,
};
