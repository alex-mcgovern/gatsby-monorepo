import React, { useContext } from "react";
import { ThemeContext } from "../../../context/theme_context";
import "../../../styles/global.css";
import { darkTheme, lightTheme } from "../../../styles/theme.css";
import { checkIsClient } from "../../../utils/helper_functions/check_is_client/check_is_client";
import { Box } from "../../atoms/box/box";
import Header from "../../molecules/header/header";
// import Seo from "../../seo";
import Footer from "../footer";

interface IPageProps {
  children?: React.ReactNode;
  // title: string;
  description?: string;
}

const Page = ({ children, description }: IPageProps) => {
  const { dark } = useContext(ThemeContext);

  if (checkIsClient()) {
    document.documentElement.className = dark ? darkTheme : lightTheme;
  }

  return (
    <Box
      customisation={{
        marginX: "auto",
        maxWidth: "gridSpan12",
        paddingX: "spacing2",
        position: "relative",
      }}
    >
      {/* <Seo title={title} description={description} /> */}
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </Box>
  );
};

Page.defaultProps = {};

export default Page;
