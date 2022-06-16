import React, { useContext } from "react";
import { ThemeContext } from "../../../context/theme_context";
import { getFunctionalClassNames } from "../../../styles/functional_classnames.css";
import "../../../styles/global.css";
import { darkTheme, lightTheme } from "../../../styles/theme.css";
import Box from "../../atoms/box/box";
import Footer from "../../atoms/footer/footer";
import StickyNav from "../../molecules/header_nav/header_nav";
import LayoutMaxWidthContainer from "../layout_max_width_container/layout_max_width_container";

interface LayoutProps {
  children?: React.ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  const theme = useContext(ThemeContext);
  const { darkMode } = theme.state;

  document.documentElement.className = darkMode ? darkTheme : lightTheme;
  const date = new Date().getFullYear();

  return (
    <Box maxWidth="gridWidth" marginX="auto">
      <StickyNav />
      <main>{children}</main>
      <Box marginY="spacing10" paddingBottom="spacing10">
        © {date} Alex McGovern.
      </Box>
    </Box>
  );
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
