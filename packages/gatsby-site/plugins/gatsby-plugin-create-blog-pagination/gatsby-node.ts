import type { GatsbyNode, PluginOptions } from "gatsby";
import path from "path";
import slugify from "slugify";
import { getPaginationVars } from "./getPaginationVars";

interface CreateBlogPaginationPluginOptions extends PluginOptions {
  itemsPerPage: number;
}

interface MarkdownRemarkQueryResult {
  allMarkdownRemark?: {
    allPostsCount?: number;
    groupedByCategory?: Array<{
      postsInCategoryCount: number;
      categoryTitle: string;
    }>;
  };
}

export const createPages: GatsbyNode["createPages"] = async (
  { actions, graphql },
  { itemsPerPage = 12 }: CreateBlogPaginationPluginOptions
) => {
  const query = await graphql<MarkdownRemarkQueryResult>(`
    {
      allMarkdownRemark {
        allPostsCount: totalCount
        groupedByCategory: group(
          field: { frontmatter: { categories: SELECT } }
        ) {
          postsInCategoryCount: totalCount
          categoryTitle: fieldValue
        }
      }
    }
  `).catch((error) => {
    throw new Error(error);
  });

  const { allPostsCount, groupedByCategory } =
    query.data?.allMarkdownRemark || {};

  /* ——————————————————————————————————————————————————————————————————————————————
   * CREATE "ALL POSTS" PAGINATION
   *
   * Create a series of pages for all blog posts, without any filtering applied.
   * —————————————————————————————————————————————————————————————————————————————— */
  if (!allPostsCount) return;

  const allPostsPageCount = Math.ceil(allPostsCount / itemsPerPage);
  const allPostsBasePagePath = "blog";

  /**
   * Create each page, and pass some numeric values that can
   * be used to query blog posts in the template's page query.
   */

  await Array.from({ length: allPostsPageCount }, async (_, index) => {
    const { currentPage, itemsToSkip, pagePath } = getPaginationVars({
      index,
      itemsPerPage,
      basePagePath: allPostsBasePagePath,
    });

    const pageContext = {
      currentPage,
      itemsPerPage,
      itemsToSkip,
      pageCount: allPostsPageCount,
    };

    return actions.createPage({
      component: path.resolve(`src/templates/TemplateBlogListPage.tsx`),
      context: pageContext,
      path: pagePath,
    });
  });

  /* ——————————————————————————————————————————————————————————————————————————————
   * CREATE "CATEGORIES" PAGINATION
   *
   * Create series of pages for each blog category
   * —————————————————————————————————————————————————————————————————————————————— */

  if (!Array.isArray(groupedByCategory)) return;

  groupedByCategory.forEach(({ categoryTitle, postsInCategoryCount }) => {
    const categoryPageCount = Math.ceil(allPostsCount / postsInCategoryCount);
    const categoryBasePagePath = path.join(
      "blog",
      slugify(categoryTitle, { lower: true })
    );

    /**
     * Create each page, and pass some numeric values that can
     * be used to query blog posts in the template's page query.
     */
    for (let index = 0; index < categoryPageCount; index += 1) {
      const { currentPage, itemsToSkip, pagePath } = getPaginationVars({
        index,
        itemsPerPage,
        basePagePath: categoryBasePagePath,
      });

      const pageContext = {
        currentCategoryTitle: categoryTitle,
        currentPage,
        itemsPerPage,
        itemsToSkip,
        pageCount: categoryPageCount,
      };

      actions.createPage({
        component: path.resolve(`src/templates/TemplateBlogListPage.tsx`),
        context: pageContext,
        path: pagePath,
      });
    }
  });
};
