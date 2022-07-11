import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { convertKebabCaseToSentenceCase } from "../../utils/convert_kebab_case_to_sentence_case/convert_kebab_case_to_sentence_case";
import {
  BOX_CUSTOMISATION_SECTION_SPACING,
  BOX_CUSTOMISATION_SUBSECTION_SPACING,
} from "../../utils/shared_props/box_props";
import { Box } from "../atoms/box/box";
import { Button } from "../atoms/button/button";
import { Typography } from "../atoms/typography/typography";
import SectionHomepagePerformance from "../sections/homepage/section_homepage_performance/section_homepage_performance";

interface IFooter {}

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

export default function Footer({}: IFooter) {
  const date = new Date().getFullYear();

  /** ————————————————————————————————————————————————————————————————————————————
   *      AUTO-POPULATE PROJECTS & BLOG CATEGORIES
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
   *      TRANSFORM PROJECTS
   *      Make button-friendly objects from our query response
   * ——————————————————————————————————————————————— */

  const projectPaths = allProjects?.nodes;
  const projectLinks = projectPaths?.map((projectPath) => {
    const trimmedPath = projectPath.path.replace(/\/projects\//g, "");
    const title = convertKebabCaseToSentenceCase(trimmedPath);
    return {
      link: projectPath.path,
      title: title,
    };
  });

  /** —————————————————————————————————————————————
   *      TRANSFORM BLOG CATEGORIES
   *      Make button-friendly objects from our query response
   * ——————————————————————————————————————————————— */
  const blogCategories = allBlogCategories?.nodes;
  const categoryLinks = blogCategories?.map((projectPath) => {
    const trimmedPath = projectPath.path.replace(/\/blog\//g, "");
    const title = convertKebabCaseToSentenceCase(trimmedPath);
    return {
      link: projectPath.path,
      title: title,
    };
  });

  return (
    <Box
      as="footer"
      customisation={{
        ...BOX_CUSTOMISATION_SECTION_SPACING,
      }}
    >
      <hr />
      {/** ————————————————————————————————————————————————————————————————————————————
       *      HOME BUTTON
       * ——————————————————————————————————————————————————————————————————————————————— */}
      <Button
        id="header-home-button"
        iconLeading="shapes"
        variant={{ size: "lg", appearance: "tertiary" }}
        customisation={{ ...BOX_CUSTOMISATION_SECTION_SPACING }}
        to="/"
        title="Alex McGovern"
      />
      {/** ————————————————————————————————————————————————————————————————————————————
       *      LINKS SECTION
       * ——————————————————————————————————————————————————————————————————————————————— */}
      <Box
        customisation={{
          display: "grid",
          gridTemplateColumns: "4x",
          alignItems: "start",
          ...BOX_CUSTOMISATION_SUBSECTION_SPACING,
        }}
      >
        {/** ————————————————————————————————————————————
         *      MAP AND RENDER BLOG CATEGORIES
         * ——————————————————————————————————————————————— */}
        <Box customisation={{ marginRight: "spacing3" }}>
          <Typography
            as="h4"
            customisation={{ fontSize: "body_lg", marginTop: "spacing2" }}
          >
            Blog
          </Typography>
          <Button
            variant={{ size: "sm", appearance: "tertiary" }}
            title="All posts"
            to="/blog/"
          />
          {categoryLinks &&
            categoryLinks.length > 0 &&
            categoryLinks.map((categoryLink) => {
              return (
                <Button
                  variant={{ size: "sm", appearance: "tertiary" }}
                  key={categoryLink.link}
                  title={categoryLink.title}
                  to={categoryLink.link}
                />
              );
            })}
        </Box>

        {/** ————————————————————————————————————————————
         *      MAP AND RENDER PROJECTS
         * ——————————————————————————————————————————————— */}
        <Box customisation={{ marginRight: "spacing3" }}>
          <Typography
            as="h4"
            customisation={{ fontSize: "body_lg", marginBottom: "spacing2" }}
          >
            Projects
          </Typography>
          {projectLinks &&
            projectLinks.length > 0 &&
            projectLinks.map((projectLink) => {
              return (
                <Button
                  variant={{ size: "sm", appearance: "tertiary" }}
                  key={projectLink.link}
                  title={projectLink.title}
                  to={projectLink.link}
                />
              );
            })}
        </Box>

        {/** ————————————————————————————————————————————
         *      MAP AND RENDER OTHER LINKS
         * ——————————————————————————————————————————————— */}
        <Box customisation={{ marginRight: "spacing3" }}>
          <Typography
            as="h4"
            customisation={{ fontSize: "body_lg", marginBottom: "spacing2" }}
          >
            Other links
          </Typography>
          {OTHER_LINKS &&
            OTHER_LINKS.length > 0 &&
            OTHER_LINKS.map((otherLink) => {
              return (
                <Button
                  variant={{ size: "sm", appearance: "tertiary" }}
                  title={otherLink.title}
                  key={otherLink.link}
                  to={otherLink.link}
                />
              );
            })}
        </Box>
      </Box>
      {/** ————————————————————————————————————————————————————————————————————————————
       *      PERFORMANCE WIDGET SECTION
       * ——————————————————————————————————————————————————————————————————————————————— */}
      <Box
        customisation={{
          ...BOX_CUSTOMISATION_SUBSECTION_SPACING,
        }}
      >
        <Typography
          as="h4"
          customisation={{ fontSize: "body_lg", marginBottom: "spacing2" }}
        >
          Performance
        </Typography>
        <SectionHomepagePerformance />
      </Box>
      {/** ————————————————————————————————————————————————————————————————————————————
       *      DATE SECTION
       * ——————————————————————————————————————————————————————————————————————————————— */}
      <Box
        as="section"
        customisation={{
          ...BOX_CUSTOMISATION_SUBSECTION_SPACING,
          paddingBottom: "spacing4",
        }}
      >
        © {date} Alex McGovern.
      </Box>
    </Box>
  );
}

Footer.defaultProps = {
  placeholderProp: null,
};
