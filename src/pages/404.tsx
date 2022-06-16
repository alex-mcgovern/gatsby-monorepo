import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/organisms/layout/layout";
import Seo from "../components/seo";

interface NotFoundPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const NotFoundPage = ({ data }: NotFoundPageProps) => {
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
