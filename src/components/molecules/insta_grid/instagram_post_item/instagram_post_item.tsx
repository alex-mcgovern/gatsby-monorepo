import React from "react";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import { getFunctionalClassNames } from "../../../../styles/functional_classnames.css";
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
  const imageClassNames = getFunctionalClassNames({
    height: "100%",
    padding: "spacing3",

    boxShadow: "shadowDark",
    aspectRatio: "square",
    width: "100%",
    overflow: "hidden",
  });
  if (image) {
    return (
      <a className={styles.instagramPostLink} href={wrappedImage.permalink}>
        <GatsbyImage
          className={imageClassNames}
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
