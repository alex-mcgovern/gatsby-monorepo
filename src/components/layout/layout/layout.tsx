import * as React from "react";
import StickyNav from "../../molecules/sticky_nav/sticky_nav";
import * as classes from "./layout.module.scss";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({
  children
}: LayoutProps) => {
  return (
    <div>
      <StickyNav />
      <div className={classes.global_wrapper_outer}>
        <div className={classes.global_wrapper_inner}>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
