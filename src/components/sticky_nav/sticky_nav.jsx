import React from "react";
import { Link } from "gatsby";
// import PropTypes from "prop-types";
import Button from "../atoms/button/button";
import * as classes from "./sticky_nav.module.scss";

export default function StickyNav() {
  return (
    <nav className={classes.sticky_nav}>
      <div className={classes.sticky_nav_inner}>
        <Link to="/" className={classes.sticky_nav_logo}>
          Alex McGovern Smith
        </Link>
        <menu className={classes.sticky_nav_menu}>
          <Button variant="secondary" size="sm" to="/" title="Home" />
          <Button variant="secondary" size="sm" to="/" title="Blog" />
          <Button size="sm" to="/" title="Connect" />
        </menu>
      </div>
    </nav>
  );
}

// StickyNav.propTypes = {
//   placeholderProp: PropTypes.string,
// };

// StickyNav.defaultProps = {
//   placeholderProp: null,
// };
