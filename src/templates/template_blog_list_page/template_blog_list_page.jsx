import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import SectionBlogPostList from "../../components/blog/section_blog_articles_list/section_blog_articles_list";
import InnerWrapper from "../../components/inner_wrapper/inner_wrapper";
import Layout from "../../components/layout/layout";
import Pagination from "../../components/molecules/pokedex/pagination/pagination";
import SectionOuter from "../../components/section/section_outer/section_outer";
import SubNav from "../../components/sub_nav/sub_nav";

const PAGINATION_BASE_PATH = "blog";

export default function TemplateBlogListPage({ data, pageContext }) {
  const { currentPage, pageCount } = pageContext;

  const siteTitle = data.site.siteMetadata?.title || `Title`;

  const {
    allMarkdownRemark: { nodes: posts },
  } = data;

  //   const searchIndex = getPokedexSearchIndex({ allPokemon, languageISO });

  //   const languageIndexBasePath = createUrlPathFromArray([
  //     "pokedex",
  //     currentPage,
  //   ]);
  //   const languageIndex = getLanguageSelectIndex({
  //     allLanguagesISO,
  //     basePath: languageIndexBasePath,
  //   });

  return (
    <Layout title={siteTitle}>
      <InnerWrapper>
        <SubNav title="Multilingual Pokedex" />

        <SectionOuter>
          {/* <PokedexNav
            searchIndex={searchIndex}
            languageISO={languageISO}
            languageIndex={languageIndex}
            placeholder="Search for a pokemon"
            isTopLevel
          /> */}
          <SectionBlogPostList posts={posts} />
        </SectionOuter>
        <SectionOuter>
          <Pagination
            basePath={PAGINATION_BASE_PATH}
            currentPage={currentPage}
            pageCount={pageCount}
          />
        </SectionOuter>
      </InnerWrapper>
    </Layout>
  );
}

TemplateBlogListPage.propTypes = {
  data: PropTypes.shape({
    allPokemon: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
    allLanguagesISO: PropTypes.arrayOf(
      PropTypes.shape({
        distinct: PropTypes.arrayOf(PropTypes.string),
      })
    ),
  }).isRequired,
  pageContext: PropTypes.shape({
    languageISO: PropTypes.string,
    currentPage: PropTypes.number,
    pageCount: PropTypes.number,
  }),
};

TemplateBlogListPage.defaultProps = {
  pageContext: {
    subNavData: [],
  },
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
