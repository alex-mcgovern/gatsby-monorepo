import type { GatsbyNode } from "gatsby";
import path from "path";
import slugify from "slugify";
import { REGEX_CONTENT_BLOG_MARKDOWN } from "../../src/utils/regex/regex_content_blog_markdown";
import { createUrlPathFromArray } from "../../utils/create_url_from_path_array/create_url_path_from_array";

const { PLUGIN_NAME } = require("./constants");

interface IMdxQueryResult {
  errors?: any;
  data?: {
    allMdx: {
      nodes: { id: string; fields: { linkSlug: string } }[];
      totalCount: number;
      distinct: string[];
    };
  };
}

export const onPreInit: GatsbyNode["onPreInit"] = () => {
  console.info(`${PLUGIN_NAME} plugin initializing`);
};

/* ——————————————————————————————————————————————————————————————————————————————
//      ADD HUMAN FRIENDLY SLUG TO .DOC MDX NODES
// —————————————————————————————————————————————————————————————————————————————— */

export const onCreateNode: GatsbyNode["onCreateNode"] = async ({
  actions: { createNodeField },
  node,
}) => {
  if (node.internal.type === "Mdx") {
    // @ts-ignore
    // ToDo: fix types in onCreateNode
    const { atomicLevel, title } = node.frontmatter;

    const atomicLevelSlug = slugify(atomicLevel, { lower: true });
    const titleSlug = slugify(title, { lower: true });

    const linkSlug = createUrlPathFromArray([
      "projects",
      "design-system",
      "components",
      atomicLevelSlug,
      titleSlug,
    ]);

    createNodeField({ node, name: "linkSlug", value: linkSlug });
  }
};

/* ——————————————————————————————————————————————————————————————————————————————
//      CREATE DESIGN SYSTEM DOCS PAGES                                         
// —————————————————————————————————————————————————————————————————————————————— */

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const mdxQueryResult: IMdxQueryResult = await graphql(`
    {
      allMdx {
        nodes {
          id
          fields {
            linkSlug
          }
        }
        totalCount
        distinct(field: frontmatter___atomicLevel)
      }
    }
  `);

  if (mdxQueryResult?.data?.allMdx && mdxQueryResult?.data?.allMdx) {
    const { nodes: allMdx, distinct } = mdxQueryResult?.data?.allMdx;

    const transformedAtomicLevels = distinct.map((atomicLevel) => {
      return {
        atomicLevelTitle: atomicLevel,
        atomicLevelSlug: slugify(atomicLevel, { lower: true }),
      };
    });

    /* ——————————————————————————————————————————————————————————————————————————————
  //      CREATE INDIVIDUAL COMPONENT PAGES
  // —————————————————————————————————————————————————————————————————————————————— */

    allMdx.map(async ({ id, fields: { linkSlug } }) => {
      const pageContext = {
        mdxId: id,
      };

      return actions.createPage({
        component: path.resolve(
          `src/templates/template_design_docs_component_page/template_design_docs_component_page.tsx`
        ),
        context: pageContext,
        path: linkSlug,
      });
    });

    /* ——————————————————————————————————————————————————————————————————————————————
    //      CREATE ALL COMPONENTS PAGE                                              
    // —————————————————————————————————————————————————————————————————————————————— */

    if (mdxQueryResult.data?.allMdx?.totalCount) {
      const pagePath = createUrlPathFromArray([
        "projects",
        "design-system",
        "components",
      ]);

      const pageContext = {
        allAtomicLevels: transformedAtomicLevels,
      };

      return actions.createPage({
        component: path.resolve(
          `src/templates/template_design_doc_list_page/template_design_doc_list_page.tsx`
        ),

        context: pageContext,
        path: pagePath,
      });
    }

    /* ——————————————————————————————————————————————————————————————————————————————
  //      CREATE ATOMIC LEVEL PAGES
  // —————————————————————————————————————————————————————————————————————————————— */

    if (distinct && distinct.length > 0) {
      if (transformedAtomicLevels && transformedAtomicLevels.length > 0) {
        await transformedAtomicLevels.map(
          async ({ atomicLevelTitle, atomicLevelSlug }) => {
            const componentsInAtomicLevel: IMdxQueryResult = await graphql(`
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

            if (componentsInAtomicLevel.data?.allMdx?.totalCount) {
              const pagePath = createUrlPathFromArray([
                "projects",
                "design-system",
                "components",
                atomicLevelSlug,
              ]);

              const pageContext = {
                currentAtomicLevelTitle: atomicLevelTitle,
                allAtomicLevels: transformedAtomicLevels,
              };

              return actions.createPage({
                component: path.resolve(
                  `src/templates/template_design_doc_list_page/template_design_doc_list_page.tsx`
                ),
                context: pageContext,
                path: pagePath,
              });
            }
          }
        );
      }
    }
  }
};
