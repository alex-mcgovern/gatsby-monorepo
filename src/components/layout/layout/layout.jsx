import * as React from "react";
import PropTypes from "prop-types";
import StickyNav from "../../molecules/sticky_nav/sticky_nav";
import * as classes from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <StickyNav />
      <div className={classes.global_wrapper_outer}>
        <div className={classes.global_wrapper_inner}>
          <main>{children}</main>
          {/* <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer> */}
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
