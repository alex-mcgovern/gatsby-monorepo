import React from "react";
import { ImageDataLike } from "gatsby-plugin-image";
import { BOX_PROPS_CONTAINED } from "../../../../utils/shared_props/box_props";
import { Box, Button } from "../../../atoms";
import InstagramPostItem from "../../../molecules/instagram_post_item/instagram_post_item";

interface ISectionHomepageInstagram {
  images: {
    localImage: ImageDataLike;
    permalink: string;
    caption: string;
  }[];
}

export default function SectionHomepageInstagram({
  images,
}: ISectionHomepageInstagram) {
  return (
    <Box {...BOX_PROPS_CONTAINED}>
      <h3>I've also been known to dabble in design, painting and 3D...</h3>
      <Box marginY="spacing3">
        {images &&
          images.length > 0 &&
          images.map((image) => {
            return <InstagramPostItem wrappedImage={image} />;
          })}
      </Box>
      <Box
        marginY="spacing6"
        display="flex"
        justifyContent="center"
        gap="spacing3"
      >
        <Button size="lg" to="/" title="Check me out on Instagram" />
      </Box>
    </Box>
  );
}

SectionHomepageInstagram.defaultProps = {
  placeholderProp: null,
};
