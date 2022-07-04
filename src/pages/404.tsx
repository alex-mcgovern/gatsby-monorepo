import React from "react";
import { graphql } from "gatsby";
import Page from "../components/organisms/page/page";

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
      <Page title={siteTitle}>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Page>
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
