import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/organisms/global_layout/global_layout";
import SectionDesignSystemFeatures from "../../../components/sections/design_system/section_design_system_features/section_design_system_features";
import SectionDesignSystemHero from "../../../components/sections/design_system/section_design_system_hero/section_design_system_hero";
import Seo from "../../../components/seo";

interface BlogIndexProps {
  data: {
    site?: {
      siteMetadata?: {
        title?: string;
      };
    };
  };
}

const BlogIndex = ({ data }: BlogIndexProps) => {
  const { site } = data;
  const siteTitle = site?.siteMetadata?.title || "Title";

  return (
    <Layout title={siteTitle}>
      <Seo title="All posts" />
      <SectionDesignSystemHero />
      <SectionDesignSystemFeatures />
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
    bio: allMarkdownRemark(
      limit: 1
      filter: {frontmatter: {isBio: {eq: true}}}

    ) {
      nodes {
        excerptAst(truncate: true, pruneLength: 120)
      }
    }
    allMarkdownRemark(
      limit: 3
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

    allInstagramContent(limit: 3) {
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
