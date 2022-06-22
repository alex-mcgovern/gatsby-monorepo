import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import { getFunctionalClassNames } from "../../../styles/functional_classnames.css";
import Box from "../../atoms/box/box";
import Typography from "../../atoms/typography/typography";
import * as styles from "./list_item.css";

interface ListItemProps {
  title: string;
  subtitle?: string;
  description?: string;
  link: string;
  image: ImageDataLike;
  aspectRatio?: "square" | "wide" | "tall";
}

export default function ListItem({
  title,
  subtitle,
  description,
  link,
  image,
  aspectRatio,
}: ListItemProps) {
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
            fontSize="body_sm"
            marginBottom="spacing2"
            fontWeight="medium"
            color="accent_text_lowContrast"
          >
            {subtitle}
          </Typography>
        )}
        {description && (
          <Typography fontSize="body_sm">{description}</Typography>
        )}
      </Box>
    </Link>
  );
}

ListItem.defaultProps = {
  title: "",
  subtitle: "",
  description: "",
  link: "",
  image: {},
  aspectRatio: "wide",
};
