import type { GatsbyNode } from "gatsby";

export const onCreatePage: GatsbyNode["onCreatePage"] = async ({
  page,
  actions,
}) => {
  const { createPage } = actions;
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/\/projects\/firebase-kanban\/demo/)) {
    page.matchPath = "/projects/firebase-kanban/demo";
    // Update the page.
    createPage(page);
  }
};
