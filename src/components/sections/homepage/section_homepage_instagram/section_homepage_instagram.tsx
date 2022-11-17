import React from "react";
import { ImageDataLike } from "gatsby-plugin-image";
import { BoxNew } from "../../../atoms/box_new/box_new";
import { Button } from "../../../atoms/button/button";
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
  // const { allInstagramContent }: IMarkdownRemarkStaticQueryResult =
  //   useStaticQuery(
  //     graphql`
  //       query {
  //         allInstagramContent(limit: 4) {
  //           nodes {
  //             id
  //             permalink
  //             caption
  //             localImage {
  //               childImageSharp {
  //                 gatsbyImageData(layout: CONSTRAINED)
  //               }
  //             }
  //           }
  //         }
  //       }
  //     `
  //   );

  // const images = allInstagramContent?.nodes;

  const images = [];

  return (
    <BoxNew as="section" overflow="hidden">
      {/* —————————————————————————————————————————————
       *      SECTION INNER CONTENT
       * ——————————————————————————————————————————————— */}
      <BoxNew>
        {/* —————————————————————
         *      SECTION HEADER
         * ——————————————————————— */}
        <BoxNew
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
        </BoxNew>

        <BoxNew
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
        </BoxNew>

        {/* —————————————————————
         *      INSTAGRAM POST GRID
         * ——————————————————————— */}

        <BoxNew
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
        </BoxNew>

        {/* —————————————————————
         *      INSTAGRAM CTA SECTION
         * ——————————————————————— */}

        <BoxNew
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
        </BoxNew>
      </BoxNew>
    </BoxNew>
  );
}

SectionHomepageInstagram.defaultProps = {
  placeholderProp: null,
};
