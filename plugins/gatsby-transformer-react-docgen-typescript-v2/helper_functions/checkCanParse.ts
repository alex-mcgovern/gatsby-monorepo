import { IPossibleSourceNode } from "../gatsby-node";
import checkIsJSX from "./checkIsJSX";
import checkIsSource from "./checkIsSource";
import { checkIsTSX } from "./isTSX";

export default function canParse(node: IPossibleSourceNode) {
  return node && (checkIsJSX(node) || checkIsTSX(node)) && checkIsSource(node);
}
