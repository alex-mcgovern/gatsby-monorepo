import React from "react";
import {
  TFunctionalClassNames,
  getFunctionalClassNames,
} from "../../../styles/functional_classnames.css";

export interface IBox {
  alignItems?: TFunctionalClassNames["alignItems"];
  dataSal?: TDataSal;
  dataSalDelay?: number;
  as?:
    | "article"
    | "menu"
    | "div"
    | "fieldset"
    | "footer"
    | "header"
    | "ul"
    | "li"
    | "nav"
    | "main"
    | "section"
    | "span";
  aspectRatio?: TFunctionalClassNames["aspectRatio"];
  backgroundColor?: TFunctionalClassNames["backgroundColor"];
  backgroundImage?: TFunctionalClassNames["backgroundImage"];
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
  gridTemplateRows?: TFunctionalClassNames["gridTemplateRows"];
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
  backgroundColor,
  backgroundImage,
  borderRadius,
  borderColor,
  border,
  boxShadow,
  children,
  color,
  display,
  dataSal,
  dataSalDelay,
  fontWeight,
  fontSize,
  flexDirection,
  gap,
  gridTemplateColumns,
  gridTemplateRows,
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
      backgroundColor,
      backgroundImage,
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
      gridTemplateRows,
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
      // transition: "background",
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
      data-sal-delay={dataSalDelay}
      {...rest}
    >
      {children}
    </Element>
  );
}
