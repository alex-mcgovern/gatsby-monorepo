import React from "react";
import {
  TFunctionalClassNames,
  getFunctionalClassNames,
} from "../../../styles/functional_classnames.css";

export interface IBoxCustomisation {
  alignItems?: TFunctionalClassNames["alignItems"];
  aspectRatio?: TFunctionalClassNames["aspectRatio"];
  backgroundColor?: TFunctionalClassNames["backgroundColor"];
  backgroundImage?: TFunctionalClassNames["backgroundImage"];
  border?: TFunctionalClassNames["border"];
  borderRadius?: TFunctionalClassNames["borderRadius"];
  borderColor?: TFunctionalClassNames["borderColor"];
  boxShadow?: TFunctionalClassNames["boxShadow"];
  color?: TFunctionalClassNames["color"];
  display?: TFunctionalClassNames["display"];
  flexDirection?: TFunctionalClassNames["flexDirection"];
  flexWrap?: TFunctionalClassNames["flexWrap"];
  fontSize?: TFunctionalClassNames["fontSize"];
  fontWeight?: TFunctionalClassNames["fontWeight"];
  gap?: TFunctionalClassNames["gap"];
  gridTemplateColumns?: TFunctionalClassNames["gridTemplateColumns"];
  gridTemplateRows?: TFunctionalClassNames["gridTemplateRows"];
  gridAutoFlow?: TFunctionalClassNames["gridAutoFlow"];
  height?: TFunctionalClassNames["height"];
  justifyContent?: TFunctionalClassNames["justifyContent"];
  margin?: TFunctionalClassNames["margin"];
  marginBottom?: TFunctionalClassNames["marginBottom"];
  marginLeft?: TFunctionalClassNames["marginLeft"];
  marginRight?: TFunctionalClassNames["marginRight"];
  marginTop?: TFunctionalClassNames["marginTop"];
  marginX?: TFunctionalClassNames["marginY"];
  marginY?: TFunctionalClassNames["marginX"];
  maxWidth?: TFunctionalClassNames["maxWidth"];
  minHeight?: TFunctionalClassNames["minHeight"];
  maxHeight?: TFunctionalClassNames["maxHeight"];
  minWidth?: TFunctionalClassNames["minWidth"];
  textAlign?: TFunctionalClassNames["textAlign"];
  overflow?: TFunctionalClassNames["overflow"];
  outline?: TFunctionalClassNames["outline"];
  overflowY?: TFunctionalClassNames["overflowY"];
  padding?: TFunctionalClassNames["padding"];
  paddingBottom?: TFunctionalClassNames["paddingBottom"];
  paddingLeft?: TFunctionalClassNames["paddingLeft"];
  paddingRight?: TFunctionalClassNames["paddingRight"];
  paddingTop?: TFunctionalClassNames["paddingTop"];
  paddingX?: TFunctionalClassNames["paddingX"];
  paddingY?: TFunctionalClassNames["paddingY"];
  position?: TFunctionalClassNames["position"];
  width?: TFunctionalClassNames["width"];
  zIndex?: TFunctionalClassNames["zIndex"];
}

export interface IBox {
  /** Used as the html ID. */
  id?: string;
  /** Customisation exposes utility-first styles as props. */
  customisation?: IBoxCustomisation;
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

export const Box = ({ customisation, as, children, id, ...rest }: IBox) => {
  const boxClassNames = [getFunctionalClassNames({ ...customisation })];

  // allow polymorphism
  const Element = as || "div";

  return (
    <Element id={id} className={boxClassNames.join(" ")} {...rest}>
      {children}
    </Element>
  );
};
