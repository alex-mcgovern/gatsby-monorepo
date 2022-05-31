import * as React from "react";
import "../../../styles/global.css";
import StickyNav from "../../molecules/header_nav/header_nav";

interface LayoutProps {
  children?: React.ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div id={title}>
      <StickyNav />
      <main>{children}</main>
    </div>
  );
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
