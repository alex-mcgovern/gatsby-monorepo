import { IPossibleSourceNode } from "../gatsby-node";

export default function checkIsSource(node: IPossibleSourceNode) {
  if (
    !node ||
    node.relativePath.indexOf("/example") !== -1 ||
    node.relativePath.indexOf(".docs") !== -1 ||
    node.relativePath.indexOf(".md") !== -1
  )
    return false;

  return true;
}
