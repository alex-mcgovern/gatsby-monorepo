import React from "react";
import {
  TFunctionalClassNames,
  getFunctionalClassNames,
} from "../../../styles/functional_classnames.css";

interface ITypography {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: React.ReactNode;
  color?: TFunctionalClassNames["color"];
  fontSize?: TFunctionalClassNames["fontSize"];
  fontWeight?: TFunctionalClassNames["fontWeight"];
  marginBottom?: TFunctionalClassNames["marginBottom"];
  marginTop?: TFunctionalClassNames["marginTop"];
  textTransform?: TFunctionalClassNames["textTransform"];
}

export default function Typography({
  fontWeight,
  as,
  children,
  color,
  fontSize,
  marginBottom,
  marginTop,
  textTransform,
  ...rest
}: ITypography) {
  const buttonStyle = [
    getFunctionalClassNames({
      color,
      fontSize,
      fontWeight,
      marginBottom,
      marginTop,
      textTransform,
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
