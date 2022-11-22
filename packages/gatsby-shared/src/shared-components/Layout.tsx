import type { ReactNode } from "react";
import React, { useContext } from "react";
import {
  Box,
  ThemeContext,
  darkTheme,
  lightTheme,
} from "@alexmcgovern/boondoggle.design";
import { checkIsInClient } from "@alexmcgovern/utils";
// import {Seo} from "../../seo";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  children?: ReactNode;
  // title: string;
  description?: string;
}

export function Layout({ children, description }: LayoutProps) {
  const { dark } = useContext(ThemeContext);

  if (checkIsInClient()) {
    document.documentElement.className = dark ? darkTheme : lightTheme;
  }

  return (
    <Box marginX="auto" maxWidth="gridSpan12" paddingX="spacing2">
      {/* <Seo title={title} description={description} /> */}
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </Box>
  );
}
