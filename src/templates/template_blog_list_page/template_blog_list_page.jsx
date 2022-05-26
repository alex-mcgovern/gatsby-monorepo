import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../../components/layout/layout/layout.tsx";
import LayoutMaxWidthContainer from "../../components/layout/layout_max_width_container/layout_max_width_container";
import LayoutSectionOuter from "../../components/layout/layout_section_outer/layout_section_outer";
import SectionBlogPostList from "../../components/molecules/blog/section_blog_articles_list/section_blog_articles_list";
import Pagination from "../../components/molecules/pokedex/pagination/pagination";

const PAGINATION_BASE_PATH = "blog";

export default function TemplateBlogListPage({ data, pageContext }) {
  const { currentPage, pageCount } = pageContext;

  const siteTitle = data.site.siteMetadata?.title || `Title`;

  const {
    allMarkdownRemark: { nodes: posts },
  } = data;

  return (
    <Layout title={siteTitle}>
      <LayoutMaxWidthContainer>
        <LayoutSectionOuter>
          <SectionBlogPostList posts={posts} />
        </LayoutSectionOuter>
        <LayoutSectionOuter>
          <Pagination
            basePath={PAGINATION_BASE_PATH}
            currentPage={currentPage}
            pageCount={pageCount}
          />
        </LayoutSectionOuter>
      </LayoutMaxWidthContainer>
    </Layout>
  );
}

TemplateBlogListPage.propTypes = {
  data: PropTypes.shape({
    allLanguagesISO: PropTypes.arrayOf(
      PropTypes.shape({
        distinct: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    allMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          posts: PropTypes.arrayOf(PropTypes.shape({})),
        })
      ),
    }),
    allPokemon: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    languageISO: PropTypes.string,
    pageCount: PropTypes.number,
  }).isRequired,
};

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
