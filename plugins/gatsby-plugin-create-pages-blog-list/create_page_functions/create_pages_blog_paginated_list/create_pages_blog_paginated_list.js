const {
  createUrlPathFromArray,
} = require("../../../../utils/create_url_path_from_array");

async function createPagesBlogPaginatedList({
  blogPostListLength,
  itemsPerPage,
  actions,
}) {
  const pageCount = Math.ceil(blogPostListLength / itemsPerPage);

  return Array(pageCount)
    .fill()
    .map(async (_, index) => {
      const itemsToSkip = itemsPerPage * index;
      const isFirstPage = index === 0;
      const currentPage = index + 1;

      const firstPagePath = createUrlPathFromArray(["blog"]);
      const nthPagePath = createUrlPathFromArray(["blog", currentPage]);
      const pagePath = isFirstPage ? firstPagePath : nthPagePath;

      const pageContext = {
        itemsPerPage,
        itemsToSkip,
        currentPage,
        pageCount,
      };

      return actions.createPage({
        component: require.resolve(
          "../../../../src/templates/template_blog_list_page/template_blog_list_page.tsx"
        ),
        context: pageContext,
        path: pagePath,
      });
    });
}

module.exports = {
  createPagesBlogPaginatedList,
};
