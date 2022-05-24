import React from "react";
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
}) {
  const imageData = getImage(image);

  return (
    <Link to={link} className={classes.list_item_link}>
      <div className={classes.list_item_image_wrapper}>
        <GatsbyImage className={classes.list_item_image} image={imageData} />
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
  post: PropTypes.shape({
    frontmatter: {
      date: PropTypes.string,
      description: PropTypes.string,
      excerpt: PropTypes.string,
      cover: PropTypes.shape({}),
    },
    fields: {
      slug: PropTypes.string,
    },
  }),
};

ListItemWithImage.defaultProps = {
  post: null,
};
