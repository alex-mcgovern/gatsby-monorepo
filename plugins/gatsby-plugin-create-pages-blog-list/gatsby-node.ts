import type { GatsbyNode } from "gatsby";
import path from "path";
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

  if (markdownRemarkQueryResult.data?.allMarkdownRemark?.totalCount) {
    const { totalCount } = markdownRemarkQueryResult?.data.allMarkdownRemark;
    console.log(totalCount);

    const pageCount = Math.ceil(totalCount / itemsPerPage);
    const firstPagePath = createUrlPathFromArray(["blog"]);

    Array(pageCount)
      .fill(null)
      .forEach((_, index) => {
        const currentPage = index + 1;
        const isFirstPage = index === 0;
        const itemsToSkip = itemsPerPage * index;

        console.log("itemsToSkip", itemsToSkip);
        console.log("isFirstPage", isFirstPage);
        console.log("currentPage", currentPage);

        const nthPagePath = createUrlPathFromArray([
          "blog",
          currentPage.toString(),
        ]);
        const pagePath = isFirstPage ? firstPagePath : nthPagePath;

        const pageContext = {
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
};
