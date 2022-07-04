import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
import { BOX_CUSTOMISATION_MAX_WIDTH_FULL } from "../../../../utils/shared_props/box_props";
import { Box } from "../../../atoms/box/box";
import { Button } from "../../../atoms/button/button";
import { Typography } from "../../../atoms/typography/typography";
import { Wave } from "../../../atoms/wave/wave";
import InstagramPostItem from "../../../molecules/instagram_post_item/instagram_post_item";

interface ISectionHomepageInstagram {}

interface IMarkdownRemarkStaticQueryResult {
  allInstagramContent?: {
    nodes?: {
      localImage: ImageDataLike;
      permalink: string;
      caption: string;
    }[];
  };
}

export default function SectionHomepageInstagram({}: ISectionHomepageInstagram) {
  /** Grab latest posts via static query */
  const { allInstagramContent }: IMarkdownRemarkStaticQueryResult =
    useStaticQuery(
      graphql`
        query {
          allInstagramContent(limit: 4) {
            nodes {
              id
              permalink
              caption
              localImage {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
            }
          }
        }
      `
    );

  const images = allInstagramContent?.nodes;

  return (
    <Box
      as="section"
      customisation={{
        overflow: "hidden",
        backgroundImage: "gradient_secondary",
      }}
    >
      <Wave color="neutral_bg_1" waveVariant="top" />
      {/* —————————————————————————————————————————————
       *      SECTION INNER CONTENT
       * ——————————————————————————————————————————————— */}
      <Box customisation={BOX_CUSTOMISATION_MAX_WIDTH_FULL}>
        {/* —————————————————————
         *      SECTION HEADER
         * ——————————————————————— */}
        <Typography
          customisation={{
            fontSize: "h6",
            fontWeight: "semibold",
            color: "accent_fg_1",
          }}
          // marginBottom="spacing6"
        >
          When I'm not coding...
        </Typography>

        <Typography
          as="h3"
          customisation={{
            fontSize: "h3",
            fontWeight: "bold",
            color: "accent_fg_2",
          }}
        >
          I also love design, illustration, painting, and 3D modelling.
        </Typography>

        {/* —————————————————————
         *      INSTAGRAM POST GRID
         * ——————————————————————— */}

        <Box
          customisation={{
            marginY: "spacing3",
            display: "grid",
            gridTemplateColumns: { desktop: "4x", tablet: "2x", mobile: "1x" },
            gap: "spacing3",
          }}
        >
          {images &&
            images.length > 0 &&
            images.map((image) => {
              return <InstagramPostItem wrappedImage={image} />;
            })}
        </Box>

        {/* —————————————————————
         *      INSTAGRAM CTA SECTION
         * ——————————————————————— */}

        <Box
          customisation={{
            marginY: "spacing6",
            display: "flex",
            justifyContent: "center",
            gap: "spacing3",
          }}
        >
          <Button
            variant={{
              size: "lg",
            }}
            to="/"
            title="Check me out on Instagram"
          />
        </Box>
      </Box>
      <Wave color="neutral_bg_1" waveVariant="bottom" />
    </Box>
  );
}

SectionHomepageInstagram.defaultProps = {
  placeholderProp: null,
};
