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

export function KanbanDemoPage({ data, location }: KanbanDemoPageProps) {
  return <AuthenticatedRoute component={Kanban} location={location} />;
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
