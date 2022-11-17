import React from "react";
import clsx from "clsx";
import { Link } from "gatsby";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import { getSprinkles } from "../../../styles/functional_classnames.css";
import checkHasLength from "../../../utils/map_if_has_length/map_if_has_length";
import { BoxNew, BoxNewProps } from "../../atoms/box_new/box_new";
import { Tag } from "../../atoms/tag/tag";
import * as styles from "./list_item.css";

export interface ListItemProps extends BoxNewProps {
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

export const ListItem = ({
  aspectRatio,
  description,
  image,
  link,
  onClick,
  subtitle,
  tags,
  title,
  ...rest
}: ListItemProps) => {
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

      <BoxNew
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <BoxNew as="header">
          {title && (
            <BoxNew
              customisation={{
                fontSize: "body_md",
                fontWeight: "medium",
              }}
              className={styles.listItemTitle}
            >
              {title}
            </BoxNew>
          )}
          {subtitle && (
            <BoxNew
              variant={{
                color: "neutral_fg_1",
              }}
              customisation={{
                fontSize: "body_md",
                fontWeight: "medium",
              }}
            >
              {subtitle}
            </BoxNew>
          )}

          {description && <BoxNew as="p">{description}</BoxNew>}
        </BoxNew>
        <BoxNew>
          {checkHasLength(tags) && (
            <BoxNew
              marginTop="spacing3"
              display="flex"
              flexWrap="wrap"
              gap="spacing1"
            >
              {tags?.map((tag) => {
                return <Tag key={tag} title={tag} />;
              })}
            </BoxNew>
          )}
        </BoxNew>
      </BoxNew>
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
