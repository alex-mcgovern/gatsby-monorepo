import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Box } from "../../components/atoms/box/box";
import { Button } from "../../components/atoms/button/button";
import { Typography } from "../../components/atoms/typography/typography";
import { DocumentationParametersTable } from "../../components/molecules/documentation_parameters_table/documentation_parameters_table";
import Page from "../../components/organisms/page/page";
import {
  BOX_CUSTOMISATION_MAX_WIDTH_FULL,
  BOX_CUSTOMISATION_SECTION_SPACING,
} from "../../utils/shared_props/box_props";

interface ITemplateDesignDocsComponentPageProps {
  data: {
    allComponents: {
      nodes: {}[];
      totalCount: number;
    };
    currentComponent: {
      edges: {
        node: {
          frontmatter: {
            title: string;
            description: string;
          };
          body: string;
        };
      }[];
    };
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  pageContext: {
    pokedexID: number;
    languageISO: string;
    currentPage: number;
    pageCount: number;
  };
}

export default function TemplateDesignDocsComponentPage({
  data,
}: // pageContext,
ITemplateDesignDocsComponentPageProps) {
  const {
    // allComponents,
    site,
    currentComponent,
    componentMetadata,
  } = data;
  // const { nodes: allComponentData, totalCount } = allComponents;
  const { parameters } = componentMetadata || {};

  const {
    node: {
      frontmatter: { title, description },
      body,
    },
  } = currentComponent?.edges[0];
  const siteTitle = site.siteMetadata.title || `Title`;

  return (
    <Page title={siteTitle}>
      <Box
        customisation={{
          ...BOX_CUSTOMISATION_SECTION_SPACING,
        }}
      >
        <Box
          as="section"
          customisation={{
            marginY: "spacing10",
          }}
        >
          {/** ————————————————————————————————————————————————————————————————————————————
           *      COMPONENT PAGE HEADER
           * ——————————————————————————————————————————————————————————————————————————————— */}
          <Box as="header">
            <Button
              id="back-button"
              variant={{
                appearance: "tertiary",
                size: "sm",
              }}
              iconLeading="arrow-left"
              title="Back to Boondoggle"
              to={"/projects/boondoggle-design-system"}
            />
            <Typography as="h1">{title}</Typography>
            <Typography
              as="h2"
              customisation={{
                fontWeight: "normal",
                marginTop: "spacing3",
              }}
            >
              {description}
            </Typography>
          </Box>

          {/** ————————————————————————————————————————————————————————————————————————————
           *      COMPONENT PAGE BODY
           * ——————————————————————————————————————————————————————————————————————————————— */}

          {/* Render MDX content from local `*.doc.mdx` */}
          <MDXRenderer>{body}</MDXRenderer>

          {/* Render props table which is auto generated from typings by `gatsby-transformer-react-docgen-typescript-v2`  */}
          <DocumentationParametersTable parameters={parameters} />
        </Box>
      </Box>
    </Page>
  );
}

export const query = graphql`
  query TemplateDesignDocsComponentPageQuery(
    $mdxId: String
    $componentTitle: String
  ) {
    site {
      siteMetadata {
        title
      }
    }

    componentMetadata: tsFunction(name: { eq: $componentTitle }) {
      name
      parameters {
        type
        kind
        properties {
          name
          description
          kind
          type
          optional
          properties {
            value
            kind
            type
            name
            properties {
              value
              kind
              type
              name
            }
          }
        }
      }
    }

    allComponents: allMdx(
      sort: { fields: frontmatter___atomicLevel, order: ASC }
      filter: { frontmatter: { mdxType: { eq: "Component" } } }
    ) {
      totalCount
      nodes {
        fields {
          linkSlug
        }
        frontmatter {
          title
        }
      }
    }
    currentComponent: allMdx(filter: { id: { eq: $mdxId } }) {
      edges {
        next {
          fields {
            linkSlug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            linkSlug
          }
          frontmatter {
            title
          }
        }
        node {
          body
          frontmatter {
            description
            title
          }
          fields {
            linkSlug
          }
        }
      }
    }
  }
`;
