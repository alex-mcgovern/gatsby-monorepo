import { parseFiles } from "@structured-types/api";
import type { GatsbyNode, Node, SourceNodesArgs } from "gatsby";
import glob from "glob";
import { PLUGIN_NAME } from "./constants";

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
    maxDepth: 5,
    collectSourceInfo: true, // required   to get `loc.filePath`
  });

  if (Object.keys(parsedTSExports)?.length > 0) {
    Object.keys(parsedTSExports).map((exportKey) => {
      const currentExport = parsedTSExports[exportKey];

      /* -----------------------------------------------------------------------------—
       * FUNCTIONS
       * defined in @structured-types/api/packages/api/src/types.ts
       * see https://www.npmjs.com/package/@structured-types/api#docsoptions
       * ------------------------------------------------------------------------------- */
      if (currentExport.kind === 11) {
        if (
          currentExport &&
          currentExport.name &&
          currentExport.loc?.filePath
        ) {
          actions.createNode({
            ...currentExport,
            parent: null, // override spread prop
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
      /* -----------------------------------------------------------------------------—
       * INTERFACES
       * defined in @structured-types/api/packages/api/src/types.ts
       * see https://www.npmjs.com/package/@structured-types/api#docsoptions
       * ------------------------------------------------------------------------------- */
      if (currentExport.kind === 14) {
        if (
          currentExport &&
          currentExport.name &&
          currentExport.loc?.filePath
        ) {
          actions.createNode({
            ...currentExport,
            parent: null, // override spread prop
            id: createNodeId(
              `${currentExport?.loc?.filePath}-${currentExport.name}`
            ),
            internal: {
              contentDigest: createContentDigest(currentExport),
              type: `TSInterface`,
            },
          });
        }
      }
    });
  }
};
