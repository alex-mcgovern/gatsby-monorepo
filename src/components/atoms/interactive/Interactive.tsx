import React, { ReactNode, forwardRef } from "react";
import { Link as GatsbyLink } from "gatsby";

// This is coming from Gatsby's internals: https://github.com/gatsbyjs/gatsby/blob/2975c4d1271e3da52b531ad2f49261c362e5ae13/packages/gatsby-link/src/index.js#L42-L46.
const isExternalLink = (path: string) =>
  path?.startsWith(`http://`) ||
  path?.startsWith(`https://`) ||
  path?.startsWith(`//`);

export const Interactive = forwardRef(({ children, ...props }, ref) => {
  const isLink = !!props.to;

  let Element: ReactNode = "button";
  let dynamicProps = {
    ...props,
    ref,
  };

  if (isLink) {
    if (props.target === "_blank") {
      Element = "a";
      dynamicProps = {
        ...dynamicProps,
        href: props.to,
        rel: "noopener noreferrer",
        target: "_blank",
      };
    } else if (isExternalLink(props.to)) {
      Element = "a";
      dynamicProps = {
        ...dynamicProps,
        href: props.to,
      };
    } else {
      Element = GatsbyLink;
    }
  }

  return <Element {...dynamicProps}>{children}</Element>;
});
