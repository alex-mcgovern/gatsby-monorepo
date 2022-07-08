// This is useful to set up any Provider components that will wrap your application.
// For setting persistent UI elements around pages use wrapPageElement.
// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapRootElement
import React from "react";
import { FirebaseProvider } from "../../../context/firebase_context";
import { ThemeProvider } from "../../../context/theme_context";

interface IWrapRootElement {
  element: React.ReactNode;
}

export default function WrapRootElement({ element }: IWrapRootElement) {
  return (
    <ThemeProvider>
      <FirebaseProvider>{element}</FirebaseProvider>
    </ThemeProvider>
  );
}

WrapRootElement.defaultProps = {
  placeholderProp: null,
};
