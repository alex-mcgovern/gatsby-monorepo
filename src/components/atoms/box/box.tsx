import React, {
  AllHTMLAttributes,
  ElementType,
  createElement,
  forwardRef,
  useEffect,
} from "react";
import clsx, { ClassValue } from "clsx";
import {
  GetSprinklesArgs,
  getSprinkles,
} from "../../../styles/functional_classnames.css";
import { BoxVariants, getBoxStyle } from "./box.css";

export interface BoxProps {
  /** Used as the html ID. */
  id?: string;
  /** Option to add additional style overrides via class name. */
  className?: ClassValue;
  /** Customisation exposes utility-first styles as props. */
  customisation?: GetSprinklesArgs;
  children?: React.ReactNode;
  variant?: BoxVariants;
  /** Polymorphic prop allowing `Box` to return a wide range of HTML Element types. */
  as?: ElementType;
}

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ customisation, as, children, id, className, variant, ...rest }, ref) => {
    const boxClassNames = clsx(
      getBoxStyle(variant),
      getSprinkles({ ...customisation }),
      className
    );

    // allow polymorphism
    const Element = as || "div";

    return (
      <Element id={id} ref={ref} className={boxClassNames} {...rest}>
        {children}
      </Element>
    );
  }
);
