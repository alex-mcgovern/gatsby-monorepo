import React from "react";
import { graphql } from "gatsby";
import Box from "../../components/atoms/box/box";
import Button from "../../components/atoms/button/button";
import Typography from "../../components/atoms/typography/typography";
import BlogCategoriesList from "../../components/molecules/blog/blog_categories_list/blog_categories_list";
import SectionBlogPostList from "../../components/molecules/blog/section_blog_articles_list/section_blog_articles_list";
import Pagination from "../../components/molecules/pagination/pagination";
import Layout from "../../components/organisms/global_layout/global_layout";
import { BOX_PROPS_CONTAINED } from "../../utils/shared_props/box_props";

const PAGINATION_BASE_PATH = "blog";

interface TemplateBlogListCategoryPageProps {
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
    currentCategoryTitle: string;
    allCategories: IBlogCategory[];
    currentPage?: number;
    languageISO?: string;
    pageCount?: number;
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
    <Layout title={siteTitle}>
      <Box {...BOX_PROPS_CONTAINED}>
        <Box as="section" marginY="spacing10">
          <Button
            appearance="tertiary"
            iconLeading="arrow-left"
            size="lg"
            title="Back to blog"
            to="/blog"
          />
          <Typography as="h1" fontSize="h2">
            Blog / {currentCategoryTitle}
          </Typography>

          <BlogCategoriesList
            categories={allCategories}
            currentCategoryTitle={currentCategoryTitle}
          />

          <SectionBlogPostList posts={posts} />
        </Box>

        {pageCount && pageCount > 1 && (
          <Pagination
            basePath={PAGINATION_BASE_PATH}
            currentPage={currentPage}
            pageCount={pageCount}
          />
        )}
      </Box>
    </Layout>
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
  }
`;
