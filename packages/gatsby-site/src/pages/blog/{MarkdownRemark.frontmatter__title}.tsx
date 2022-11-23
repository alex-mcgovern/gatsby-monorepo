import * as React from "react";
import { Box, ListItem } from "@alexmcgovern/boondoggle.design";
import { Link, graphql } from "gatsby";
import type { ImageDataLike } from "gatsby-plugin-image";
import slugify from "slugify";
import { BlogCategoriesList } from "../../components/BlogCategoryTags";
import { RemarkMarkdown } from "../../components/BlogRemarkRenderer";
import type { BlogCategoryShape } from "../../types";

interface PageBlogProps {
  data: {
    markdownRemark: {
      excerpt: string;
      htmlAst: string;
      frontmatter: {
        cover?: ImageDataLike;
        date?: string;
        description?: string;
        title: string;
        categories?: Array<string>;
      };
    };
    next?: {
      fields?: {
        slug?: string;
      };
      frontmatter?: {
        title?: string;
      };
    };
    previous?: {
      fields?: {
        slug?: string;
      };
      frontmatter?: {
        title?: string;
      };
    };
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export default function PageBlog({ data }: PageBlogProps) {
  const { markdownRemark: post, previous, next } = data;
  const {
    frontmatter: { categories },
    htmlAst,
  } = post;

  const categoryLinks: Array<BlogCategoryShape> | undefined = categories?.map(
    (categoryTitle) => {
      const categorySlug = slugify(categoryTitle, {
        lower: true,
        strict: true,
      });
      return {
        categoryTitle,
        categorySlug,
      };
    }
  );

  return (
    <Box marginY="spacing5">
      <Box as="article">
        {/** -----------------------------------------------------------------------------
         * POST HEADER
         * ------------------------------------------------------------------------------- */}
        <Box as="header">
          <Box as="h1">{post.frontmatter.title}</Box>

          <Box as="h2" fontSize="body_lg" fontWeight="normal" marginTop="none">
            {post.frontmatter.description}
          </Box>

          <hr />

          <Box display="flex" alignItems="center" gap="spacing2">
            <Box color="accent_text_lowContrast">{post.frontmatter.date}</Box>
            <BlogCategoriesList categories={categoryLinks} />
          </Box>
        </Box>

        {/** -----------------------------------------------------------------------------
         * POST BODY
         * ------------------------------------------------------------------------------- */}

        <Box as="section" marginY="spacing3">
          <RemarkMarkdown
            fontStyle="body_lg"
            maxWidth="gridSpan8"
            htmlAst={htmlAst}
          />
          <hr />
          <footer />
        </Box>

        <Box
          marginY="spacing3"
          display="flex"
          justifyContent="space-between"
          gap="spacing2"
          as="nav"
        >
          <ListItem
            as={Link}
            description={previous?.frontmatter?.title}
            to={previous?.fields?.slug}
            title="Previous"
            width="100%"
          />
          <ListItem
            as={Link}
            description={next?.frontmatter?.title}
            to={next?.fields?.slug}
            title="Next"
            width="100%"
            textAlign="right"
          />
        </Box>
      </Box>
    </Box>
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      htmlAst
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        categories
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
