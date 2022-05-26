import React from "react";
import PropTypes from "prop-types";
import * as classes from "./layout_max_width_container.module.scss";

export default function LayoutMaxWidthContainer({ children }) {
  return (
    <section className={classes.layout_max_width_container}>{children}</section>
  );
}

LayoutMaxWidthContainer.propTypes = {
  children: PropTypes.node,
};

LayoutMaxWidthContainer.defaultProps = {
  children: null,
};
