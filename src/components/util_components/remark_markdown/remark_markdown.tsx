import React from "react";
import rehypeReact, { Options } from "rehype-react";
import { Typography } from "../../atoms/typography/typography";

interface IRemarkMarkdown {
  htmlAst?: string;
}

const rehypeOptions: Options = {
  createElement: React.createElement,
  components: {
    // h1: ({ children }) => {
    //   return <Typography as="h1">{children}</Typography>;
    // },
  },
};

// @ts-ignore this will be refactored into MDX anyway
const renderAst = new rehypeReact(rehypeOptions).Compiler;

export default function RemarkMarkdown({ htmlAst }: IRemarkMarkdown) {
  return <>{renderAst(htmlAst)}</>;
}

RemarkMarkdown.defaultProps = {
  htmlAst: null,
};
