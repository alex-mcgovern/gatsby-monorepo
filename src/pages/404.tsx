import React from "react";
import { graphql } from "gatsby";

interface INotFoundPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const NotFoundPage = ({ data }: INotFoundPageProps) => {
  const siteTitle = data.site.siteMetadata.title;
  if (siteTitle) {
    return (
      <>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </>
    );
  }
  return null;
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
