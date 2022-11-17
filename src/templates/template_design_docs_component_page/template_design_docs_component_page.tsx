import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { BoxNew } from "../../components/atoms/box_new/box_new";
import { Button } from "../../components/atoms/button/button";
import { DocumentationParametersTable } from "../../components/molecules/documentation_parameters_table/documentation_parameters_table";

interface TemplateDesignDocsComponentPageProps {
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
TemplateDesignDocsComponentPageProps) {
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
    <>
      <BoxNew marginY="spacing5">
        <BoxNew as="section" marginY="spacing4">
          {/** ————————————————————————————————————————————————————————————————————————————
           *      COMPONENT PAGE HEADER
           * ——————————————————————————————————————————————————————————————————————————————— */}
          <BoxNew as="header">
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
            <BoxNew as="h1">{title}</BoxNew>
            <BoxNew
              as="h2"
              customisation={{
                fontSize: "body_lg",
                fontWeight: "normal",
                marginTop: "spacing3",
              }}
            >
              {description}
            </BoxNew>
          </BoxNew>
          <hr />

          {/** ————————————————————————————————————————————————————————————————————————————
           *      COMPONENT PAGE BODY
           * ——————————————————————————————————————————————————————————————————————————————— */}

          {/* Render props table which is auto generated from typings by `gatsby-transformer-react-docgen-typescript-v2`  */}
          <DocumentationParametersTable parameters={parameters} />

          {/* Render MDX content from local `*.doc.mdx` */}
          <MDXRenderer>{body}</MDXRenderer>
        </BoxNew>
      </BoxNew>
    </>
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
            # value
            kind
            type
            name
            properties {
              # value
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
