import React from "react";
import { Box, ListItem } from "@alexmcgovern/boondoggle.design";
import { graphql } from "gatsby";
import groupBy from "lodash.groupby";

interface DesignSystemIndexProps {
  data: {
    allMdx: {
      nodes?: {
        frontmatter: {
          title: string;
          description: string;
          atomicLevel: string;
          categories: string[];
        };
        fields: {
          linkSlug: string;
        };
        body: string;
      }[];
    };
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

function DesignSystemIndex({ data }: DesignSystemIndexProps) {
  const { site } = data;
  const siteTitle = site.siteMetadata.title || "Title";

  const components = data.allMdx.nodes;

  const componentsGroupedByAtomicLevel = groupBy(
    components,
    "frontmatter.atomicLevel"
  );

  return (
    <>
      {/** —————————————————————————————————————————————————————————————————————————————
       * PAGE HEADER
       * ——————————————————————————————————————————————————————————————————————————————— */}
      <Box as="header" marginY="spacing5">
        <Box as="h1">Boondoggle design system</Box>

        <Box as="h2" fontSize="body_lg" fontWeight="normal">
          Proof-of-concept for a lightweight, modern design system, styling
          framework and component library built on top of{" "}
          <a href="https://vanilla-extract.style/">Vanilla Extract</a>, that is
          semi-self-documenting.
        </Box>
      </Box>
      <hr />

      {/** ————————————————————————————————————————————————————————————————————————————
       * BOONDOGGLE FEATURES SECTION
       * ——————————————————————————————————————————————————————————————————————————————— */}

      {/* <SectionDesignSystemFeatures /> */}

      {/** ————————————————————————————————————————————————————————————————————————————
       * COMPONENT LIST SECTION
       * ——————————————————————————————————————————————————————————————————————————————— */}
      <Box marginY="spacing5" as="section">
        {/** ————————————————————————————————————————————
         * MAP & RENDER ATOMIC LEVEL CATEGORIES
         * ——————————————————————————————————————————————— */}
        {Object.keys(componentsGroupedByAtomicLevel) &&
          Object.keys(componentsGroupedByAtomicLevel).length > 0 &&
          Object.keys(componentsGroupedByAtomicLevel).map((atomicLevel) => {
            const componentsInLevel =
              componentsGroupedByAtomicLevel[atomicLevel];
            return (
              <Box key="atomicLevel" marginY="spacing4" as="section">
                <Box fontWeight="bold" marginBottom="spacing3">
                  {atomicLevel}
                </Box>
                <Box
                  gap="spacing2"
                  display="grid"
                  gridTemplateColumns={{
                    desktop: "3x",
                    tablet: "2x",
                    mobile: "1x",
                  }}
                >
                  {/* —————————————————————————————————————————————
                   * MAP AND RENDER INDIVIDUAL COMPONENTS
                   * ——————————————————————————————————————————————— */}
                  {componentsInLevel &&
                    componentsInLevel.length > 0 &&
                    componentsInLevel.map((component) => {
                      return (
                        <ListItem
                          key={component.frontmatter.title}
                          title={component.frontmatter.title}
                          link={component.fields.linkSlug}
                          tags={component.frontmatter.categories}
                          description={component.frontmatter.description}
                        />
                      );
                    })}
                </Box>
              </Box>
            );
          })}
      </Box>
    </>
  );
}

export default DesignSystemIndex;

//   # $itemsPerPage: Int,
// #  $itemsToSkip: Int
export const query = graphql`
  query TemplateDesignDocPageQuery {
    site {
      siteMetadata {
        title
      }
    }

    # allMdx(
    #   limit: $itemsPerPage
    #   skip: $itemsToSkip
    #   sort: { fields: frontmatter___title }
    #   filter: { frontmatter: { mdxType: { eq: "Component" } } }
    # ) {
    #   nodes {
    #     id
    #     slug
    #     fields {
    #       linkSlug
    #     }
    #     frontmatter {
    #       title
    #       atomicLevel
    #       categories
    #       description
    #     }
    #   }
    # }
  }
`;
