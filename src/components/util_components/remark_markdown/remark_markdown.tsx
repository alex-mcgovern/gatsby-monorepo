import React from "react";
import rehypeReact, { Options } from "rehype-react";
import Typography from "../../atoms/typography/typography";

interface IRemarkMarkdown {
  htmlAst?: string;
}

const rehypeOptions: Options = {
  createElement: React.createElement,
  components: {
    h1: ({ children }) => {
      return (
        <Typography fontSize="h1" as="h1" marginBottom="spacing3">
          {children}
        </Typography>
      );
    },
    h2: ({ children }) => {
      return (
        <Typography fontSize="h2" as="h2" marginY="spacing6">
          {children}
        </Typography>
      );
    },
    h3: ({ children }) => {
      return (
        <Typography fontSize="h3" as="h3" marginY="spacing6">
          {children}
        </Typography>
      );
    },
    h4: ({ children }) => {
      return (
        <Typography fontSize="h4" as="h4">
          {children}
        </Typography>
      );
    },
    h5: ({ children }) => {
      return (
        <Typography fontSize="h5" as="h5">
          {children}
        </Typography>
      );
    },
    h6: ({ children }) => {
      return (
        <Typography fontSize="h6" as="h6">
          {children}
        </Typography>
      );
    },
  },
};

const renderAst = new rehypeReact(rehypeOptions).Compiler;

export default function RemarkMarkdown({ htmlAst }: IRemarkMarkdown) {
  return <>{renderAst(htmlAst)}</>;
}

RemarkMarkdown.defaultProps = {
  htmlAst: null,
};
