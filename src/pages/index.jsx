import * as React from "react";
import { graphql } from "gatsby";
import Bio from "../components/bio/bio";
import SectionBlogPostList from "../components/blog/section_blog_articles_list/section_blog_articles_list";
import Header from "../components/header/header";
import InnerWrapper from "../components/inner_wrapper/inner_wrapper";
import InstaGridSmall from "../components/insta_grid/insta_grid_small/insta_grid_small";
import Layout from "../components/layout/layout";
import ReadingList from "../components/reading_list/reading_list_kanban/reading_list_kanban";
import Seo from "../components/seo";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;
  const images = data.allInstagramContent.nodes;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />

      <InnerWrapper>
        <Header isRootPath />
        <Bio />
        <SectionBlogPostList posts={posts} />
        <InstaGridSmall images={images} />
        <ReadingList />
      </InnerWrapper>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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

    allInstagramContent(limit: 4) {
      nodes {
        id
        permalink
        caption
        localImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
