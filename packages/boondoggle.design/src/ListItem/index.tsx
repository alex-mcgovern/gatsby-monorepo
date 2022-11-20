import type { ReactNode } from "react";
import React from "react";
import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { Link } from "gatsby";
import type { BoxProps } from "../Box";
import { Box } from "../Box";
import { Tag } from "../Tag";
import { getSprinkles } from "../__css__/getSprinkles.css";
import * as styles from "./list_item.css";

export interface ListItemProps extends BoxProps {
  aspectRatio?: "square" | "wide" | "tall";
  description?: string;
  link: string;
  subtitle?: string;
  title: string;
  tags?: string[];
  leadingNode?: ReactNode;
  /** Callback on click. */
  onClick?(...args: unknown[]): unknown;
}

export function ListItem({
  description,
  link,
  leadingNode,
  subtitle,
  tags,
  title,
  ...rest
}: ListItemProps) {
  /** Separate `GetSprinklesArgs` from other spread props, so we don't break Vanilla Extract */
  const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

  const listItemClassNames = clsx(
    styles.listItemWrapper,
    getSprinkles({
      ...atomProps,
    })
  );

  return (
    <Link to={link} className={listItemClassNames} {...otherProps}>
      {leadingNode}

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
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
    </Link>
  );
}
