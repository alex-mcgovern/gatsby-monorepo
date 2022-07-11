import React from "react";
import {
  FunctionalClassNames,
  getUtilityClasses,
} from "../../../styles/functional_classnames.css";
import { TypographyVariants, getTypographyStyle } from "./typography.css";

export interface TypographyCustomisation {
  display?: FunctionalClassNames["display"];
  fontSize?: FunctionalClassNames["fontSize"];
  fontWeight?: FunctionalClassNames["fontWeight"];
  lineHeight?: FunctionalClassNames["lineHeight"];
  marginBottom?: FunctionalClassNames["marginBottom"];
  maxWidth?: FunctionalClassNames["maxWidth"];
  marginY?: FunctionalClassNames["marginY"];
  marginTop?: FunctionalClassNames["marginTop"];
  textAlign?: FunctionalClassNames["textAlign"];
  textTransform?: FunctionalClassNames["textTransform"];
  whiteSpace?: FunctionalClassNames["whiteSpace"];
}

export interface TypographyProps {
  /** Typography variant — controls color */
  variant?: TypographyVariants;
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
  variant,
  className,
  ...rest
}: TypographyProps) => {
  const buttonStyle = [
    getTypographyStyle(variant),
    getUtilityClasses({
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
