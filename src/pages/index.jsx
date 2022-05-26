import * as React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Button from "../components/atoms/button/button/button.tsx";
import ButtonWrapper from "../components/atoms/button/button_wrapper/button_wrapper.tsx";
import Layout from "../components/layout/layout/layout.tsx";
import LayoutMaxWidthContainer from "../components/layout/layout_max_width_container/layout_max_width_container";
import LayoutSectionInner from "../components/layout/layout_section_inner/layout_section_inner";
import LayoutSectionOuter from "../components/layout/layout_section_outer/layout_section_outer";
import SectionBlogPostList from "../components/molecules/blog/section_blog_articles_list/section_blog_articles_list";
import Bio from "../components/molecules/header/bio/bio.tsx";
import InstagramPostList from "../components/molecules/insta_grid/instagram_post_list/instagram_post_list.tsx";
import ReadingList from "../components/molecules/reading_list/reading_list_kanban/reading_list_kanban";
import Seo from "../components/seo";

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const bio = data.bio.nodes[0].excerpt;
  const posts = data.allMarkdownRemark.nodes;
  const images = data.allInstagramContent.nodes;

  return (
    <Layout title={siteTitle}>
      <Seo title="All posts" />

      <LayoutMaxWidthContainer>
        <Bio bio={bio} />
        <LayoutSectionOuter>
          <LayoutSectionInner
            hasArrowsBottom
            hasArrowsTop
            hasOutline
            hasPadding
          >
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
          </LayoutSectionInner>
        </LayoutSectionOuter>
        <InstagramPostList images={images} />
        <ReadingList />
      </LayoutMaxWidthContainer>
    </Layout>
  );
};

BlogIndex.propTypes = {
  data: PropTypes.shape({
    allInstagramContent: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    allMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    bio: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          excerpt: PropTypes.shape({}),
        })
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
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
