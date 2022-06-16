import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import { getFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import Box from "../../../atoms/box/box";
import Typography from "../../../atoms/typography/typography";
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
      {imageData && (
        <GatsbyImage
          alt={title}
          image={imageData}
          imgClassName={imageClassNames}
        />
      )}

      <Box as="header" padding="spacing3">
        {title && (
          <Typography
            fontSize="body_lg"
            fontWeight="semibold"
            marginBottom="spacing2"
          >
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography
            fontSize="body_md"
            marginBottom="spacing2"
            fontWeight="medium"
            color="primary_text_lowContrast"
          >
            {" "}
            {subtitle}
          </Typography>
        )}
        {description && (
          <Typography fontSize="body_md">{description}</Typography>
        )}
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
