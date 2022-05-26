import React from "react";
import PropTypes from "prop-types";
import * as classes from "./section_outer.module.scss";

export default function SectionOuter({ children }) {
  return <section className={classes.section}>{children}</section>;
}

SectionOuter.propTypes = {
  children: PropTypes.node,
};

SectionOuter.defaultProps = {
  children: null,
};
