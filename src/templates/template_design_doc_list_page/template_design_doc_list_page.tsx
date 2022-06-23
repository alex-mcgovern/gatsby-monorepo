import React from "react";
import { graphql } from "gatsby";
import groupBy from "lodash.groupby";
import { Button } from "../../components/atoms";
import Box from "../../components/atoms/box/box";
import Typography from "../../components/atoms/typography/typography";
import BlogCategoriesList from "../../components/molecules/blog/blog_categories_list/blog_categories_list";
import ListItem from "../../components/molecules/list_item/list_item";
import Pagination from "../../components/molecules/pagination/pagination";
import Layout from "../../components/organisms/global_layout/global_layout";
import { BOX_PROPS_CONTAINED } from "../../utils/shared_props/box_props";

const PAGINATION_BASE_PATH = "blog";

interface TemplateDesignDocPageProps {
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
    allCategories: {
      nodes?: {}[];
    };
    site: {
      siteMetadata?: {
        title?: string;
      };
    };
  };
  pageContext: {
    allCategories: IBlogCategory[];
    currentPage?: number;
    languageISO?: string;
    pageCount?: number;
  };
}

export default function TemplateDesignDocPage({
  data,
  pageContext,
}: TemplateDesignDocPageProps) {
  const { currentPage, pageCount, allCategories } = pageContext;

  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const components = data.allMdx.nodes;

  const componentsGroupedByAtomicLevel = groupBy(
    components,
    "frontmatter.atomicLevel"
  );

  return (
    <Layout title={siteTitle}>
      <Box {...BOX_PROPS_CONTAINED}>
        <Box as="section" marginY="spacing20">
          <Button
            appearance="tertiary"
            iconLeading="arrow-left"
            size="lg"
            title="BoonDoggle landing page"
            to="/projects/design-system"
          />
          <Typography as="h1" fontSize="h2" dataSal="slide-up">
            BoonDoggle component library documentation
          </Typography>

          <Typography as="p" fontSize="body_lg">
            BoonDoggle is a proof-of-concept for a lightweight, modern design
            system and component library built on top of Vanilla Extract and
            RadixUI.
          </Typography>
          <BlogCategoriesList categories={allCategories} />
          {/* —————————————————————————————————————————————
          //      RENDER ATOMIC LEVEL SECTIONS
          // —————————————————————————————————————————————— */}
          <Box marginY="spacing6" as="section">
            {Object.keys(componentsGroupedByAtomicLevel) &&
              Object.keys(componentsGroupedByAtomicLevel).length > 0 &&
              Object.keys(componentsGroupedByAtomicLevel).map((atomicLevel) => {
                const componentsInLevel =
                  componentsGroupedByAtomicLevel[atomicLevel];
                return (
                  <Box marginY="spacing6" as="section">
                    <Typography
                      fontSize="body_lg"
                      color="neutral_text_lowContrast"
                      textTransform="uppercase"
                      marginBottom="spacing3"
                    >
                      {atomicLevel}
                    </Typography>
                    <Box
                      gap="spacing3"
                      display="grid"
                      gridTemplateColumns={{
                        desktop: "3x",
                        tablet: "2x",
                        mobile: "1x",
                      }}
                    >
                      {/* —————————————————————————————————————————————
                      //      RENDER INDIVIDUAL COMPONENTS            
                      // —————————————————————————————————————————————— */}
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
        </Box>

        {pageCount && pageCount > 1 && (
          <Pagination
            basePath={PAGINATION_BASE_PATH}
            currentPage={currentPage}
            pageCount={pageCount}
          />
        )}
      </Box>
    </Layout>
  );
}

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
