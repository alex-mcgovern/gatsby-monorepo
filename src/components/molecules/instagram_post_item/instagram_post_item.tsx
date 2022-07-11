import React from "react";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import * as styles from "./instagram_post_item.css";

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
      <a className={styles.instagramPostLink} href={wrappedImage.permalink}>
        <GatsbyImage
          className={styles.instagramPostImage}
          objectFit="cover"
          image={image}
          alt={wrappedImage.caption}
        />
        <div className={styles.instagramPostOverlay}>
          {wrappedImage.caption}
        </div>
      </a>
    );
  }
  return null;
}
