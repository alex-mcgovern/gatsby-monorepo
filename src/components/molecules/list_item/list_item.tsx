import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import { getFunctionalClassNames } from "../../../styles/functional_classnames.css";
import { Box, IBoxCustomisation } from "../../atoms/box/box";
import { Typography } from "../../atoms/typography/typography";
import * as styles from "./list_item.css";

interface ListItemProps {
  aspectRatio?: "square" | "wide" | "tall";
  customisation?: IBoxCustomisation;
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
    styles.image,
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
          padding: "spacing3",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "spacing3",
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
                marginTop: "spacing2",
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
