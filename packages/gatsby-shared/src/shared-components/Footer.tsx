import React from "react";
import type { ButtonProps } from "@alexmcgovern/boondoggle.design";
import { Box, Button } from "@alexmcgovern/boondoggle.design";
import { transformKebabCaseToSentenceCase } from "@alexmcgovern/utils";
import { WebVitalsWidget } from "@alexmcgovern/web-vitals-widget";
import { faShapes } from "@fortawesome/free-solid-svg-icons";
import { Link, graphql, useStaticQuery } from "gatsby";

interface IProjectsQueryResult {
  allProjects: {
    nodes: {
      path: string;
    }[];
  };
  allBlogCategories: {
    nodes: {
      path: string;
    }[];
  };
}

const FOOTER_LINK_COMMON_PROPS: ButtonProps = {
  appearance: "uiLink",
  color: "neutral",
};

const OTHER_LINKS = [
  {
    title: "Github",
    link: "https://github.com/alex-mcgovern",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/alexmcgovern",
  },
  {
    title: "Sitemap.xml",
    link: "/sitemap.xml",
  },
];

export function Footer() {
  const date = new Date().getFullYear();

  /** ————————————————————————————————————————————————————————————————————————————
   * AUTO-POPULATE PROJECTS & BLOG CATEGORIES
   * ——————————————————————————————————————————————————————————————————————————————— */

  const { allProjects, allBlogCategories }: IProjectsQueryResult =
    useStaticQuery(
      graphql`
        query {
          allProjects: allSitePage(filter: { path: { glob: "/projects/*" } }) {
            nodes {
              path
            }
          }
          allBlogCategories: allSitePage(
            filter: { path: { glob: "/blog/*" } }
          ) {
            nodes {
              path
            }
          }
        }
      `
    );

  /** —————————————————————————————————————————————
   * TRANSFORM PROJECTS
   * Make button-friendly objects from our query response
   * ——————————————————————————————————————————————— */

  const projectPaths = allProjects?.nodes;
  const projectLinks = projectPaths?.map((projectPath) => {
    const trimmedPath = projectPath.path.replace(/\/projects\//g, "");
    const title = transformKebabCaseToSentenceCase(trimmedPath);
    return {
      link: projectPath.path,
      title,
    };
  });

  /** —————————————————————————————————————————————
   * TRANSFORM BLOG CATEGORIES
   * Make button-friendly objects from our query response
   * ——————————————————————————————————————————————— */
  const blogCategories = allBlogCategories?.nodes;
  const categoryLinks = blogCategories?.map((projectPath) => {
    const trimmedPath = projectPath.path.replace(/\/blog\//g, "");
    const title = transformKebabCaseToSentenceCase(trimmedPath);
    return {
      link: projectPath.path,
      title,
    };
  });

  return (
    <Box as="footer" marginY="spacing5">
      <hr />
      {/** ————————————————————————————————————————————————————————————————————————————
       * HOME BUTTON
       * ——————————————————————————————————————————————————————————————————————————————— */}
      <Button
        id="header-home-button"
        iconLeading={faShapes}
        {...FOOTER_LINK_COMMON_PROPS}
        marginY="spacing2"
        to="/"
        as={Link}
        title="Alex McGovern"
      >
        Alex McGovern
      </Button>
      {/** ————————————————————————————————————————————————————————————————————————————
       * LINKS SECTION
       * ——————————————————————————————————————————————————————————————————————————————— */}
      <Box
        display="grid"
        gridTemplateColumns="3x"
        alignItems="start"
        marginY="spacing2"
      >
        {/** ————————————————————————————————————————————
         * MAP AND RENDER BLOG CATEGORIES
         * ——————————————————————————————————————————————— */}

        <Box marginRight="spacing3">
          <Box as="h4" fontSize="body_lg" marginTop="spacing2">
            Blog
          </Box>

          <Button {...FOOTER_LINK_COMMON_PROPS} as={Link} to="/blog/">
            All posts
          </Button>

          {categoryLinks?.length > 0 &&
            categoryLinks.map((categoryLink) => {
              return (
                <Button
                  {...FOOTER_LINK_COMMON_PROPS}
                  key={categoryLink.link}
                  as={Link}
                  to={categoryLink.link}
                >
                  {categoryLink.title}
                </Button>
              );
            })}
        </Box>

        {/** ————————————————————————————————————————————
         * MAP AND RENDER PROJECTS
         * ——————————————————————————————————————————————— */}

        <Box marginRight="spacing3">
          <Box as="h4" fontSize="body_lg" marginTop="spacing2">
            Projects
          </Box>
          {projectLinks?.length > 0 &&
            projectLinks.map((projectLink) => {
              return (
                <Button
                  {...FOOTER_LINK_COMMON_PROPS}
                  key={projectLink.link}
                  as={Link}
                  to={projectLink.link}
                >
                  {projectLink.title}
                </Button>
              );
            })}
        </Box>

        {/** ————————————————————————————————————————————
         * MAP AND RENDER OTHER LINKS
         * ——————————————————————————————————————————————— */}

        <Box marginRight="spacing3">
          <Box as="h4" fontSize="body_lg" marginTop="spacing2">
            Other links
          </Box>
          {OTHER_LINKS?.length > 0 &&
            OTHER_LINKS.map((otherLink) => {
              return (
                <Button
                  {...FOOTER_LINK_COMMON_PROPS}
                  key={otherLink.link}
                  to={otherLink.link}
                  as={Link}
                >
                  {otherLink.title}
                </Button>
              );
            })}
        </Box>
      </Box>

      {/** ————————————————————————————————————————————————————————————————————————————
       * PERFORMANCE WIDGET SECTION
       * ——————————————————————————————————————————————————————————————————————————————— */}

      <Box marginY="spacing4">
        <Box as="h4" fontSize="body_lg" marginTop="spacing2">
          Performance
        </Box>
        <WebVitalsWidget />
      </Box>

      {/** ————————————————————————————————————————————————————————————————————————————
       * DATE SECTION
       * ——————————————————————————————————————————————————————————————————————————————— */}
      <Box as="section" marginY="spacing4" paddingBottom="spacing4">
        © {date} Alex McGovern.
      </Box>
    </Box>
  );
}
