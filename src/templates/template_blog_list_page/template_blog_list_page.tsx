import React from "react";
import { graphql } from "gatsby";
import Box from "../../components/layout/box/box";
import Layout from "../../components/layout/layout/layout";
import LayoutMaxWidthContainer from "../../components/layout/layout_max_width_container/layout_max_width_container";
import SectionBlogPostList from "../../components/molecules/blog/section_blog_articles_list/section_blog_articles_list";
import Pagination from "../../components/molecules/pokedex/pagination/pagination";

const PAGINATION_BASE_PATH = "blog";

interface TemplateBlogListPageProps {
  data: {
    allLanguagesISO: {
      distinct?: string[];
    }[];
    allMarkdownRemark: {
      nodes?: {
        posts?: {}[];
      }[];
    };
    allPokemon: {
      nodes?: {}[];
    };
    site: {
      siteMetadata?: {
        title?: string;
      };
    };
  };
  pageContext: {
    currentPage?: number;
    languageISO?: string;
    pageCount?: number;
  };
}

export default function TemplateBlogListPage({
  data,
  pageContext,
}: TemplateBlogListPageProps) {
  const { currentPage, pageCount } = pageContext;

  const siteTitle = data.site.siteMetadata?.title || `Title`;

  const {
    allMarkdownRemark: { nodes: posts },
  } = data;

  return (
    <Layout title={siteTitle}>
      <LayoutMaxWidthContainer>
        <Box as="section" marginY="spacing10">
          <SectionBlogPostList posts={posts} />
        </Box>

        {pageCount && pageCount > 1 && (
          <Pagination
            basePath={PAGINATION_BASE_PATH}
            currentPage={currentPage}
            pageCount={pageCount}
          />
        )}
      </LayoutMaxWidthContainer>
    </Layout>
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
  }
`;
