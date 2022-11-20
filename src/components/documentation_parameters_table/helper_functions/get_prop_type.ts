// import { string } from "prop-types";
// import { humanize } from "./humanize_prop";

interface IKindMap {
  [key: number]: string;
}
const KIND_MAP: IKindMap = {
  1: "string",
  2: "number",
  3: "boolean",
  // 4: "Union",
  4: "enum", // manually overriding return type here as isn't useful for end-users to know this is a Union type
  5: "enum",
  6: "tuple",
  7: "rest",
  8: "undefined",
  9: "unknown",
  10: "null",
  11: "function",
  12: "void",
  13: "class",
  14: "interface",
  15: "type",
  16: "array",
  17: "any",
  20: "index",
  21: "constructor",
  22: "getter",
  23: "setter",
  24: "big int",
  25: "component",
  26: "object",
  27: "namespace",
  28: "reg ex",
};

export function resolveKindToTypeString(kind: number) {
  return KIND_MAP[kind] || "unknown";

  // return humanize(prop.type);
}
