import React from "react";
import {
  TFunctionalClassNames,
  getFunctionalClassNames,
} from "../../../styles/functional_classnames.css";

export interface ITypography {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "label";
  children?: React.ReactNode | HTMLCollection;
  color?: TFunctionalClassNames["color"];
  dataSal?: TDataSal;
  dataSalDelay?: number;
  display?: TFunctionalClassNames["display"];
  fontSize?: TFunctionalClassNames["fontSize"];
  fontWeight?: TFunctionalClassNames["fontWeight"];
  marginBottom?: TFunctionalClassNames["marginBottom"];
  maxWidth?: TFunctionalClassNames["maxWidth"];
  marginY?: TFunctionalClassNames["marginY"];
  marginTop?: TFunctionalClassNames["marginTop"];
  textAlign?: TFunctionalClassNames["textAlign"];
  textTransform?: TFunctionalClassNames["textTransform"];
  whiteSpace?: TFunctionalClassNames["whiteSpace"];
}

export default function Typography({
  as,
  children,
  color,
  dataSal,
  display,
  fontSize,
  fontWeight,
  marginBottom,
  marginTop,
  marginY,
  maxWidth,
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
      maxWidth,
      marginY,
      textAlign,
      textTransform,
      whiteSpace,
    }),
  ];

  // allow polymorphism
  const Element = as || "div";

  return (
    <Element className={buttonStyle.join(" ")} data-sal={dataSal} {...rest}>
      {children}
    </Element>
  );
}
