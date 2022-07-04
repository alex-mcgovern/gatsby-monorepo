import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
import {
  BOX_CUSTOMISATION_MAX_WIDTH_FULL,
  BOX_CUSTOMISATION_SECTION_SPACING,
} from "../../../utils/shared_props/box_props";
import { Box } from "../../atoms/box/box";
import { Button } from "../../atoms/button/button";
import { Typography } from "../../atoms/typography/typography";
import { ListItem } from "../../molecules/list_item/list_item";

interface ISectionLatestBlogPostProps {}

interface IMarkdownRemarkStaticQueryResult {
  latestBlogPosts?: {
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
  totalBlogPosts: {
    totalCount: number;
  };
}

export const SectionLatestBlogPosts = ({}: ISectionLatestBlogPostProps) => {
  /** Grab latest posts via static query */
  const { latestBlogPosts, totalBlogPosts }: IMarkdownRemarkStaticQueryResult =
    useStaticQuery(
      graphql`
      query {
        latestBlogPosts: allMarkdownRemark(
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
              category
              description
            }
          }
        }
        totalBlogPosts: allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/(\/content\/blog)/.*\\.md$/"}}
        ) {
          totalCount
        }
      }
    `
    );

  const posts = latestBlogPosts?.nodes;
  const blogPostCount = totalBlogPosts.totalCount;
  const buttonTitle = `View all ${blogPostCount} blog posts`;

  if (posts && posts?.length > 0) {
    return (
      <Box
        customisation={{
          ...BOX_CUSTOMISATION_SECTION_SPACING,
        }}
      >
        {/* —————————————————————————————————————————————
         *      BLOG SECTION HEADER
         * ——————————————————————————————————————————————— */}

        <Box
          customisation={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography as="h3">Featured posts from my blog</Typography>
          <Button
            variant={{
              size: "lg",
              appearance: "tertiary",
            }}
            iconTrailing="arrow-right"
            to="/blog"
            title={buttonTitle}
          />
        </Box>

        {/* —————————————————————————————————————————————
         *      BLOG POST GRID
         * ——————————————————————————————————————————————— */}

        <Box
          as="section"
          customisation={{
            marginY: "spacing3",
            display: "grid",
            gap: "spacing3",
            gridTemplateColumns: { desktop: "3x", mobile: "1x" },
          }}
        >
          {posts?.length > 0 &&
            posts.map((post) => {
              return (
                <ListItem
                  aspectRatio="wide"
                  title={post.frontmatter.title || post.fields.slug}
                  subtitle={post.frontmatter.date}
                  description={post.frontmatter.description || post.excerpt}
                  link={post.fields.slug}
                  // image={post.frontmatter.cover}
                />
              );
            })}
        </Box>

        {/* —————————————————————————————————————————————
         *      "EXPLORE ALL POSTS" CTA SECTION
         * ——————————————————————————————————————————————— */}
        <Box
          customisation={{
            marginY: "spacing3",
            display: "flex",
            justifyContent: "center",
            gap: "spacing3",
          }}
        />
      </Box>
    );
  }
  return null;
};
