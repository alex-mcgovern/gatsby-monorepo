import React from "react";
import { Box, Button } from "@alexmcgovern/boondoggle.design";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { DocumentationParametersTable } from "../src/components/DocumentationParametersTable";

interface TemplateDesignDocsComponentPageProps {
  data: {
    allComponents: {
      nodes: Array<Record<string, unknown>>;
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
    <Box marginY="spacing5">
      <Box as="section" marginY="spacing4">
        {/** -----------------------------------------------------------------------------
         * COMPONENT PAGE HEADER
         * ------------------------------------------------------------------------------- */}
        <Box as="header">
          <Button
            id="back-button"
            appearance="uiLink"
            iconLeading={faArrowLeft}
            as={Link}
            to="/projects/boondoggle-design-system"
          >
            All components
          </Button>
          <Box as="h1">{title}</Box>
          <Box
            as="h2"
            fontSize="body_lg"
            fontWeight="normal"
            marginTop="spacing3"
          >
            {description}
          </Box>
        </Box>
        <hr />

        {/** -----------------------------------------------------------------------------
         * COMPONENT PAGE BODY
         * ------------------------------------------------------------------------------- */}

        {/* Render props table which is auto generated from typings by `gatsby-transformer-react-docgen-typescript-v2`  */}
        <DocumentationParametersTable parameters={parameters} />

        {/* Render MDX content from local `*.doc.mdx` */}
        <MDXRenderer>{body}</MDXRenderer>
      </Box>
    </Box>
  );
}
// $mdxId: String
// $componentTitle: String

export const query = graphql`
  query TemplateDesignDocsComponentPageQuery {
    site {
      siteMetadata {
        title
      }
    }

    # componentMetadata: tsFunction(name: { eq: $componentTitle }) {
    #   name
    #   parameters {
    #     type
    #     kind
    #     properties {
    #       name
    #       description
    #       kind
    #       type
    #       optional
    #       properties {
    #         # value
    #         kind
    #         type
    #         name
    #         properties {
    #           # value
    #           kind
    #           type
    #           name
    #         }
    #       }
    #     }
    #   }
    # }

    # allComponents: allMdx(
    #   sort: { fields: frontmatter___atomicLevel, order: ASC }
    #   filter: { frontmatter: { mdxType: { eq: "Component" } } }
    # ) {
    #   totalCount
    #   nodes {
    #     fields {
    #       linkSlug
    #     }
    #     frontmatter {
    #       title
    #     }
    #   }
    # }
    # currentComponent: allMdx(filter: { id: { eq: $mdxId } }) {
    #   edges {
    #     next {
    #       fields {
    #         linkSlug
    #       }
    #       frontmatter {
    #         title
    #       }
    #     }
    #     previous {
    #       fields {
    #         linkSlug
    #       }
    #       frontmatter {
    #         title
    #       }
    #     }
    #     node {
    #       body
    #       frontmatter {
    #         description
    #         title
    #       }
    #       fields {
    #         linkSlug
    #       }
    #     }
    #   }
    # }
  }
`;
