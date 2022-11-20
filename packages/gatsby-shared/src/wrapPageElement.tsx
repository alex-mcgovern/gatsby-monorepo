// This is useful to set up any Provider components that will wrap your application.
// For setting persistent UI elements around pages use wrapPageElement.
// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapPageElement
import React from "react";
import "@alexmcgovern/boondoggle.design/stylesheet.css";
import "@fontsource/dm-sans";
import "prismjs/themes/prism.css";
import { Layout } from "./Layout";

interface IWrapPageElement {
  element: React.ReactNode;
}

export function wrapPageElement({ element }: IWrapPageElement) {
  return <Layout>{element}</Layout>;
}
