import React from "react";
import { AuthenticatedRoute } from "@alexmcgovern/gatsby-shared";
import { graphql } from "gatsby";
import { Kanban } from "../components/Kanban";

export interface KanbanDemoPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };

  location: Location;
}

export default function KanbanDemoPage({
  data,
  location,
}: KanbanDemoPageProps) {
  return <AuthenticatedRoute returnTo="/demo" component={Kanban} />;
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
