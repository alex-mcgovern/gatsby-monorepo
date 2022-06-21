import React from "react";
import { graphql } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
import Box from "../components/atoms/box/box";
import Button from "../components/atoms/button/button";
import Typography from "../components/atoms/typography/typography";
import Wave from "../components/atoms/wave/wave";
import SectionBlogPostList from "../components/molecules/blog/section_blog_articles_list/section_blog_articles_list";
import InstagramPostList from "../components/molecules/insta_grid/instagram_post_list/instagram_post_list";
import Layout from "../components/organisms/layout/layout";
import SectionHomepageBrandedUserExperiences from "../components/sections/section_homepage_branded_user_experiences/section_homepage_branded_user_experiences";
import SectionHomepageDesignSystems from "../components/sections/section_homepage_design_systems/section_homepage_design_systems";
import SectionHomepageBio from "../components/sections/section_homepage_hero/section_homepage";
import SectionHomepagePerformance from "../components/sections/section_homepage_performance/section_homepage_performance";
import SectionHomepagePrinciples from "../components/sections/section_homepage_principles/section_homepage_principles";
import SectionHomepageTechStack from "../components/sections/section_homepage_tech_stack/section_homepage_tech_stack";
import Seo from "../components/seo";
import {
  RESPONSIVE_MAX_WIDTH_PROPS,
  SECTION_PROPS,
} from "../utils/shared_props/box_props";

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
        excerptAst?: string;
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
  const bioExcerpt = bio?.nodes[0].excerptAst;
  const posts = allMarkdownRemark?.nodes;
  const images = allInstagramContent?.nodes;

  console.log(bioExcerpt);

  return (
    <Layout title={siteTitle}>
      <Seo title="All posts" />
      <Box as="section" overflow="hidden" backgroundImage="gradient_primary">
        {bioExcerpt && <SectionHomepageBio bio={bioExcerpt} />}
        <Wave color="neutral_background" waveVariant="bottom" />
      </Box>

      <SectionHomepageBrandedUserExperiences />
      <SectionHomepageDesignSystems />
      <SectionHomepagePerformance />
      <SectionHomepageTechStack />

      <SectionHomepagePrinciples />

      {/* ——————————————————————————————————————————————————————————————————————————————
      //      SECTION BLOG
      // —————————————————————————————————————————————————————————————————————————————— */}
      <Box {...RESPONSIVE_MAX_WIDTH_PROPS} marginY="spacing10">
        <Typography fontSize="h3" as="h3">
          I am by no means an expert..{"   "} ...but I have a blog 😅
        </Typography>
        <p>
          My blog acts as a sort of "experience journal" from my journey through
          the world of engineering and product. My hope is that by writing I
          will a: compound my knowledge and learnings and b: perhaps educate or
          inspire others, and offer some shortcuts to level up their frontend
          craft.
        </p>
        <Box marginY="spacing3">
          <SectionBlogPostList posts={posts} />
        </Box>
        <Box
          marginY="spacing3"
          display="flex"
          justifyContent="center"
          gap="spacing3"
        >
          <Button size="lg" to="/blog" title="Explore 11 more blog articles" />
        </Box>
      </Box>

      {/* ——————————————————————————————————————————————————————————————————————————————
        //      INSTAGRAM SECTION
        // —————————————————————————————————————————————————————————————————————————————— */}
      <Box {...RESPONSIVE_MAX_WIDTH_PROPS}>
        <h3>I've also been known to dabble in design, painting and 3D...</h3>
        <Box marginY="spacing3">
          {images && images.length > 0 && <InstagramPostList images={images} />}
        </Box>
        <Box
          marginY="spacing6"
          display="flex"
          justifyContent="center"
          gap="spacing3"
        >
          <Button size="lg" to="/" title="Check me out on Instagram" />
        </Box>
      </Box>
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
