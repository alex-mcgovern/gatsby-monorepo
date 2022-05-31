import React from "react";
import { ImageDataLike } from "gatsby-plugin-image";
import ResponsiveGrid from "../../../atoms/responsive_grid/responsive_grid";
import InstagramPostItem from "../instagram_post_item/instagram_post_item";

interface InstagramPostListProps {
  images: {
    localImage: ImageDataLike;
    permalink: string;
    caption: string;
  }[];
}

export default function InstagramPostList({ images }: InstagramPostListProps) {
  if (images.length > 0) {
    return (
      <ResponsiveGrid split={3}>
        {images?.length > 0 &&
          images.map((wrappedImage) => {
            return <InstagramPostItem wrappedImage={wrappedImage} />;
          })}
      </ResponsiveGrid>
    );
  }
  return null;
}
