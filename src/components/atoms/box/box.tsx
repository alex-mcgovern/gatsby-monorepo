import React from "react";
import {
  TFunctionalClassNames,
  getFunctionalClassNames,
} from "../../../styles/functional_classnames.css";

export interface IBox {
  alignItems?: TFunctionalClassNames["alignItems"];
  dataSal?: TDataSal;
  as?:
    | "article"
    | "menu"
    | "div"
    | "fieldset"
    | "footer"
    | "header"
    | "li"
    | "nav"
    | "section"
    | "span";
  aspectRatio?: TFunctionalClassNames["aspectRatio"];
  background?: TFunctionalClassNames["background"];
  border?: TFunctionalClassNames["border"];
  borderRadius?: TFunctionalClassNames["borderRadius"];
  borderColor?: TFunctionalClassNames["borderColor"];
  boxShadow?: TFunctionalClassNames["boxShadow"];
  children?: React.ReactNode;
  color?: TFunctionalClassNames["color"];
  display?: TFunctionalClassNames["display"];
  flexDirection?: TFunctionalClassNames["flexDirection"];
  fontSize?: TFunctionalClassNames["fontSize"];
  fontWeight?: TFunctionalClassNames["fontWeight"];
  gap?: TFunctionalClassNames["gap"];
  gridTemplateColumns?: TFunctionalClassNames["gridTemplateColumns"];
  gridAutoFlow?: TFunctionalClassNames["gridAutoFlow"];
  height?: TFunctionalClassNames["height"];
  id?: string;
  isVerticallyCentered?: boolean;
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

export default function Box({
  alignItems,
  as,
  aspectRatio,
  background,
  borderRadius,
  borderColor,
  border,
  boxShadow,
  children,
  color,
  display,
  dataSal,
  fontWeight,
  fontSize,
  flexDirection,
  gap,
  gridTemplateColumns,
  gridAutoFlow,
  height,
  id,
  outline,
  justifyContent,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  marginX,
  marginY,
  maxWidth,
  minHeight,
  maxHeight,
  minWidth,
  overflow,
  overflowY,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  position,
  width,
  zIndex,
  ...rest
}: IBox) {
  const boxClassNames = [
    getFunctionalClassNames({
      outline,
      alignItems,
      aspectRatio,
      background,
      border,
      borderRadius,
      borderColor,
      boxShadow,
      color,
      display,
      fontWeight,
      fontSize,
      gap,
      gridTemplateColumns,
      gridAutoFlow,
      flexDirection,
      height,
      margin,
      justifyContent,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      marginX,
      marginY,
      maxWidth,
      maxHeight,
      minHeight,
      overflow,
      overflowY,
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      position,
      transition: "background",
      width,
      zIndex,
    }),
  ];

  // allow polymorphism
  const Element = as || "div";

  return (
    <Element
      id={id}
      className={boxClassNames.join(" ")}
      data-sal={dataSal}
      {...rest}
    >
      {children}
    </Element>
  );
}
