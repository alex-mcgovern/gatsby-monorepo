import React from "react";
import {
  FunctionalClassNames,
  getFunctionalClassNames,
} from "../../../styles/functional_classnames.css";

export interface BoxCustomisation {
  alignItems?: FunctionalClassNames["alignItems"];
  aspectRatio?: FunctionalClassNames["aspectRatio"];
  backgroundColor?: FunctionalClassNames["backgroundColor"];
  backgroundImage?: FunctionalClassNames["backgroundImage"];
  border?: FunctionalClassNames["border"];
  borderRadius?: FunctionalClassNames["borderRadius"];
  borderColor?: FunctionalClassNames["borderColor"];
  boxShadow?: FunctionalClassNames["boxShadow"];
  color?: FunctionalClassNames["color"];
  display?: FunctionalClassNames["display"];
  flexDirection?: FunctionalClassNames["flexDirection"];
  flexWrap?: FunctionalClassNames["flexWrap"];
  fontSize?: FunctionalClassNames["fontSize"];
  fontWeight?: FunctionalClassNames["fontWeight"];
  gap?: FunctionalClassNames["gap"];
  gridTemplateColumns?: FunctionalClassNames["gridTemplateColumns"];
  gridTemplateRows?: FunctionalClassNames["gridTemplateRows"];
  height?: FunctionalClassNames["height"];
  justifyContent?: FunctionalClassNames["justifyContent"];
  margin?: FunctionalClassNames["margin"];
  marginBottom?: FunctionalClassNames["marginBottom"];
  marginLeft?: FunctionalClassNames["marginLeft"];
  marginRight?: FunctionalClassNames["marginRight"];
  marginTop?: FunctionalClassNames["marginTop"];
  marginX?: FunctionalClassNames["marginY"];
  marginY?: FunctionalClassNames["marginX"];
  maxWidth?: FunctionalClassNames["maxWidth"];
  minHeight?: FunctionalClassNames["minHeight"];
  maxHeight?: FunctionalClassNames["maxHeight"];
  minWidth?: FunctionalClassNames["minWidth"];
  textAlign?: FunctionalClassNames["textAlign"];
  overflow?: FunctionalClassNames["overflow"];
  outline?: FunctionalClassNames["outline"];
  overflowY?: FunctionalClassNames["overflowY"];
  padding?: FunctionalClassNames["padding"];
  paddingBottom?: FunctionalClassNames["paddingBottom"];
  paddingLeft?: FunctionalClassNames["paddingLeft"];
  paddingRight?: FunctionalClassNames["paddingRight"];
  paddingTop?: FunctionalClassNames["paddingTop"];
  paddingX?: FunctionalClassNames["paddingX"];
  paddingY?: FunctionalClassNames["paddingY"];
  position?: FunctionalClassNames["position"];
  width?: FunctionalClassNames["width"];
  zIndex?: FunctionalClassNames["zIndex"];
}

export interface IBox {
  /** Used as the html ID. */
  id?: string;
  /** Option to add additional style overrides via class name. */
  className?: string;
  /** Customisation exposes utility-first styles as props. */
  customisation?: BoxCustomisation;
  children?: React.ReactNode;
  /** Polymorphic prop allowing `Box` to return a wide range of HTML Element types. */
  as?:
    | "article"
    | "menu"
    | "div"
    | "fieldset"
    | "footer"
    | "table"
    | "thead"
    | "tr"
    | "th"
    | "td"
    | "tbody"
    | "header"
    | "ul"
    | "li"
    | "nav"
    | "main"
    | "section"
    | "span";
}

export const Box = ({
  customisation,
  as,
  children,
  id,
  className,
  ...rest
}: IBox) => {
  const boxClassNames = [
    getFunctionalClassNames({ ...customisation }),
    className,
  ];

  // allow polymorphism
  const Element = as || "div";

  return (
    <Element id={id} className={boxClassNames.join(" ")} {...rest}>
      {children}
    </Element>
  );
};
