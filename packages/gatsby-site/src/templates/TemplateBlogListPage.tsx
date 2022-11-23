import React from "react";
import { graphql } from "gatsby";
import { BlogListLayout } from "../components/BlogListLayout";
import type { BlogCategoryShape, MarkdownRemarkBlogPostShape } from "../types";

interface TemplateBlogListPageProps {
  data: {
    allMarkdownRemark: {
      nodes: MarkdownRemarkBlogPostShape[];
    };
    site: {
      siteMetadata?: {
        title?: string;
      };
    };
  };
  pageContext: {
    allCategories: Array<BlogCategoryShape>;
    currentPage: number;
    pageCount: number;
  };
}

export default function TemplateBlogListPage({
  data,
  pageContext,
}: TemplateBlogListPageProps) {
  const { currentPage, pageCount, allCategories } = pageContext;

  const {
    allMarkdownRemark: { nodes: posts },
  } = data;

  return (
    <BlogListLayout
      currentPage={currentPage}
      pageCount={pageCount}
      posts={posts}
      allCategories={allCategories}
    />
  );
}

export const query = graphql`
  query TemplateBlogListPageQuery($itemsPerPage: Int, $itemsToSkip: Int) {
    allMarkdownRemark(
      limit: $itemsPerPage
      skip: $itemsToSkip
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
  }
`;
