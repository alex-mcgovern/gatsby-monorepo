import { parseFiles } from "@structured-types/api";
import fs from "fs";
import { GatsbyNode, Node, SourceNodesArgs } from "gatsby";
import glob from "glob";
import { PLUGIN_NAME } from "./constants";

// import addAnnotations from "./helper_functions/addAnnotations";

// import flattenProps from "./helper_functions/flattenProps";

export interface IPossibleSourceNode extends Node {
  loc: { filePath: string };
}

type TExtendedOnCreateNodeArgs = SourceNodesArgs & {
  node: IPossibleSourceNode;
};

export const onPreInit: GatsbyNode["onPreInit"] = () => {
  console.info(`${PLUGIN_NAME} plugin initializing`);
};

export const sourceNodes: GatsbyNode["sourceNodes"] = async ({
  actions,
  // loadNodeContent,
  createNodeId,
  createContentDigest,
}: TExtendedOnCreateNodeArgs) => {
  const paths = await glob.sync("src/**/*.+(tsx|css.ts|d.ts)");

  // get all TS objects (types, interfaces, functions, etc) as AST JSON
  const parsedTSExports = parseFiles(paths, {
    // scope: "all",
    maxDepth: 5,
    collectSourceInfo: true, // required   to get `loc.filePath`
  });

  if (Object.keys(parsedTSExports)?.length > 0) {
    const transformed = {
      mapIndex: Object.keys(parsedTSExports),
      parsedTSExports,
    };

    fs.writeFileSync(
      "./__mocks__/structured_types_mock.json",
      JSON.stringify(transformed, null, 2)
    );
    Object.keys(parsedTSExports).map((exportKey) => {
      const currentExport = parsedTSExports[exportKey];

      /* ——————————————————————————————————————————————————————————————————————————————
       *      FUNCTIONS
       *      defined in @structured-types/api/packages/api/src/types.ts
       *      see https://www.npmjs.com/package/@structured-types/api#docsoptions
       * ——————————————————————————————————————————————————————————————————————————————— */
      if (currentExport.kind === 11) {
        if (
          currentExport &&
          currentExport.name &&
          currentExport.loc?.filePath
        ) {
          actions.createNode({
            ...currentExport,
            parent: null, // override spread prop

            // relativePath: currentExport.loc?.filePath,

            id: createNodeId(
              `${currentExport?.loc?.filePath}-${currentExport.name}`
            ),
            // children: [],
            internal: {
              contentDigest: createContentDigest(currentExport),
              type: `TSFunction`,
            },
          });
        }
      }
      /* ——————————————————————————————————————————————————————————————————————————————
       *      INTERFACES
       *      defined in @structured-types/api/packages/api/src/types.ts
       *      see https://www.npmjs.com/package/@structured-types/api#docsoptions
       * ——————————————————————————————————————————————————————————————————————————————— */
      if (currentExport.kind === 14) {
        if (
          currentExport &&
          currentExport.name &&
          currentExport.loc?.filePath
        ) {
          actions.createNode({
            ...currentExport,
            parent: null, // override spread prop

            // relativePath: currentExport.loc?.filePath,

            id: createNodeId(
              `${currentExport?.loc?.filePath}-${currentExport.name}`
            ),
            // children: [],
            internal: {
              contentDigest: createContentDigest(currentExport),
              type: `TSInterface`,
            },
          });
        }

        // actions.createParentChildLink({ parent: node, child: metadataNode });
      }
    });
  }
};

// Add types fetched in `mdx.js` query in case no files are passed to infer from
// export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
//   ({ actions }) => {
//     const typeDefs = `
//     type TypeType @noInfer {
//       name: String
//     }
//     type TsType @noInfer {
//       name: String
//       raw: String
//     }
//     type defaultValue @noInfer {
//       value: String
//     }
//     type PropsType @noInfer {
//       beta: Boolean
//       name: String!
//       description: String
//       required: Boolean
//       type: TypeType
//       tsType: TsType
//       defaultValue: defaultValue
//       ${ANNOTATIONS.map(({ name, type }) => `${name}: ${type}`).join("\n")}
//     }
//     type ComponentMetadata implements Node @noInfer {
//       name: String!
//       description: String
//       props: [PropsType]
//     }
//   `;
//     actions.createTypes(typeDefs);
//   };
