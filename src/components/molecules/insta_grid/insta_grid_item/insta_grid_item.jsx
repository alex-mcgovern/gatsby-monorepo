import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import * as classes from "./insta_grid_item.module.scss";

export default function InstaGridItem({ wrappedImage }) {
  const image = getImage(wrappedImage.localImage);
  return (
    <a
      className={classes.insta_post_link_wrapper}
      href={wrappedImage.permalink}
    >
      <GatsbyImage className={classes.image} image={image} />
      <div className={classes.caption_overlay}>{wrappedImage.caption}</div>
    </a>
  );
}

InstaGridItem.propTypes = {
  wrappedImage: PropTypes.shape({
    localImage: PropTypes.shape({}),
    permalink: PropTypes.string,
    caption: PropTypes.string,
  }),
};

InstaGridItem.defaultProps = {
  wrappedImage: {
    permalink: null,
    caption: null,
  },
};
