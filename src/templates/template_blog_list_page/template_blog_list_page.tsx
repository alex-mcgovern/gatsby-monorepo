import React from "react";
import { graphql } from "gatsby";
import Box from "../../components/atoms/box/box";
import Typography from "../../components/atoms/typography/typography";
import BlogCategoriesList from "../../components/molecules/blog/blog_categories_list/blog_categories_list";
import SectionBlogPostList from "../../components/molecules/blog/section_blog_articles_list/section_blog_articles_list";
import Pagination from "../../components/molecules/pagination/pagination";
import Layout from "../../components/organisms/layout/layout";

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
  const { currentPage, pageCount, allCategories } = pageContext;

  const siteTitle = data.site.siteMetadata?.title || `Title`;

  console.log("debug categories", allCategories);

  const {
    allMarkdownRemark: { nodes: posts },
  } = data;

  return (
    <Layout title={siteTitle}>
      <Box maxWidth="gridWidth" marginX="auto">
        <Box as="section" marginY="spacing10" dataSal="slide-up">
          <Typography as="h1" fontSize="h2">
            Alex's blog
          </Typography>

          <Typography as="p" fontSize="body_lg">
            My blog acts as a sort of "experience journal" from my journey
            through the world of engineering and product. My hope is that by
            writing I will a: compound my knowledge and learnings and b: perhaps
            educate or inspire others, and offer some shortcuts to level up
            their frontend craft.
          </Typography>
          <BlogCategoriesList categories={allCategories} />
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
