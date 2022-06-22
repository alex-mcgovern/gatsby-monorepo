import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/organisms/global_layout/global_layout";
import Seo from "../components/seo";

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
      <Layout title={siteTitle}>
        <Seo title="404: Not Found" />
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
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
