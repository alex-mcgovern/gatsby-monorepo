export const PLUGIN_NAME = "gatsby-transformer-react-docgen-typescript-v2";

export const ANNOTATIONS = [
  {
    regex: /@deprecated/,
    name: "deprecated",
    type: "Boolean",
  },
  {
    regex: /@hide/,
    name: "hide",
    type: "Boolean",
  },
  {
    regex: /@beta/,
    name: "beta",
    type: "Boolean",
  },
  {
    regex: /@propType (\w+|['"](.+)['"])\s*/,
    name: "annotatedType",
    type: "String",
  },
];
