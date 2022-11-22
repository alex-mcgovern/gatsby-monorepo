import React from "react";
import { graphql } from "gatsby";
import { BlogListLayout } from "../components/BlogListLayout";

const PAGINATION_BASE_PATH = "blog";

interface TemplateBlogListPageProps {
  data: {
    allMarkdownRemark: {
      nodes?: IMarkdownRemarkBlogPost[];
    };
    site: {
      siteMetadata?: {
        title?: string;
      };
    };
  };
  pageContext: {
    allCategories: IBlogCategory[];
    currentPage: number;
    pageCount: number;
  };
}

export default function TemplateBlogListPage({
  data,
  pageContext,
}: TemplateBlogListPageProps) {
  const { currentPage, pageCount, allCategories } = pageContext;

  const siteTitle = data.site.siteMetadata?.title || `Title`;

  const {
    allMarkdownRemark: { nodes: posts },
  } = data;

  return (
    <BlogListLayout
      currentPage={currentPage}
      pageCount={pageCount}
      posts={posts}
      siteTitle={siteTitle}
      allCategories={allCategories}
    />
  );
}

export const query = graphql`
  query TemplateBlogListPageQuery($itemsPerPage: Int, $itemsToSkip: Int) {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
    limit: $itemsPerPage
    skip: $itemsToSkip
    sort: {frontmatter: {date: DESC}}
    filter: {fileAbsolutePath: {regex: "/(/content/blog)/.*\\.md$/"}}
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
