import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Box from "../../components/atoms/box/box";
import Button from "../../components/atoms/button/button";
import Layout from "../../components/organisms/global_layout/global_layout";
import {
  BOX_PROPS_CONTAINED,
  BOX_PROPS_SECTION,
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
            atomicLevel: string;
            categories: string[];
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
    allLanguagesISO: {
      distinct: string[];
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
  } = data;
  // const { nodes: allComponentData, totalCount } = allComponents;

  const {
    node: {
      frontmatter: { title, atomicLevel, categories },
      body,
    },
  } = currentComponent?.edges[0];
  const siteTitle = site.siteMetadata.title || `Title`;

  // allLanguagesISO: { distinct: allLanguagesISO },

  //   const dropdownItems = getPokedexDropdownItems({
  //     allComponents: allComponentData,
  //     languageISO,
  //   });

  return (
    <Layout title={siteTitle}>
      <Box {...BOX_PROPS_SECTION} {...BOX_PROPS_CONTAINED}>
        <Box as="header" marginY="spacing10">
          <Button
            appearance="tertiary"
            iconLeading="arrow-left"
            size="lg"
            title="All components"
            to={"/projects/design-system/components"}
          />
          <h1>{title}</h1>
          <h2>{atomicLevel}</h2>
          <h2>{categories}</h2>

          <MDXRenderer>{body}</MDXRenderer>
        </Box>
      </Box>
    </Layout>
  );
}

export const query = graphql`
  query TemplateDesignDocsComponentPageQuery($mdxId: String) {
    site {
      siteMetadata {
        title
      }
    }

    allComponents: allMdx(
      sort: { fields: frontmatter___atomicLevel, order: ASC }
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
            atomicLevel
            categories
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
