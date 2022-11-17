import React from "react";
import {
  GetSprinklesArgs,
  getSprinkles,
} from "../../../styles/functional_classnames.css";
import { TypographyVariants, getTypographyStyle } from "./typography.css";

export interface TypographyCustomisation {
  display?: GetSprinklesArgs["display"];
  fontSize?: GetSprinklesArgs["fontSize"];
  fontWeight?: GetSprinklesArgs["fontWeight"];
  lineHeight?: GetSprinklesArgs["lineHeight"];
  marginBottom?: GetSprinklesArgs["marginBottom"];
  maxWidth?: GetSprinklesArgs["maxWidth"];
  marginY?: GetSprinklesArgs["marginY"];
  marginTop?: GetSprinklesArgs["marginTop"];
  textAlign?: GetSprinklesArgs["textAlign"];
  textTransform?: GetSprinklesArgs["textTransform"];
  whiteSpace?: GetSprinklesArgs["whiteSpace"];
}

export interface TypographyProps {
  /** BoxNew variant — controls color */
  variant?: TypographyVariants;
  /** Polymorphic prop allowing `BoxNew` to return a wide range of HTML Element types. */
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

export const BoxNew = ({
  as,
  children,
  customisation,
  variant,
  className,
  ...rest
}: TypographyProps) => {
  const buttonStyle = [
    getTypographyStyle(variant),
    getSprinkles({
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
