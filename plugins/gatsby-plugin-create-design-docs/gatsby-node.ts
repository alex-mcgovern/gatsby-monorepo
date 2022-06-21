import type { GatsbyNode } from "gatsby";
import path from "path";
import slugify from "slugify";
import { REGEX_CONTENT_BLOG_MARKDOWN } from "../../src/utils/regex/regex_content_blog_markdown";
import { createUrlPathFromArray } from "../../utils/create_url_path_from_array";

const { FALLBACK_PLUGIN_OPTIONS, PLUGIN_NAME } = require("./constants");

interface MdxQueryResult {
  data?: {
    allMdx?: {
      totalCount?: number;
    };
  };
}
interface MdxDistinctAtomicLevelQueryResult {
  data?: {
    allMdx?: {
      distinct?: string[];
    };
  };
}

export const onPreInit: GatsbyNode["onPreInit"] = () => {
  console.info(`${PLUGIN_NAME} plugin initializing`);
};

export const createPages: GatsbyNode["createPages"] = async (
  { actions, graphql },
  { options: { itemsPerPage } = FALLBACK_PLUGIN_OPTIONS }
) => {
  const mdxQueryResult: MdxQueryResult = await graphql(`
    allMdx(sort: {fields: frontmatter___title}) {
      edges {
        node {
          id
          slug
          frontmatter {
            title
            atomicLevel
            categories
          }
        }
        next {
          id
        }
        previous {
          id
        }
      }
    }
  `);

  const distinctAtomicLevels: MdxDistinctAtomicLevelQueryResult =
    await graphql(`
      {
        allMdx {
          distinct(field: frontmatter___atomicLevel)
        }
      }
    `);

  const transformedAtomicLevel =
    distinctAtomicLevels?.data.allMdx?.distinct.map((atomicLevel) => {
      return {
        atomicLevelTitle: atomicLevel,
        atomicLevelSlug: slugify(atomicLevel, { lower: true }),
      };
    });

  /* ——————————————————————————————————————————————————————————————————————————————
  //      CREATE ALL COMPONENTS PAGINATION                                              
  // —————————————————————————————————————————————————————————————————————————————— */

  if (mdxQueryResult.data?.allMdx?.totalCount) {
    const { totalCount } = mdxQueryResult?.data.allMdx;

    const pageCount = Math.ceil(totalCount / itemsPerPage);
    const firstPagePath = createUrlPathFromArray([
      "projects",
      "design-system",
      "components",
    ]);

    await Array(pageCount)
      .fill(null)
      .forEach(async (_, index) => {
        const currentPage = index + 1;
        const isFirstPage = index === 0;
        const itemsToSkip = itemsPerPage * index;

        const nthPagePath = createUrlPathFromArray([
          "projects",
          "design-system",
          "components",
          currentPage.toString(),
        ]);
        const pagePath = isFirstPage ? firstPagePath : nthPagePath;

        const pageContext = {
          allAtomicLevel: transformedAtomicLevel,
          itemsPerPage,
          itemsToSkip,
          currentPage,
          pageCount,
        };

        return actions.createPage({
          component: path.resolve(
            `src/templates/template_design_doc_list_page/template_design_doc_list_page.tsx`
          ),

          context: pageContext,
          path: pagePath,
        });
      });
  }

  /* ——————————————————————————————————————————————————————————————————————————————
  //      CREATE CATEGORY PAGINATION                                              
  // —————————————————————————————————————————————————————————————————————————————— */

  if (distinctAtomicLevels.data?.allMdx?.distinct) {
    if (transformedAtomicLevel && transformedAtomicLevel.length > 0) {
      await transformedAtomicLevel.map(
        async ({ atomicLevelTitle, atomicLevelSlug }) => {
          const componentsInAtomicLevel: MdxQueryResult = await graphql(`
            {
              allMdx(
                filter: {
                  fileAbsolutePath: {regex: "${REGEX_CONTENT_BLOG_MARKDOWN}"}
                  frontmatter: {categories: {in: "${atomicLevelTitle}"}}
                }
              ) {
                totalCount
              }
            }
          `);

          console.log(
            "debug components",
            JSON.stringify(componentsInAtomicLevel)
          );

          if (componentsInAtomicLevel.data?.allMdx?.totalCount) {
            const { totalCount } = componentsInAtomicLevel?.data.allMdx;

            const pageCount = Math.ceil(totalCount / itemsPerPage);
            const firstPagePath = createUrlPathFromArray([
              "projects",
              "design-system",
              "components",
              atomicLevelSlug,
            ]);

            await Array(pageCount)
              .fill(null)
              .forEach(async (_, index) => {
                const currentPage = index + 1;
                const isFirstPage = index === 0;
                const itemsToSkip = itemsPerPage * index;

                const nthPagePath = createUrlPathFromArray([
                  "projects",
                  "design-system",
                  "components",
                  atomicLevelSlug,
                  currentPage.toString(),
                ]);
                const pagePath = isFirstPage ? firstPagePath : nthPagePath;

                const pageContext = {
                  currentAtomicLevelTitle: atomicLevelTitle,
                  allAtomicLevel: transformedAtomicLevel,
                  itemsPerPage,
                  itemsToSkip,
                  currentPage,
                  pageCount,
                };

                return actions.createPage({
                  component: path.resolve(
                    `src/templates/template_design_doc_list_page/template_design_doc_list_page.tsx`
                  ),

                  context: pageContext,
                  path: pagePath,
                });
              });
          }
        }
      );
    }
  }
};
