import React from "react";
import { ImageDataLike } from "gatsby-plugin-image";
import Box from "../../../layout/box/box";
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
      <Box
        as="section"
        display="grid"
        gridTemplateColumns={{ mobile: "1", tablet: "1_1_1" }}
        gap="spacing3"
      >
        {images?.length > 0 &&
          images.map((wrappedImage) => {
            return <InstagramPostItem wrappedImage={wrappedImage} />;
          })}
      </Box>
    );
  }
  return null;
}
