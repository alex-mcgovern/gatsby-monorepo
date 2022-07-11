import React from "react";
import clsx from "clsx";
import { Link } from "gatsby";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import { getUtilityClasses } from "../../../styles/functional_classnames.css";
import checkHasLength from "../../../utils/map_if_has_length/map_if_has_length";
import { Box, BoxCustomisation } from "../../atoms/box/box";
import { Tag } from "../../atoms/tag/tag";
import { Typography } from "../../atoms/typography/typography";
import * as styles from "./list_item.css";

export interface ListItemProps {
  aspectRatio?: "square" | "wide" | "tall";
  customisation?: BoxCustomisation;
  description?: string;
  image: ImageDataLike;
  link: string;
  subtitle?: string;
  title: string;
  tags?: string[];
  /** Callback on click. */
  onClick?(...args: unknown[]): unknown;
}

export const ListItem = ({
  aspectRatio,
  customisation,
  description,
  image,
  link,
  onClick,
  subtitle,
  tags,
  title,
}: ListItemProps) => {
  const imageData = getImage(image);

  const listItemClassNames = clsx(
    styles.listItemWrapper,
    getUtilityClasses({
      ...customisation,
    })
  );
  const imageClassNames = clsx(
    styles.image,
    getUtilityClasses({
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
        customisation={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box as="header">
          {title && (
            <Typography
              customisation={{
                fontSize: "body_md",
                fontWeight: "medium",
              }}
              className={styles.listItemTitle}
            >
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography
              variant={{
                color: "neutral_fg_1",
              }}
              customisation={{
                fontSize: "body_md",
                fontWeight: "medium",
              }}
            >
              {subtitle}
            </Typography>
          )}

          {description && <Typography as="p">{description}</Typography>}
        </Box>
        <Box>
          {checkHasLength(tags) && (
            <Box
              customisation={{
                marginTop: "spacing3",
                display: "flex",
                flexWrap: "wrap",
                gap: "spacing1",
              }}
            >
              {tags.map((tag) => {
                return <Tag key={tag} title={tag} />;
              })}
            </Box>
          )}
        </Box>
      </Box>
    </Link>
  );
};

ListItem.defaultProps = {
  title: "",
  subtitle: "",
  description: "",
  link: "",
  image: {},
  aspectRatio: "wide",
};
