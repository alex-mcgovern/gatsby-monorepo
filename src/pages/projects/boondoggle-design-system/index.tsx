import React from "react";
import { graphql } from "gatsby";
import groupBy from "lodash.groupby";
import { BoxNew } from "../../../components/atoms/box_new/box_new";
import { ListItem } from "../../../components/molecules/list_item/list_item";

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
    <>
      {/** —————————————————————————————————————————————————————————————————————————————
       *      PAGE HEADER
       * ——————————————————————————————————————————————————————————————————————————————— */}
      <BoxNew as="header" marginY="spacing5">
        <BoxNew as="h1">Boondoggle design system</BoxNew>

        <BoxNew
          as="h2"
          customisation={{
            fontSize: "body_lg",
            fontWeight: "normal",
          }}
        >
          Proof-of-concept for a lightweight, modern design system, styling
          framework and component library built on top of{" "}
          <a href="https://vanilla-extract.style/">Vanilla Extract</a>, that is
          semi-self-documenting.
        </BoxNew>
      </BoxNew>
      <hr />

      {/** ————————————————————————————————————————————————————————————————————————————
       *      BOONDOGGLE FEATURES SECTION
       * ——————————————————————————————————————————————————————————————————————————————— */}

      {/* <SectionDesignSystemFeatures /> */}

      {/** ————————————————————————————————————————————————————————————————————————————
       *      COMPONENT LIST SECTION
       * ——————————————————————————————————————————————————————————————————————————————— */}
      <BoxNew marginY="spacing5" as="section">
        {/** ————————————————————————————————————————————
         *      MAP & RENDER ATOMIC LEVEL CATEGORIES
         * ——————————————————————————————————————————————— */}
        {Object.keys(componentsGroupedByAtomicLevel) &&
          Object.keys(componentsGroupedByAtomicLevel).length > 0 &&
          Object.keys(componentsGroupedByAtomicLevel).map((atomicLevel) => {
            const componentsInLevel =
              componentsGroupedByAtomicLevel[atomicLevel];
            return (
              <BoxNew
                key="atomicLevel"
                customisation={{
                  marginY: "spacing4",
                }}
                as="section"
              >
                <BoxNew
                  customisation={{
                    fontWeight: "bold",
                    marginBottom: "spacing3",
                  }}
                >
                  {atomicLevel}
                </BoxNew>
                <BoxNew
                  customisation={{
                    gap: "spacing2",
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
                          tags={component.frontmatter.categories}
                          description={component.frontmatter.description}
                        />
                      );
                    })}
                </BoxNew>
              </BoxNew>
            );
          })}
      </BoxNew>
    </>
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
