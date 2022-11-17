import React, { Ref, forwardRef } from "react";
import clsx from "clsx";
import { BoxNew, BoxNewProps } from "../box_new/box_new";
import { CardVariants, getCardStyle } from "./card.css";

interface CardProps extends BoxNewProps {
  variant: CardVariants;
}

export const Card = forwardRef(
  (
    { children, className: userClassName, variant, ...rest }: CardProps,
    ref: Ref<HTMLElement> | undefined
  ) => {
    const classNames = clsx(getCardStyle(variant), userClassName);

    return (
      <BoxNew {...rest} className={classNames} ref={ref}>
        {children}
      </BoxNew>
    );
  }
);
