import * as React from "react";
import { graphql } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
import Button from "../components/atoms/button/button/button";
import ButtonWrapper from "../components/atoms/button/button_wrapper/button_wrapper";
import Layout from "../components/layout/layout/layout";
import LayoutMaxWidthContainer from "../components/layout/layout_max_width_container/layout_max_width_container";
import LayoutSectionInner from "../components/layout/layout_section_inner/layout_section_inner";
import LayoutSectionOuter from "../components/layout/layout_section_outer/layout_section_outer";
import SectionBlogPostList from "../components/molecules/blog/section_blog_articles_list/section_blog_articles_list";
import Bio from "../components/molecules/header/bio/bio";
import InstagramPostList from "../components/molecules/insta_grid/instagram_post_list/instagram_post_list";
import ReadingList from "../components/molecules/reading_list/reading_list_kanban/reading_list_kanban";
import Seo from "../components/seo";

interface BlogIndexProps {
  data: {
    allInstagramContent?: {
      nodes?: {
        localImage: ImageDataLike;
        permalink: string;
        caption: string;
      }[];
    };
    allMarkdownRemark?: {
      nodes?: {}[];
    };
    bio?: {
      nodes: {
        excerpt?: string;
      }[];
    };
    site?: {
      siteMetadata?: {
        title?: string;
      };
    };
  };
}

const BlogIndex = ({ data }: BlogIndexProps) => {
  const { site, bio, allMarkdownRemark, allInstagramContent } = data;
  const siteTitle = site?.siteMetadata?.title || "Title";
  const bioExcerpt = bio?.nodes[0].excerpt;
  const posts = allMarkdownRemark?.nodes;
  const images = allInstagramContent?.nodes;

  return (
    <Layout title={siteTitle}>
      <Seo title="All posts" />

      <LayoutMaxWidthContainer>
        {bioExcerpt && <Bio bio={bioExcerpt} />}
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
        {images && images.length > 0 && <InstagramPostList images={images} />}
        <ReadingList />
      </LayoutMaxWidthContainer>
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
