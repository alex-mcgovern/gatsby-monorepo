// This is useful to set up any Provider components that will wrap your application.
// For setting persistent UI elements around pages use wrapPageElement.
// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapPageElement
import React from "react";
import Page from "../../organisms/page/page";

// import Seo from "../../seo";

interface IWrapPageElement {
  element: React.ReactNode;
}

export default function WrapPageElement({ element }: IWrapPageElement) {
  return <Page>{element}</Page>;
}

WrapPageElement.defaultProps = {
  placeholderProp: null,
};
