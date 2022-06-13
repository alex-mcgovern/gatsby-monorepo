import React from "react";
import {
  TFunctionalClassNames,
  getFunctionalClassNames,
} from "../../../styles/functional_classnames.css";

export interface ITypography {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "label";
  children?: React.ReactNode;
  color?: TFunctionalClassNames["color"];
  display?: TFunctionalClassNames["display"];
  fontSize?: TFunctionalClassNames["fontSize"];
  fontWeight?: TFunctionalClassNames["fontWeight"];
  marginBottom?: TFunctionalClassNames["marginBottom"];
  marginTop?: TFunctionalClassNames["marginTop"];
  textAlign?: TFunctionalClassNames["textAlign"];
  textTransform?: TFunctionalClassNames["textTransform"];
  whiteSpace?: TFunctionalClassNames["whiteSpace"];
}

export default function Typography({
  as,
  children,
  color,
  display,
  fontSize,
  fontWeight,
  marginBottom,
  marginTop,
  textAlign,
  textTransform,
  whiteSpace,
  ...rest
}: ITypography) {
  const buttonStyle = [
    getFunctionalClassNames({
      color,
      display,
      fontSize,
      fontWeight,
      marginBottom,
      marginTop,
      textAlign,
      textTransform,
      whiteSpace,
    }),
  ];

  // allow polymorphism
  const Element = as || "span";

  return (
    <Element className={buttonStyle.join(" ")} {...rest}>
      {children}
    </Element>
  );
}
