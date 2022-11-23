import type { ReactNode, Ref } from "react";
import React, { forwardRef } from "react";
import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import type { BoxProps } from "../Box";
import { Box } from "../Box";
import { Tag } from "../Tag";
import { getSprinkles } from "../__css__/getSprinkles.css";
import * as styles from "./index.css";

export interface ListItemProps extends Omit<BoxProps, "title"> {
  aspectRatio?: "square" | "wide" | "tall";
  description?: string;
  subtitle?: string;
  className?: string;
  title: ReactNode;
  tags?: string[];
  leadingNode?: ReactNode;
  children?: ReactNode | Array<ReactNode>;
  /** Callback on click. */
  onClick?(...args: unknown[]): unknown;
}

export const ListItem = forwardRef(
  (
    {
      as = "div",
      children,
      className,
      description,
      leadingNode,
      subtitle,
      tags,
      title,
      ...rest
    }: ListItemProps,
    ref: Ref<HTMLElement>
  ) => {
    /** Separate `GetSprinklesArgs` from other spread props, so we don't break Vanilla Extract */
    const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

    const listItemClassNames = clsx(
      className,
      styles.listItemWrapper,
      getSprinkles({
        ...atomProps,
      })
    );

    return (
      <Box as={as} ref={ref} className={listItemClassNames} {...otherProps}>
        {leadingNode}

        <Box

        // display="flex"
        // flexDirection="column"
        // justifyContent="space-between"
        // height="100%"
        >
          <Box as="header">
            {title && (
              <Box fontSize="body_lg" fontWeight="medium">
                {title}
              </Box>
            )}
            {subtitle && (
              <Box
                color="neutral_text_lowContrast"
                fontSize="body_sm"
                fontWeight="medium"
              >
                {subtitle}
              </Box>
            )}

            {description && <Box as="p">{description}</Box>}
          </Box>
          {children}
          <Box>
            {tags && tags.length > 0 && (
              <Box
                marginTop="spacing3"
                display="flex"
                flexWrap="wrap"
                gap="spacing1"
              >
                {tags?.map((tag) => {
                  return <Tag key={tag} title={tag} />;
                })}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    );
  }
);
