import { parseFiles } from "@structured-types/api";
import glob from "glob";
import { PLUGIN_NAME } from "./constants";
export const onPreInit = () => {
    console.info(`${PLUGIN_NAME} plugin initializing`);
};
export const sourceNodes = async ({ actions, createNodeId, createContentDigest, }) => {
    const paths = await glob.sync("src/**/*.+(tsx|css.ts|d.ts)");
    const parsedTSExports = parseFiles(paths, {
        maxDepth: 5,
        collectSourceInfo: true,
    });
    if (Object.keys(parsedTSExports)?.length > 0) {
        Object.keys(parsedTSExports).map((exportKey) => {
            const currentExport = parsedTSExports[exportKey];
            if (currentExport.kind === 11) {
                if (currentExport &&
                    currentExport.name &&
                    currentExport.loc?.filePath) {
                    actions.createNode({
                        ...currentExport,
                        parent: null,
                        id: createNodeId(`${currentExport?.loc?.filePath}-${currentExport.name}`),
                        internal: {
                            contentDigest: createContentDigest(currentExport),
                            type: `TSFunction`,
                        },
                    });
                }
            }
            if (currentExport.kind === 14) {
                if (currentExport &&
                    currentExport.name &&
                    currentExport.loc?.filePath) {
                    actions.createNode({
                        ...currentExport,
                        parent: null,
                        id: createNodeId(`${currentExport?.loc?.filePath}-${currentExport.name}`),
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
