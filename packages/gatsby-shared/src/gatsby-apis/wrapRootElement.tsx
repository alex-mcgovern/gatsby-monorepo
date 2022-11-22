// This is useful to set up any Provider components that will wrap your application.
// For setting persistent UI elements around pages use wrapPageElement.
// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapRootElement
import React from "react";
import { ThemeProvider } from "@alexmcgovern/boondoggle.design";
import { FirebaseProvider } from "@alexmcgovern/firebase";

interface IWrapRootElement {
  element: React.ReactNode;
}

export function wrapRootElement({ element }: IWrapRootElement) {
  return (
    <ThemeProvider>
      <FirebaseProvider>{element}</FirebaseProvider>
    </ThemeProvider>
  );
}
