import type { Ref } from "react";
import React, { forwardRef } from "react";
import clsx from "clsx";
import type { BoxProps } from "../Box";
import { Box } from "../Box";
import type { CardVariants } from "./card.css";
import { getCardStyle } from "./card.css";

export interface CardProps extends BoxProps {
  variant: CardVariants;
}

export const Card = forwardRef(
  (
    { children, className: userClassName, variant, ...rest }: CardProps,
    ref: Ref<HTMLElement> | undefined
  ) => {
    const classNames = clsx(getCardStyle(variant), userClassName);

    return (
      <Box {...rest} className={classNames} ref={ref}>
        {children}
      </Box>
    );
  }
);
