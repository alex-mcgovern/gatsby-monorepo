const { FALLBACK_PLUGIN_OPTIONS } = require("./constants");
const {
  createPagesBlogPaginatedList,
} = require("./create_page_functions/create_pages_blog_paginated_list/create_pages_blog_paginated_list");

exports.createPages = async (
  { actions, graphql },
  { options: { itemsPerPage } = FALLBACK_PLUGIN_OPTIONS }
) => {
  const blogQueryResponse = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          id
        }
      }
    }
  `);

  if (blogQueryResponse.errors) {
    throw new Error("Broken graphql query");
  }

  const { nodes: allBlogPosts } = blogQueryResponse?.data?.allMarkdownRemark;

  const blogPostListLength = allBlogPosts.length;

  return createPagesBlogPaginatedList({
    actions,
    blogPostListLength,
    itemsPerPage,
  });
};
