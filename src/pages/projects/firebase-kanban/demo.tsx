import React from "react";
import AuthenticatedPage from "../../../components/util_components/gatsby/authenticated_page";
import { Kanban } from "./components/Kanban";

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

const KanbanDemoPage = ({ data, location }: KanbanDemoPageProps) => {
  return <AuthenticatedPage component={Kanban} location={location} />;
};

export default KanbanDemoPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
