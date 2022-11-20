import React from "react";
import type { GetSprinklesArgs } from "@alexmcgovern/boondoggle.design";
import { Box, Button, ListItem } from "@alexmcgovern/boondoggle.design";
import { checkArrayHasLength } from "@alexmcgovern/utils";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link, graphql, useStaticQuery } from "gatsby";
import type { ImageDataLike } from "gatsby-plugin-image";

interface MarkdownRemarkQueryResultShape {
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

const GRID_LAYOUT: GetSprinklesArgs["gridTemplateColumns"] = {
  desktop: "4x",
  tablet: "2x",
  mobile: "1x",
};

export function HomeLatestBlogPosts() {
  /** Grab latest posts via static query */
  const { latestBlogPosts, totalBlogPosts }: MarkdownRemarkQueryResultShape =
    useStaticQuery(
      graphql`
        query {
          latestBlogPosts: allMarkdownRemark(
            limit: 4
            sort: { frontmatter: { date: DESC } }
          ) {
            nodes {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
              }
            }
          }
          totalBlogPosts: allMarkdownRemark {
            totalCount
          }
        }
      `
    );

  const posts = latestBlogPosts?.nodes;
  const { totalCount } = totalBlogPosts;
  const buttonTitle = `View all ${totalCount} blog posts`;

  if (posts && posts?.length > 0) {
    return (
      <Box marginY="spacing5">
        {/* —————————————————————————————————————————————
         * BLOG SECTION HEADER
         * ——————————————————————————————————————————————— */}

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box as="h3">Here's some stuff I wrote</Box>
          <Button
            color="neutral"
            size="lg"
            appearance="tertiary"
            as={Link}
            iconTrailing={faArrowRight}
            to="/blog"
          >
            {buttonTitle}
          </Button>
        </Box>

        {/* —————————————————————————————————————————————
         * BLOG POST GRID
         * ——————————————————————————————————————————————— */}

        <Box
          as="section"
          display="grid"
          gap="spacing2"
          gridTemplateColumns={GRID_LAYOUT}
        >
          {checkArrayHasLength(posts) &&
            posts.map((post) => {
              return (
                <ListItem
                  aspectRatio="wide"
                  title={post.frontmatter.title || post.fields.slug}
                  subtitle={post.frontmatter.date}
                  description={post.frontmatter.description || post.excerpt}
                  link={`blog${post.fields.slug}`}
                  // image={post.frontmatter.cover}
                />
              );
            })}
        </Box>
      </Box>
    );
  }
  return null;
}
