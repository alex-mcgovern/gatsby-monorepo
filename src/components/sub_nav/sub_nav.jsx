import React from "react";
import PropTypes from "prop-types";
import * as classes from "./sub_nav.module.scss";

export default function SubNav({ title, children }) {
  return (
    <nav className={classes.sub_nav}>
      <div className={classes.sub_nav_inner}>
        <h1 className={classes.sub_nav_heading}>{title}</h1>
        {children && <menu className={classes.sub_nav_menu}>{children}</menu>}
      </div>
    </nav>
  );
}

SubNav.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

SubNav.defaultProps = {
  title: null,
  children: null,
};
