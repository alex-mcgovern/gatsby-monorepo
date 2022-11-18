import React from "react";
import clsx from "clsx";
import { Link } from "gatsby";
import type { ImageDataLike } from "gatsby-plugin-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import type { BoxProps } from "../Box";
import { Box } from "../Box";
import { Tag } from "../Tag";
import { getSprinkles } from "../__css__/getSprinkles.css";
import * as styles from "./list_item.css";

export interface ListItemProps extends BoxProps {
  aspectRatio?: "square" | "wide" | "tall";
  description?: string;
  image: ImageDataLike;
  link: string;
  subtitle?: string;
  title: string;
  tags?: string[];
  /** Callback on click. */
  onClick?(...args: unknown[]): unknown;
}

export function ListItem({
  aspectRatio,
  description,
  image,
  link,
  onClick,
  subtitle,
  tags,
  title,
  ...rest
}: ListItemProps) {
  const imageData = getImage(image);

  const listItemClassNames = clsx(
    styles.listItemWrapper,
    getSprinkles({
      ...rest,
    })
  );
  const imageClassNames = clsx(
    styles.image,
    getSprinkles({
      aspectRatio,
    })
  );

  return (
    <Link to={link} className={listItemClassNames}>
      {imageData && (
        <GatsbyImage
          alt={title}
          image={imageData}
          imgClassName={imageClassNames}
        />
      )}

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Box as="header">
          {title && (
            <Box
              customisation={{
                fontSize: "body_md",
                fontWeight: "medium",
              }}
              className={styles.listItemTitle}
            >
              {title}
            </Box>
          )}
          {subtitle && (
            <Box
              variant={{
                color: "neutral_fg_1",
              }}
              customisation={{
                fontSize: "body_md",
                fontWeight: "medium",
              }}
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
