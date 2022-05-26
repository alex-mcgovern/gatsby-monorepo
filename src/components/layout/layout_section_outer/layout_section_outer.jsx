import React from "react";
import PropTypes from "prop-types";
import * as classes from "./layout_section_outer.module.scss";

export default function LayoutSectionOuter({ children }) {
  return <section className={classes.section}>{children}</section>;
}

LayoutSectionOuter.propTypes = {
  children: PropTypes.node,
};

LayoutSectionOuter.defaultProps = {
  children: null,
};
