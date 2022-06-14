import React from "react";
import { ThemeProvider } from "../../../context/theme_context";

interface IWrapRootElement {
  element: React.ReactNode;
}

export default function WrapRootElement({ element }: IWrapRootElement) {
  return <ThemeProvider>{element}</ThemeProvider>;
}

WrapRootElement.defaultProps = {
  placeholderProp: null,
};
