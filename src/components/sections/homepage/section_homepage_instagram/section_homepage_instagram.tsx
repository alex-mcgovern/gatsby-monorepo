import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
import { BOX_CUSTOMISATION_MAX_WIDTH_FULL } from "../../../../utils/shared_props/box_props";
import { Box } from "../../../atoms/box/box";
import { Button } from "../../../atoms/button/button";
import { Typography } from "../../../atoms/typography/typography";
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
      }}
    >
      {/* —————————————————————————————————————————————
       *      SECTION INNER CONTENT
       * ——————————————————————————————————————————————— */}
      <Box customisation={BOX_CUSTOMISATION_MAX_WIDTH_FULL}>
        {/* —————————————————————
         *      SECTION HEADER
         * ——————————————————————— */}
        <Typography
          variant={{
            color: "accent_fg_1",
          }}
          customisation={{
            fontSize: "h6",
            fontWeight: "medium",
          }}
          // marginBottom="spacing4"
        >
          When I'm not coding...
        </Typography>

        <Typography
          as="h3"
          variant={{
            color: "accent_fg_2",
          }}
          customisation={{
            fontSize: "h3",
            fontWeight: "bold",
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
            gap: "spacing2",
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
            marginY: "spacing4",
            display: "flex",
            justifyContent: "center",
            gap: "spacing2",
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
    </Box>
  );
}

SectionHomepageInstagram.defaultProps = {
  placeholderProp: null,
};
