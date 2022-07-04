import React, { useContext } from "react";
import { ThemeContext } from "../../../context/theme_context";
import { TFunctionalClassNames } from "../../../styles/functional_classnames.css";
import "../../../styles/global.css";
import { darkTheme, lightTheme } from "../../../styles/theme.css";
import { checkIsClient } from "../../../utils/helper_functions/check_is_client/check_is_client";
import { Box } from "../../atoms/box/box";
import Nav from "../../molecules/nav/nav";
import Seo from "../../seo";
import Footer from "../footer";

interface IPageProps {
  children?: React.ReactNode;
  title: string;
  description?: string;
  maxWidth: TFunctionalClassNames["maxWidth"];
}

const Page = ({ children, title, description, maxWidth }: IPageProps) => {
  const { dark } = useContext(ThemeContext);

  if (checkIsClient()) {
    document.documentElement.className = dark ? darkTheme : lightTheme;
  }

  return (
    <Box
      customisation={{
        position: "relative",
        marginX: "auto",
        maxWidth: "gridSpan12",
        paddingX: "spacing2",
        paddingY: "spacing3",
      }}
    >
      <Seo title={title} description={description} />
      <Nav />

      <Box as="main">{children}</Box>
      <Footer />
    </Box>
  );
};

Page.defaultProps = {
  maxWidth: "gridSpan8",
};

export default Page;
