import * as React from "react";
import { graphql } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
import { createUrlPathFromArray } from "../../utils/create_url_path_from_array";
import AlternatingLayout from "../components/atoms/alternating_layout/alternating_layout";
import Button from "../components/atoms/button/button/button";
import ResponsiveGrid from "../components/atoms/responsive_grid/responsive_grid";
import Box from "../components/layout/box/box";
import Layout from "../components/layout/layout/layout";
import SectionBlogPostList from "../components/molecules/blog/section_blog_articles_list/section_blog_articles_list";
import Bio from "../components/molecules/header/bio/bio";
import InstagramPostList from "../components/molecules/insta_grid/instagram_post_list/instagram_post_list";
import Seo from "../components/seo";

const POKEDEX_LINK = createUrlPathFromArray(["en", "pokedex", "1"]);

const DROPDOWN_INDEX = [{ value: "Multilingual Pokedex", link: POKEDEX_LINK }];

interface BlogIndexProps {
  data: {
    allInstagramContent?: {
      nodes?: {
        localImage: ImageDataLike;
        permalink: string;
        caption: string;
      }[];
    };
    allMarkdownRemark?: {
      nodes: {
        fields: {
          slug: string;
        };
        excerpt: string;
        frontmatter: {
          title: string;
          date: string;
          subtitle: string;
          slug: string;
          description?: string;
          cover: ImageDataLike;
        };
      }[];
    };
    bio?: {
      nodes: {
        excerpt?: string;
      }[];
    };
    site?: {
      siteMetadata?: {
        title?: string;
      };
    };
  };
}

const BlogIndex = ({ data }: BlogIndexProps) => {
  const { site, bio, allMarkdownRemark, allInstagramContent } = data;
  const siteTitle = site?.siteMetadata?.title || "Title";
  const bioExcerpt = bio?.nodes[0].excerpt;
  const posts = allMarkdownRemark?.nodes;
  const images = allInstagramContent?.nodes;

  return (
    <Layout title={siteTitle}>
      <Seo title="All posts" />

      {bioExcerpt && <Bio bio={bioExcerpt} />}

      <Box as="section" margin="md">
        <AlternatingLayout ratio="7_5">
          <Box outline="dashed" background="crosshatch" padding="lg"></Box>
          <Box outline="dashed" padding="lg" isVerticallyCentered>
            <h3>I love building for performance.</h3>
            <p>
              I ❤️ React, TypeScript, GatsbyJS, SASS, React Testing Library and
              Cypress.
            </p>
          </Box>
        </AlternatingLayout>
      </Box>

      {/* ——————————————————————————————————————————————————————————————————————————————
        //      BLOG SECTION
        // —————————————————————————————————————————————————————————————————————————————— */}
      <Box as="section" outline="dashed" padding="lg" margin="lg">
        <h3>I am by no means an expert...</h3>
        <p>
          ...but I have a blog. Just a few things I've picked up along the
          way...
        </p>
        <Box margin="sm">
          <SectionBlogPostList posts={posts} />
        </Box>
        <Box
          margin="sm"
          display="flex"
          justifyContent="center"
          gap="small"
          outline="dashed"
        >
          <Button size="md" to="/blog" title="Explore 11 more blog articles" />
        </Box>
      </Box>

      {/* ——————————————————————————————————————————————————————————————————————————————
        //      INSTAGRAM SECTION
        // —————————————————————————————————————————————————————————————————————————————— */}
      <Box as="section" outline="dashed" padding="lg" margin="lg">
        <h3>I've also been known to dabble in design, painting and 3D...</h3>
        <Box margin="sm">
          {images && images.length > 0 && <InstagramPostList images={images} />}
        </Box>
        <Box
          margin="sm"
          display="flex"
          justifyContent="center"
          gap="small"
          outline="dashed"
        >
          <Button size="lg" to="/" title="Check me out on Instagram" />
        </Box>
      </Box>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    bio: allMarkdownRemark(
      limit: 1
      filter: {frontmatter: {isBio: {eq: true}}}

    ) {
      nodes {
        excerpt(pruneLength: 150, format: HTML, truncate: true)
      }
    }
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {fileAbsolutePath: {regex: "/(\/content\/blog)/.*\\.md$/"}}

    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          cover {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
          category
          description
        }
      }
    }

    allInstagramContent(limit: 3) {
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
`;
