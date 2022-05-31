import React from "react";
import {
  TFunctionalClassNames,
  getFunctionalClassNames,
} from "../../../styles/functional_classnames.css";
import { getBoxClassNames } from "./box.css";

interface IBox {
  alignItems?: TFunctionalClassNames["alignItems"];
  as?: "a" | "div" | "header" | "li" | "nav" | "section" | "span";
  background?: "solid" | "crosshatch";
  children?: React.ReactNode;
  display?: TFunctionalClassNames["display"];
  gap?: TFunctionalClassNames["gap"];
  isVerticallyCentered?: boolean;
  justifyContent?: TFunctionalClassNames["justifyContent"];
  margin?: "xs" | "sm" | "md" | "lg";
  maxWidth?: TFunctionalClassNames["maxWidth"];
  outline?: "solid" | "dashed";
  padding?: "sm" | "md" | "lg";
  width?: TFunctionalClassNames["width"];
}

export default function Box({
  alignItems,
  as,
  background,
  children,
  display,
  justifyContent,
  margin,
  maxWidth,
  outline,
  padding,
  width,
  gap,
  ...rest
}: IBox) {
  const buttonStyle = [
    getBoxClassNames({
      background,
      outline,
      padding,
      margin,
    }),
    getFunctionalClassNames({
      gap,
      display,
      justifyContent,
      alignItems,
      maxWidth,
      width,
    }),
  ];

  // allow polymorphism
  const Element = as || "div";

  return (
    <Element className={buttonStyle.join(" ")} {...rest}>
      {children}
    </Element>
  );
}
