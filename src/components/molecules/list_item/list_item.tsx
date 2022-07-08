import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import { getFunctionalClassNames } from "../../../styles/functional_classnames.css";
import { Box, BoxCustomisation } from "../../atoms/box/box";
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
}

export const ListItem = ({
  aspectRatio,
  customisation,
  description,
  image,
  link,
  subtitle,
  title,
}: ListItemProps) => {
  const imageData = getImage(image);

  const listItemClassNames = classNames(
    styles.listItemWrapper,
    getFunctionalClassNames({
      ...customisation,
    })
  );
  const imageClassNames = classNames(
    getFunctionalClassNames({
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
          padding: "spacing2",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "spacing2",
          height: "100%",
        }}
      >
        <Box as="header">
          {title && (
            <Typography
              customisation={{
                fontSize: "body_lg",
                fontWeight: "semibold",
              }}
              className={styles.listItemTitle}
            >
              {title}
            </Typography>
          )}
          {description && (
            <Typography
              customisation={{
                marginTop: "spacing1",
                fontSize: "body_lg",
              }}
            >
              {description}
            </Typography>
          )}
        </Box>

        {subtitle && (
          <Typography
            customisation={{
              fontSize: "body_lg",
              fontWeight: "medium",
              color: "accent_fg_1",
            }}
          >
            {subtitle}
          </Typography>
        )}
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
