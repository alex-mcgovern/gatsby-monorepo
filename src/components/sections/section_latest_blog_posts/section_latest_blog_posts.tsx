import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
import { BoxNew } from "../../atoms/box_new/box_new";
import { Button } from "../../atoms/button/button";
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
          limit: 4
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
      <BoxNew marginY="spacing5">
        {/* —————————————————————————————————————————————
         *      BLOG SECTION HEADER
         * ——————————————————————————————————————————————— */}

        <BoxNew
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <BoxNew as="h3">Stuff I wrote</BoxNew>
          <Button
            variant={{
              size: "lg",
              appearance: "tertiary",
            }}
            iconTrailing="arrow-right"
            to="/blog"
            title={buttonTitle}
          />
        </BoxNew>

        {/* —————————————————————————————————————————————
         *      BLOG POST GRID
         * ——————————————————————————————————————————————— */}

        <BoxNew
          as="section"
          display="grid"
          gap="spacing2"
          gridTemplateColumns={{ desktop: "4x", mobile: "1x" }}
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
        </BoxNew>

        {/* —————————————————————————————————————————————
         *      "EXPLORE ALL POSTS" CTA SECTION
         * ——————————————————————————————————————————————— */}
        <BoxNew
          marginY="spacing3"
          display="flex"
          justifyContent="center"
          gap="spacing2"
        />
      </BoxNew>
    );
  }
  return null;
};
