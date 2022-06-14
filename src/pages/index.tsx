import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
import { getCLS, getFCP, getFID, getLCP, getTTFB } from "web-vitals";
import { createUrlPathFromArray } from "../../utils/create_url_path_from_array";
import Button from "../components/atoms/button/button/button";
import Box from "../components/layout/box/box";
import Layout from "../components/layout/layout/layout";
import SectionBlogPostList from "../components/molecules/blog/section_blog_articles_list/section_blog_articles_list";
import Bio from "../components/molecules/header/bio/bio";
import InstagramPostList from "../components/molecules/insta_grid/instagram_post_list/instagram_post_list";
import HomepageSectionPerformance from "../components/organisms/homepage_sections/homepage_section_performance";
import Seo from "../components/seo";
import LogoCypress from "../images/svg/logos/logo_cypress.svg";
import LogoGatsby from "../images/svg/logos/logo_gatsby.svg";
import LogoReact from "../images/svg/logos/logo_react.svg";
import LogoSASS from "../images/svg/logos/logo_sass.svg";
import LogoTestingLibrary from "../images/svg/logos/logo_testing_library.svg";
import LogoTypescript from "../images/svg/logos/logo_typescript.svg";
import LogoVanillaExtract from "../images/svg/logos/logo_vanilla_extract.svg";
import LogoRadix from "../images/svg/logos/logo_radix.svg";
import { getFunctionalClassNames } from "../styles/functional_classnames.css";
import { SECTION_PROPS } from "../utils/shared_props/box_props";

const POKEDEX_LINK = createUrlPathFromArray(["en", "pokedex", "1"]);

const DROPDOWN_INDEX = [
  {
    value: "Multilingual Pokedex",
    label: "Multilingual Pokedex",
    link: POKEDEX_LINK,
  },
];

const ICON_CLASSNAMES = getFunctionalClassNames({
  padding: "spacing3",
  background: { lightMode: "white", darkMode: "gray900" },
  borderRadius: "md",
  boxShadow: "shadowDark",
  aspectRatio: "square",
});

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

  const [CLS, setCLS] = useState();
  const [FID, setFID] = useState();
  const [LCP, setLCP] = useState();
  const [FCP, setFCP] = useState();
  const [TTFB, setTTFB] = useState();

  useEffect(() => {
    getCLS(setCLS);
    getFID(setFID);
    getLCP(setLCP);
    getFCP(setFCP);
    getTTFB(setTTFB);
  }, []);

  return (
    <Layout title={siteTitle}>
      <Seo title="All posts" />

      {bioExcerpt && <Bio bio={bioExcerpt} />}

      {/* ——————————————————————————————————————————————————————————————————————————————
      //      PERFORMANCE SECTION
      // —————————————————————————————————————————————————————————————————————————————— */}
      <HomepageSectionPerformance />

      {/* ——————————————————————————————————————————————————————————————————————————————
      //      TECH STACK SECTION
      // —————————————————————————————————————————————————————————————————————————————— */}

      <Box
        {...SECTION_PROPS}
        display="grid"
        gap="spacing6"
        alignItems="center"
        gridTemplateColumns={{
          desktop: "1_1",
          tablet: "1",
        }}
      >
        <Box
          marginY="spacing3"
          display="grid"
          gridTemplateColumns="1_1_1"
          gap="spacing3"
        >
          <LogoReact className={ICON_CLASSNAMES} />
          <LogoTypescript className={ICON_CLASSNAMES} />
          <LogoGatsby className={ICON_CLASSNAMES} />
          <LogoTestingLibrary className={ICON_CLASSNAMES} />
          <LogoCypress className={ICON_CLASSNAMES} />
          <LogoSASS className={ICON_CLASSNAMES} />
          <LogoVanillaExtract className={ICON_CLASSNAMES} />
          <LogoRadix className={ICON_CLASSNAMES} />
        </Box>

        <Box marginY="spacing6">
          <h3>These are a few of my favorite things...</h3>
          <p>
            I ❤️ React, TypeScript, GatsbyJS, SASS, React Testing Library and
            Cypress.
          </p>
        </Box>
      </Box>

      {/* ——————————————————————————————————————————————————————————————————————————————
        //      BLOG SECTION
        // —————————————————————————————————————————————————————————————————————————————— */}
      <Box {...SECTION_PROPS}>
        <h3>I am by no means an expert...</h3>
        <p>
          ...but I have a blog. 😅 Just a few things I've picked up along the
          way...
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
          <Button size="md" to="/blog" title="Explore 11 more blog articles" />
        </Box>
      </Box>

      {/* ——————————————————————————————————————————————————————————————————————————————
        //      INSTAGRAM SECTION
        // —————————————————————————————————————————————————————————————————————————————— */}
      <Box {...SECTION_PROPS}>
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
        excerpt(pruneLength: 150, format: HTML, truncate: true)
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
