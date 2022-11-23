import React from "react";
import { graphql } from "gatsby";
import { BlogListLayout } from "../components/BlogListLayout";
import type { BlogCategoryShape, MarkdownRemarkBlogPostShape } from "../types";

interface TemplateBlogListCategoryPageProps {
  data: {
    allMarkdownRemark: {
      nodes: MarkdownRemarkBlogPostShape[];
    };
  };
  pageContext: {
    currentCategoryTitle: string;
    allCategories: Array<BlogCategoryShape>;
    currentPage: number;
    pageCount: number;
  };
}

export default function TemplateBlogListCategoryPage({
  data,
  pageContext,
}: TemplateBlogListCategoryPageProps) {
  const { currentPage, pageCount, allCategories, currentCategoryTitle } =
    pageContext;

  const {
    allMarkdownRemark: { nodes: posts },
  } = data;

  return (
    <BlogListLayout
      currentPage={currentPage}
      pageCount={pageCount}
      posts={posts}
      allCategories={allCategories}
      currentCategoryTitle={currentCategoryTitle}
    />
  );
}

export const query = graphql`
  query TemplateBlogListCategoryPageQuery(
    $itemsPerPage: Int
    $itemsToSkip: Int
    $currentCategoryTitle: String
  ) {
    allMarkdownRemark(
      limit: $itemsPerPage
      skip: $itemsToSkip
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { categories: { in: [$currentCategoryTitle] } } }
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
