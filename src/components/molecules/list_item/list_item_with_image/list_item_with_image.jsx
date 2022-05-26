import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import * as classes from "./list_item_with_image.module.scss";

export default function ListItemWithImage({
  title,
  subtitle,
  description,
  link,
  image,
  variant,
}) {
  const imageData = getImage(image);

  const listItemClassNames = classNames(classes.list_item_link, {
    [classes.variant_wide]: variant === "wide",
    [classes.variant_square]: variant === "square",
    [classes.variant_tall]: variant === "square",
  });

  return (
    <Link to={link} className={listItemClassNames}>
      <div className={classes.image_wrapper}>
        <GatsbyImage className={classes.image} image={imageData} />
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

ListItemWithImage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.shape({}),
  variant: PropTypes.oneOf(["square", "wide", "tall"]),
};

ListItemWithImage.defaultProps = {
  title: "",
  subtitle: "",
  description: "",
  link: "",
  image: {},
  variant: "wide",
};
