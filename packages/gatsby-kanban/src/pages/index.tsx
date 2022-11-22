import React, { useContext } from "react";
import { Box, Button } from "@alexmcgovern/boondoggle.design";
import { FirebaseContext } from "@alexmcgovern/firebase";
import { Link, graphql } from "gatsby";

export default function FirebaseKanbanPage() {
  const { user } = useContext(FirebaseContext);
  const isLoggedIn = !!user;

  return (
    <Box as="section" marginY="spacing4">
      {/** —————————————————————————————————————————————————————————————————————————————
       * PAGE HEADER
       * ——————————————————————————————————————————————————————————————————————————————— */}
      <Box as="header">
        <Box as="h1">Firebase kanban</Box>

        <Box as="h2" fontSize="body_md" fontWeight="normal">
          Example full-stack app. A Jira clone, backed by Firestore.
        </Box>
        <Box as="p">
          <b>Note:</b> You must have an account in order to use the demo.
        </Box>

        <Box display="flex" gap="spacing1">
          <Button
            appearance="secondary"
            as={Link}
            to={isLoggedIn ? "/demo" : "/login"}
          >
            {isLoggedIn ? "Go to demo" : "Log in"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
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
