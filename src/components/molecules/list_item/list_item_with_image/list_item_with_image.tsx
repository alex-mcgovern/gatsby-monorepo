import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import { getFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import Box from "../../../layout/box/box";
import * as styles from "./list_item_with_image.css";

interface ListItemWithImageProps {
  title: string;
  subtitle?: string;
  description?: string;
  link: string;
  image: ImageDataLike;
  aspectRatio?: "square" | "wide" | "tall";
}

export default function ListItemWithImage({
  title,
  subtitle,
  description,
  link,
  image,
  aspectRatio,
}: ListItemWithImageProps) {
  const imageData = getImage(image);

  const imageClassNames = classNames(
    styles.image,
    getFunctionalClassNames({
      aspectRatio,
    })
  );

  return (
    <Link to={link} className={styles.listItemWrapper}>
      <Box background="crosshatch" outline="solid">
        {imageData && (
          <GatsbyImage
            alt={title}
            className={imageClassNames}
            image={imageData}
          />
        )}
      </Box>

      <Box as="header" padding="sm">
        {title && <h4>{title}</h4>}
        {subtitle && <small>{subtitle}</small>}
        {description && <p>{description}</p>}
      </Box>
    </Link>
  );
}

ListItemWithImage.defaultProps = {
  title: "",
  subtitle: "",
  description: "",
  link: "",
  image: {},
  aspectRatio: "wide",
};
