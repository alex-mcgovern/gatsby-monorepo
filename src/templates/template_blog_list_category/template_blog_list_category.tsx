import React from "react";
import { graphql } from "gatsby";
import BlogListLayout from "../../components/organisms/blog_list_page/blog_list_layout";

const PAGINATION_BASE_PATH = "blog";

interface TemplateBlogListCategoryPageProps {
  data: {
    allMarkdownRemark: {
      nodes: IMarkdownRemarkBlogPost[];
    };
    site: {
      siteMetadata?: {
        title?: string;
      };
    };
  };
  pageContext: {
    currentCategoryTitle: string;
    allCategories: IBlogCategory[];
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
      currentCategoryTitle={currentCategoryTitle}
    />
  );
}

export const query = graphql`
  query TemplateBlogListCategoryPageQuery($itemsPerPage: Int, $itemsToSkip: Int, $currentCategoryTitle: String) {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(
      limit: $itemsPerPage
      skip: $itemsToSkip
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: {regex: "/(\/content\/blog)/.*\\.md$/"}
        frontmatter: {categories: {in: [$currentCategoryTitle]}}
      }
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
  }
`;
