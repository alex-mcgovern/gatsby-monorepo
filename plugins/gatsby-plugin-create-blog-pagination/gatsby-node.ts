import type { GatsbyNode } from "gatsby";
import path from "path";
import slugify from "slugify";
import { REGEX_CONTENT_BLOG_MARKDOWN } from "../../src/utils/regex/regex_content_blog_markdown";
import { createUrlPathFromArray } from "../../utils/create_url_path_from_array";

const { FALLBACK_PLUGIN_OPTIONS, PLUGIN_NAME } = require("./constants");

interface MarkdownRemarkQueryResult {
  data?: {
    allMarkdownRemark?: {
      totalCount?: number;
    };
  };
}
interface MarkdownRemarkDistinctCategoriesQueryResult {
  data?: {
    allMarkdownRemark?: {
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
  const markdownRemarkQueryResult: MarkdownRemarkQueryResult = await graphql(`
    {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "${REGEX_CONTENT_BLOG_MARKDOWN}"}}
      ) {
        totalCount
      }
    }
  `);

  const distinctCategories: MarkdownRemarkDistinctCategoriesQueryResult =
    await graphql(`
      {
        allMarkdownRemark {
          distinct(field: frontmatter___categories)
        }
      }
    `);

  const transformedCategories =
    distinctCategories?.data.allMarkdownRemark?.distinct.map((category) => {
      return {
        categoryTitle: category,
        categorySlug: slugify(category, { lower: true }),
      };
    });

  /* ——————————————————————————————————————————————————————————————————————————————
  //      CREATE ALL POSTS PAGINATION                                              
  // —————————————————————————————————————————————————————————————————————————————— */

  if (markdownRemarkQueryResult.data?.allMarkdownRemark?.totalCount) {
    const { totalCount } = markdownRemarkQueryResult?.data.allMarkdownRemark;

    const pageCount = Math.ceil(totalCount / itemsPerPage);
    const firstPagePath = createUrlPathFromArray(["blog"]);

    await Array(pageCount)
      .fill(null)
      .forEach(async (_, index) => {
        const currentPage = index + 1;
        const isFirstPage = index === 0;
        const itemsToSkip = itemsPerPage * index;

        const nthPagePath = createUrlPathFromArray([
          "blog",
          currentPage.toString(),
        ]);
        const pagePath = isFirstPage ? firstPagePath : nthPagePath;

        const pageContext = {
          allCategories: transformedCategories,
          itemsPerPage,
          itemsToSkip,
          currentPage,
          pageCount,
        };

        return actions.createPage({
          component: path.resolve(
            `src/templates/template_blog_list_page/template_blog_list_page.tsx`
          ),

          context: pageContext,
          path: pagePath,
        });
      });
  }

  /* ——————————————————————————————————————————————————————————————————————————————
  //      CREATE CATEGORY PAGINATION                                              
  // —————————————————————————————————————————————————————————————————————————————— */

  if (distinctCategories.data?.allMarkdownRemark?.distinct) {
    if (transformedCategories && transformedCategories.length > 0) {
      await transformedCategories.map(
        async ({ categoryTitle, categorySlug }) => {
          const postsInCategory: MarkdownRemarkQueryResult = await graphql(`
            {
              allMarkdownRemark(
                filter: {
                  fileAbsolutePath: {regex: "${REGEX_CONTENT_BLOG_MARKDOWN}"}
                  frontmatter: {categories: {in: "${categoryTitle}"}}
                }
              ) {
                totalCount
              }
            }
          `);

          console.log("debug posts", JSON.stringify(postsInCategory));

          if (postsInCategory.data?.allMarkdownRemark?.totalCount) {
            const { totalCount } = postsInCategory?.data.allMarkdownRemark;

            const pageCount = Math.ceil(totalCount / itemsPerPage);
            const firstPagePath = createUrlPathFromArray([
              "blog",
              categorySlug,
            ]);

            await Array(pageCount)
              .fill(null)
              .forEach(async (_, index) => {
                const currentPage = index + 1;
                const isFirstPage = index === 0;
                const itemsToSkip = itemsPerPage * index;

                const nthPagePath = createUrlPathFromArray([
                  "blog",
                  categorySlug,
                  currentPage.toString(),
                ]);
                const pagePath = isFirstPage ? firstPagePath : nthPagePath;

                const pageContext = {
                  currentCategoryTitle: categoryTitle,
                  allCategories: transformedCategories,
                  itemsPerPage,
                  itemsToSkip,
                  currentPage,
                  pageCount,
                };

                return actions.createPage({
                  component: path.resolve(
                    `src/templates/template_blog_list_category/template_blog_list_category.tsx`
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
