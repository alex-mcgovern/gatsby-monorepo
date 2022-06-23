import React, { useContext } from "react";
import { ThemeContext } from "../../../context/theme_context";
import "../../../styles/global.css";
import { darkTheme, lightTheme } from "../../../styles/theme.css";
import { BOX_PROPS_CONTAINED } from "../../../utils/shared_props/box_props";
import Box from "../../atoms/box/box";
import StickyNav from "../../molecules/header_nav/header_nav";
import Seo from "../../seo";

interface LayoutProps {
  children?: React.ReactNode;
  title: string;
  description?: string;
}

const Layout = ({ children, title, description }: LayoutProps) => {
  const { dark } = useContext(ThemeContext);

  document.documentElement.className = dark ? darkTheme : lightTheme;
  const date = new Date().getFullYear();

  return (
    <Box position="relative">
      <Seo title={title} description={description} />

      <StickyNav />
      <main>{children}</main>
      <Box
        marginY="spacing10"
        paddingBottom="spacing10"
        {...BOX_PROPS_CONTAINED}
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
