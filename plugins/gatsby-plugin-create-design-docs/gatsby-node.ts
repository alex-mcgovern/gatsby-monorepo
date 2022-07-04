import type { GatsbyNode } from "gatsby";
import path from "path";
import slugify from "slugify";
import { createUrlPathFromArray } from "../../utils/create_url_from_path_array/create_url_path_from_array";

const { PLUGIN_NAME } = require("./constants");

interface IAllComponentDocs {
  errors?: any;
  data?: {
    allMdx: {
      nodes: {
        id: string;
        fields: { linkSlug: string };
        frontmatter: { title: string; mdxType: string };
      }[];

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
  if (
    node.internal.type === "Mdx" &&
    node.frontmatter?.mdxType &&
    node.frontmatter?.mdxType === "Component"
  ) {
    // @ts-ignore
    // ToDo: fix types in onCreateNode
    const { atomicLevel, title } = node.frontmatter;

    if (atomicLevel && title) {
      const atomicLevelSlug = slugify(atomicLevel, { lower: true });
      const titleSlug = slugify(title, { lower: true });

      const linkSlug = createUrlPathFromArray([
        "projects",
        "boondoggle-design-system",
        "components",
        atomicLevelSlug,
        titleSlug,
      ]);

      createNodeField({ node, name: "linkSlug", value: linkSlug });
    }
  }
};

/* ——————————————————————————————————————————————————————————————————————————————
//      CREATE DESIGN SYSTEM DOCS PAGES                                         
// —————————————————————————————————————————————————————————————————————————————— */

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const allComponentDocs: IAllComponentDocs = await graphql(`
    {
      allMdx(filter: { frontmatter: { mdxType: { eq: "Component" } } }) {
        nodes {
          id
          fields {
            linkSlug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `);

  if (allComponentDocs?.data?.allMdx && allComponentDocs?.data?.allMdx) {
    const { nodes: allMdx } = allComponentDocs?.data?.allMdx;

    allMdx.map(async ({ id, fields: { linkSlug }, frontmatter: { title } }) => {
      const pageContext = {
        mdxId: id,
        componentTitle: title,
      };

      return actions.createPage({
        component: path.resolve(
          `src/templates/template_design_docs_component_page/template_design_docs_component_page.tsx`
        ),
        context: pageContext,
        path: linkSlug,
      });
    });
  }
};
