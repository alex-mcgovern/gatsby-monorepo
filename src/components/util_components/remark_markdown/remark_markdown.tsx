import React from "react";
import rehypeReact, { Options } from "rehype-react";

interface IRemarkMarkdown {
  htmlAst?: string;
}

const rehypeOptions: Options = {
  createElement: React.createElement,
  components: {
    // h1: ({ children }) => {
    //   return <BoxNew as="h1">{children}</BoxNew>;
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
