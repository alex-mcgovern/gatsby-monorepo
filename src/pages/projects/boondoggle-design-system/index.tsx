import React from "react";
import { graphql } from "gatsby";
import groupBy from "lodash.groupby";
import { Box } from "../../../components/atoms/box/box";
import { Typography } from "../../../components/atoms/typography/typography";
import { ListItem } from "../../../components/molecules/list_item/list_item";
import Page from "../../../components/organisms/page/page";
import SectionDesignSystemFeatures from "../../../components/sections/design_system/section_design_system_features/section_design_system_features";
import {
  BOX_CUSTOMISATION_MAX_WIDTH_FULL,
  BOX_CUSTOMISATION_SECTION_SPACING,
} from "../../../utils/shared_props/box_props";

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

const DesignSystemIndex = ({ data }: DesignSystemIndexProps) => {
  const { site } = data;
  const siteTitle = site.siteMetadata.title || "Title";

  const components = data.allMdx.nodes;

  const componentsGroupedByAtomicLevel = groupBy(
    components,
    "frontmatter.atomicLevel"
  );

  return (
    <Page title={siteTitle} maxWidth="gridSpan10">
      {/** —————————————————————————————————————————————————————————————————————————————
       *      PAGE HEADER
       * ——————————————————————————————————————————————————————————————————————————————— */}
      <Box
        as="header"
        customisation={{
          ...BOX_CUSTOMISATION_SECTION_SPACING,
        }}
      >
        <Typography as="h1">Boondoggle design system</Typography>

        <Typography
          as="h2"
          customisation={{
            fontSize: "body_md",
            fontWeight: "normal",
          }}
        >
          Proof-of-concept for a lightweight, modern design system, styling
          framework and component library built on top of{" "}
          <a href="https://vanilla-extract.style/">Vanilla Extract</a>, that is
          semi-self-documenting.
        </Typography>

        <Typography as="p">
          <b>Note:</b> This is an early-stage MVP, with more components and more
          usage examples to be added over time. Long-term, the plan is for this
          to be published on NPM as a full-blown package.
        </Typography>
      </Box>

      {/** ————————————————————————————————————————————————————————————————————————————
       *      BOONDOGGLE FEATURES SECTION
       * ——————————————————————————————————————————————————————————————————————————————— */}

      <SectionDesignSystemFeatures />

      {/** ————————————————————————————————————————————————————————————————————————————
       *      COMPONENT LIST SECTION
       * ——————————————————————————————————————————————————————————————————————————————— */}
      <Box
        customisation={{
          ...BOX_CUSTOMISATION_SECTION_SPACING,
        }}
        as="section"
      >
        {/** ————————————————————————————————————————————
         *      MAP & RENDER ATOMIC LEVEL CATEGORIES
         * ——————————————————————————————————————————————— */}
        {Object.keys(componentsGroupedByAtomicLevel) &&
          Object.keys(componentsGroupedByAtomicLevel).length > 0 &&
          Object.keys(componentsGroupedByAtomicLevel).map((atomicLevel) => {
            const componentsInLevel =
              componentsGroupedByAtomicLevel[atomicLevel];
            return (
              <Box
                customisation={{
                  marginY: "spacing6",
                }}
                as="section"
              >
                <Typography
                  customisation={{
                    fontWeight: "bold",
                    marginBottom: "spacing3",
                  }}
                >
                  {atomicLevel}
                </Typography>
                <Box
                  customisation={{
                    gap: "spacing3",
                    display: "grid",
                    gridTemplateColumns: {
                      desktop: "3x",
                      tablet: "2x",
                      mobile: "1x",
                    },
                  }}
                >
                  {/* —————————————————————————————————————————————
                   *      MAP AND RENDER INDIVIDUAL COMPONENTS
                   * ——————————————————————————————————————————————— */}
                  {componentsInLevel &&
                    componentsInLevel.length > 0 &&
                    componentsInLevel.map((component) => {
                      return (
                        <ListItem
                          key={component.frontmatter.title}
                          title={component.frontmatter.title}
                          link={component.fields.linkSlug}
                          subtitle={component.frontmatter.categories.join(
                            " • "
                          )}
                          description={component.frontmatter.description}
                        />
                      );
                    })}
                </Box>
              </Box>
            );
          })}
      </Box>
    </Page>
  );
};

export default DesignSystemIndex;

export const query = graphql`
  query TemplateDesignDocPageQuery($itemsPerPage: Int, $itemsToSkip: Int) {
    site {
      siteMetadata {
        title
      }
    }

    allMdx(
      limit: $itemsPerPage
      skip: $itemsToSkip
      sort: { fields: frontmatter___title }
      filter: { frontmatter: { mdxType: { eq: "Component" } } }
    ) {
      nodes {
        id
        slug
        fields {
          linkSlug
        }
        frontmatter {
          title
          atomicLevel
          categories
          description
        }
      }
    }
  }
`;
