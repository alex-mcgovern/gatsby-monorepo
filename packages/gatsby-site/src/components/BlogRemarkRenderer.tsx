import React, { createElement } from "react";
import type { BoxProps } from "@alexmcgovern/boondoggle.design";
import { Box } from "@alexmcgovern/boondoggle.design";
import type { Options } from "rehype-react";
import rehypeReact from "rehype-react";

interface RemarkMarkdownProps extends BoxProps {
  htmlAst?: string;
}

const rehypeOptions: Options = {
  createElement,
};

// eslint-disable-next-line new-cap
const renderAst = new rehypeReact(rehypeOptions).Compiler;

export function RemarkMarkdown({ htmlAst, ...rest }: RemarkMarkdownProps) {
  return <Box {...rest}>{renderAst(htmlAst)}</Box>;
}
