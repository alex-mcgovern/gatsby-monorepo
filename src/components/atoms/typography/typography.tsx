import React from "react";
import {
  TFunctionalClassNames,
  getFunctionalClassNames,
} from "../../../styles/functional_classnames.css";

export interface TypographyCustomisation {
  backgroundColor?: TFunctionalClassNames["backgroundColor"];
  color?: TFunctionalClassNames["color"];
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

export interface ITypographyProps {
  /** Polymorphic prop allowing `Typography` to return a wide range of HTML Element types. */
  as?:
    | "code"
    | "div"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "label"
    | "p"
    | "span";
  children?: React.ReactNode;
  /** Customisation exposes utility-first styles as props. */
  customisation?: TypographyCustomisation;
  /** Allow additional classnames to be applied for more advanced customisation*/
  className?: string;
}

export const Typography = ({
  as,
  children,
  customisation,
  className,
  ...rest
}: ITypographyProps) => {
  const buttonStyle = [
    getFunctionalClassNames({
      ...customisation,
    }),
    className,
  ];

  const Element = as || "div";

  return (
    <Element className={buttonStyle.join(" ")} {...rest}>
      {children}
    </Element>
  );
};
