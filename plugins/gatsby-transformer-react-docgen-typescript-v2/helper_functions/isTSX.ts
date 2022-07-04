import { IPossibleSourceNode } from "../gatsby-node";

export function checkIsTSX(node: IPossibleSourceNode) {
  return (
    node.internal.mediaType === `application/typescript` ||
    node.internal.mediaType === `text/tsx` ||
    node.extension === "tsx"
  );
}
