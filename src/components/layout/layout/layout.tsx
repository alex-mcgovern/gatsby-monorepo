import React, { useContext } from "react";
import { ThemeContext } from "../../../context/theme_context";
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
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Box id={title}>
      <LayoutMaxWidthContainer>
        <StickyNav />
        <main>{children}</main>
        <Footer />
      </LayoutMaxWidthContainer>
    </Box>
  );
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
