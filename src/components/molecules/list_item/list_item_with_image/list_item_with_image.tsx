import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import * as classes from "./list_item_with_image.module.scss";

interface ListItemWithImageProps {
  title: string;
  subtitle?: string;
  description?: string;
  link: string;
  image: ImageDataLike;
  variant?: "square" | "wide" | "tall";
}

export default function ListItemWithImage({
  title,
  subtitle,
  description,
  link,
  image,
  variant,
}: ListItemWithImageProps) {
  const imageData = getImage(image);

  const listItemClassNames = classNames(classes.list_item_link, {
    [classes.variant_wide]: variant === "wide",
    [classes.variant_square]: variant === "square",
    [classes.variant_tall]: variant === "square",
  });

  return (
    <Link to={link} className={listItemClassNames}>
      <div className={classes.image_wrapper}>
        {imageData && (
          <GatsbyImage
            alt={title}
            className={classes.image}
            image={imageData}
          />
        )}
      </div>
      {title && (
        <header>
          <h4 className={classes.list_item_title}>{title}</h4>

          {subtitle && <small className={classes.subtitle}>{subtitle}</small>}
        </header>
      )}
      {description && <p>{description}</p>}
    </Link>
  );
}

ListItemWithImage.defaultProps = {
  title: "",
  subtitle: "",
  description: "",
  link: "",
  image: {},
  variant: "wide",
};
