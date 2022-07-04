import { IPossibleSourceNode } from "../gatsby-node";

export default function checkIsJSX(node: IPossibleSourceNode) {
  return (
    node.internal.mediaType === `application/javascript` ||
    node.internal.mediaType === `text/jsx`
  );
}
