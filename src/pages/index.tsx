import * as React from "react";
import { graphql } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
import AlternatingLayout from "../components/atoms/alternating_layout/alternating_layout";
import Button from "../components/atoms/button/button/button";
import ButtonWrapper from "../components/atoms/button/button_wrapper/button_wrapper";
import ResponsiveGrid from "../components/atoms/responsive_grid/responsive_grid";
import Layout from "../components/layout/layout/layout";
import LayoutMaxWidthContainer from "../components/layout/layout_max_width_container/layout_max_width_container";
import LayoutSectionInner from "../components/layout/layout_section_inner/layout_section_inner";
import LayoutSectionOuter from "../components/layout/layout_section_outer/layout_section_outer";
import SectionBlogPostList from "../components/molecules/blog/section_blog_articles_list/section_blog_articles_list";
import Bio from "../components/molecules/header/bio/bio";
import InstagramPostList from "../components/molecules/insta_grid/instagram_post_list/instagram_post_list";
import ReadingList from "../components/molecules/reading_list/reading_list_kanban/reading_list_kanban";
import Seo from "../components/seo";
import LogoGatsby from "../images/svg/logos/logo_gatsby.svg";
import LogoReact from "../images/svg/logos/logo_react.svg";
// import LogoCypress from "../images/svg/logos/logo_cypress.svg";
// import LogoSASS from "../images/svg/logos/logo_sass.svg";
// import LogoTestingLibrary from "../images/svg/logos/logo_testing_library.svg";
import LogoTypescript from "../images/svg/logos/logo_typescript.svg";

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
      nodes: {
        fields: {
          slug: string;
        };
        excerpt: string;
        frontmatter: {
          title: string;
          date: string;
          subtitle: string;
          slug: string;
          description?: string;
          cover: ImageDataLike;
        };
      }[];
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

        {/* ——————————————————————————————————————————————————————————————————————————————
        //      WHAT I DO 1
        // —————————————————————————————————————————————————————————————————————————————— */}
        <LayoutSectionOuter>
          <AlternatingLayout>
            <LayoutSectionInner
              hasBackground
              hasOutline
              hasPadding
              isVerticallyCentered
            >
              <ResponsiveGrid split={3}>
                <h1>🤝</h1>
                <h1>🚀</h1>
                <h1>👨‍🏫</h1>
              </ResponsiveGrid>
            </LayoutSectionInner>
            <LayoutSectionInner
              hasOutline
              hasArrowsTop
              hasArrowsBottom
              hasPadding
            >
              <h5>MY GOAL</h5>
              <h3>Build a culture of web engineering excellence.</h3>
              <h5>While I don't get to code as much anymore.</h5>
            </LayoutSectionInner>
          </AlternatingLayout>
        </LayoutSectionOuter>

        {/* ——————————————————————————————————————————————————————————————————————————————
        //      WHAT I DO 2
        // —————————————————————————————————————————————————————————————————————————————— */}
        <LayoutSectionOuter>
          <AlternatingLayout>
            <LayoutSectionInner
              hasOutline
              hasArrowsTop
              hasArrowsBottom
              hasPadding
            >
              <h5>My passion</h5>
              <h3>
                Building enterprise B2B websites for scale and performance.
              </h3>
              <h5>
                Using React, TypeScript, GatsbyJS, SASS, React Testing Library
                and Cypress.
              </h5>
            </LayoutSectionInner>
            <LayoutSectionInner
              hasBackground
              hasOutline
              hasPadding
              isVerticallyCentered
            >
              <ResponsiveGrid split={3}>
                <h1>👨🏻‍💻</h1>
                <h1>📈</h1>
                <h1>🏎</h1>
              </ResponsiveGrid>
            </LayoutSectionInner>
          </AlternatingLayout>
        </LayoutSectionOuter>

        {/* ——————————————————————————————————————————————————————————————————————————————
        //      WHAT I DO 2
        // —————————————————————————————————————————————————————————————————————————————— */}
        <LayoutSectionOuter>
          <AlternatingLayout>
            <LayoutSectionInner
              hasOutline
              hasArrowsTop
              hasArrowsBottom
              hasPadding
            >
              <h3>
                I build enterprise B2B websites for scale and performance.
              </h3>
              <h5>
                Using React, TypeScript, GatsbyJS, SASS, React Testing Library
                and Cypress.
              </h5>
            </LayoutSectionInner>
            <LayoutSectionInner hasBackground hasOutline hasPadding>
              <ResponsiveGrid split={3}>
                <LogoGatsby />
                <LogoReact />
                <LogoTypescript />
                {/* <LogoSASS />
                <LogoTestingLibrary />
                <LogoCypress /> */}
              </ResponsiveGrid>
            </LayoutSectionInner>
          </AlternatingLayout>
        </LayoutSectionOuter>

        <LayoutSectionOuter>
          <LayoutSectionInner
            hasArrowsBottom
            hasArrowsTop
            hasOutline
            hasPadding
          >
            <h6>BLOG</h6>
            <h2>I am by no means an expert...</h2>
            <h4>...but I have a blog</h4>
            <p>Just a few things I've picked up along the way...</p>
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
        excerpt(pruneLength: 167, format: HTML, truncate: true)
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
