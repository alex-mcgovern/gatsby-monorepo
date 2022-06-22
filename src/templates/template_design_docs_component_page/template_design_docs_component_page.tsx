import React from "react";
import { graphql } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Box from "../../components/atoms/box/box";
import Button from "../../components/atoms/button/button";
import Layout from "../../components/organisms/global_layout/global_layout";
import { RESPONSIVE_MAX_WIDTH_PROPS } from "../../utils/shared_props/box_props";

interface ITemplateDesignDocsComponentPageProps {
  data: {
    allComponents: {
      nodes: {}[];
      totalCount: number;
    };
    currentComponent: {
      edges: {
        node: {
          flavorText: string;
          name: string;
          genus: string;
          artwork: ImageDataLike;
        };
      }[];
    };
    site?: {
      siteMetadata?: {
        title?: string;
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
  pageContext,
}: ITemplateDesignDocsComponentPageProps) {
  const { allComponents, allLanguagesISO, site, currentComponent } = data;
  const { nodes: allComponentData, totalCount } = allComponents;
  console.log("debug allComponents", allComponents);
  const {
    node: {
      frontmatter: { title, atomicLevel, categories },
      body,
    },
  } = currentComponent?.edges[0];
  const siteTitle = site?.siteMetadata?.title || `Title`;

  // allLanguagesISO: { distinct: allLanguagesISO },

  //   const searchIndex = getPokedexSearchIndex({
  //     allComponents: allComponentData,
  //     languageISO,
  //   });

  return (
    <Layout title={siteTitle}>
      <Box {...RESPONSIVE_MAX_WIDTH_PROPS}>
        <Box as="section" marginY="spacing20">
          <Box as="header" marginY="spacing10">
            <Button
              appearance="tertiary"
              leadingIcon="arrow-left"
              title="All components"
              to={"/projects/design-system/components"}
            />
            <h1>{title}</h1>
            <h2>{atomicLevel}</h2>
            <h2>{categories}</h2>

            <MDXRenderer>{body}</MDXRenderer>
          </Box>
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
