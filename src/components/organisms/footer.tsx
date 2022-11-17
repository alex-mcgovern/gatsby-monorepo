import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { convertKebabCaseToSentenceCase } from "../../utils/convert_kebab_case_to_sentence_case/convert_kebab_case_to_sentence_case";
import { BoxNew } from "../atoms/box_new/box_new";
import { Button } from "../atoms/button/button";
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
    <BoxNew as="footer" marginY="spacing5">
      <hr />
      {/** ————————————————————————————————————————————————————————————————————————————
       *      HOME BUTTON
       * ——————————————————————————————————————————————————————————————————————————————— */}
      <Button
        id="header-home-button"
        iconLeading="shapes"
        variant={{ size: "lg", appearance: "tertiary" }}
        marginY="spacing5"
        to="/"
        title="Alex McGovern"
      />
      {/** ————————————————————————————————————————————————————————————————————————————
       *      LINKS SECTION
       * ——————————————————————————————————————————————————————————————————————————————— */}
      <BoxNew
        display="grid"
        gridTemplateColumns="4x"
        alignItems="start"
        marginY="spacing4"
      >
        {/** ————————————————————————————————————————————
         *      MAP AND RENDER BLOG CATEGORIES
         * ——————————————————————————————————————————————— */}
        <BoxNew marginRight="spacing3">
          <BoxNew as="h4" fontSize="body_lg" marginTop="spacing2">
            Blog
          </BoxNew>
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
        </BoxNew>

        {/** ————————————————————————————————————————————
         *      MAP AND RENDER PROJECTS
         * ——————————————————————————————————————————————— */}
        <BoxNew marginRight="spacing3">
          <BoxNew as="h4" fontSize="body_lg" marginTop="spacing2">
            Projects
          </BoxNew>
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
        </BoxNew>

        {/** ————————————————————————————————————————————
         *      MAP AND RENDER OTHER LINKS
         * ——————————————————————————————————————————————— */}
        <BoxNew marginRight="spacing3">
          <BoxNew as="h4" fontSize="body_lg" marginTop="spacing2">
            Other links
          </BoxNew>
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
        </BoxNew>
      </BoxNew>
      {/** ————————————————————————————————————————————————————————————————————————————
       *      PERFORMANCE WIDGET SECTION
       * ——————————————————————————————————————————————————————————————————————————————— */}
      <BoxNew marginY="spacing4">
        <BoxNew as="h4" fontSize="body_lg" marginTop="spacing2">
          Performance
        </BoxNew>
        <SectionHomepagePerformance />
      </BoxNew>
      {/** ————————————————————————————————————————————————————————————————————————————
       *      DATE SECTION
       * ——————————————————————————————————————————————————————————————————————————————— */}
      <BoxNew as="section" marginY="spacing4" paddingBottom="spacing4">
        © {date} Alex McGovern.
      </BoxNew>
    </BoxNew>
  );
}

Footer.defaultProps = {
  placeholderProp: null,
};
