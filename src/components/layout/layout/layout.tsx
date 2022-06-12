import * as React from "react";
import "../../../styles/global.css";
import Footer from "../../atoms/footer/footer";
import StickyNav from "../../molecules/header_nav/header_nav";
import Box from "../box/box";
import LayoutMaxWidthContainer from "../layout_max_width_container/layout_max_width_container";

interface LayoutProps {
  children?: React.ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div id={title}>
      <LayoutMaxWidthContainer>
        <StickyNav />
        <main>{children}</main>
        <Footer />
      </LayoutMaxWidthContainer>
    </div>
  );
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
