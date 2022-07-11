import React, { forwardRef } from "react";
import clsx from "clsx";
import { Box, BoxProps } from "../box/box";
import { CardVariants, getCardStyle } from "./card.css";

interface CardProps extends Omit<BoxProps, "variant"> {
  variant: CardVariants;
}

export const Card = forwardRef(
  (
    { customisation, children, className: userClassName, variant }: CardProps,
    ref
  ) => {
    const classNames = clsx(getCardStyle(variant), userClassName);

    return (
      <Box customisation={customisation} className={classNames} ref={ref}>
        {children}
      </Box>
    );
  }
);
