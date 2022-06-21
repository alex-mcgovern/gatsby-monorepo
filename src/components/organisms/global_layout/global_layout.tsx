import React, { useContext } from "react";
import { ThemeContext } from "../../../context/theme_context";
import "../../../styles/global.css";
import { darkTheme, lightTheme } from "../../../styles/theme.css";
import { RESPONSIVE_MAX_WIDTH_PROPS } from "../../../utils/shared_props/box_props";
import Box from "../../atoms/box/box";
import StickyNav from "../../molecules/header_nav/header_nav";

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
    <Box position="relative">
      <StickyNav />
      <main>{children}</main>
      <Box
        marginY="spacing10"
        paddingBottom="spacing10"
        {...RESPONSIVE_MAX_WIDTH_PROPS}
      >
        © {date} Alex McGovern.
      </Box>
    </Box>
  );
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
