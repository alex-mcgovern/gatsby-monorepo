import * as React from "react";
import { graphql } from "gatsby";
import Button from "../components/atoms/button/button/button";
import ButtonWrapper from "../components/atoms/button/button_wrapper/button_wrapper";
import Bio from "../components/bio/bio";
import SectionBlogPostList from "../components/blog/section_blog_articles_list/section_blog_articles_list";
import InnerWrapper from "../components/inner_wrapper/inner_wrapper";
import InstaGridSmall from "../components/insta_grid/insta_grid_small/insta_grid_small";
import Layout from "../components/layout/layout";
import ReadingList from "../components/reading_list/reading_list_kanban/reading_list_kanban";
import SectionContent from "../components/section/section_content/section_content";
import SectionOuter from "../components/section/section_outer/section_outer";
import Seo from "../components/seo";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const bio = data.bio.nodes[0].excerpt;
  const posts = data.allMarkdownRemark.nodes;
  const images = data.allInstagramContent.nodes;

  console.log(data);

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />

      <InnerWrapper>
        <Bio bio={bio} />
        <SectionOuter>
          <SectionContent hasArrowsBottom hasArrowsTop hasOutline hasPadding>
            <h5>BLOG</h5>
            <h3>I'm trying to write more often...</h3>
            <SectionBlogPostList posts={posts} />
            <ButtonWrapper isCentered>
              <Button
                size="lg"
                to="/blog"
                title="Explore 11 more blog articles"
              />
            </ButtonWrapper>
          </SectionContent>
        </SectionOuter>
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
    bio: allMarkdownRemark(
      limit: 1
      filter: {frontmatter: {isBio: {eq: true}}}

    ) {
      nodes {
        excerpt(pruneLength: 650, format: HTML, truncate: true)
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
