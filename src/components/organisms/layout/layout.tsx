import React, { useContext } from "react";
import { ThemeContext } from "../../../context/theme_context";
import { getFunctionalClassNames } from "../../../styles/functional_classnames.css";
import "../../../styles/global.css";
import { darkTheme, lightTheme } from "../../../styles/theme.css";
import { RESPONSIVE_MAX_WIDTH_PROPS } from "../../../utils/shared_props/box_props";
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
    <Box position="relative">
      <StickyNav />
      <main>{children}</main>
      <Box
        {...RESPONSIVE_MAX_WIDTH_PROPS}
        marginY="spacing10"
        paddingBottom="spacing10"
      >
        © {date} Alex McGovern.
        <a href="https://www.freepik.com/vectors/ux">
          Ux vector created by upklyak - www.freepik.com
        </a>
      </Box>
    </Box>
  );
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
