import * as React from "react";
import StickyNav from "../sticky_nav/sticky_nav";
import * as classes from "./layout.module.scss";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div>
      <StickyNav />
      <div className={classes.global_wrapper_outer}>
        <div
          className={classes.global_wrapper_inner}
          data-is-root-path={isRootPath}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;
