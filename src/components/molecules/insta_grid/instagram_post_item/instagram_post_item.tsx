import React from "react";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import * as classes from "./instagram_post_item.module.scss";

interface InstagramPostItemProps {
  wrappedImage: {
    localImage: ImageDataLike;
    permalink: string;
    caption: string;
  };
}

export default function InstagramPostItem({
  wrappedImage,
}: InstagramPostItemProps) {
  const image = getImage(wrappedImage.localImage);
  if (image) {
    return (
      <a
        className={classes.insta_post_link_wrapper}
        href={wrappedImage.permalink}
      >
        <GatsbyImage
          className={classes.image}
          image={image}
          alt={wrappedImage.caption}
        />
        <div className={classes.caption_overlay}>{wrappedImage.caption}</div>
      </a>
    );
  }
  return null;
}
