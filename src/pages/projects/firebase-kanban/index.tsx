import React, { useContext } from "react";
import { graphql } from "gatsby";
import { Box } from "../../../components/atoms/box/box";
import { Button } from "../../../components/atoms/button/button";
import { Typography } from "../../../components/atoms/typography/typography";
import { FirebaseAuthContext } from "../../../context/firebase_context";
import { BOX_CUSTOMISATION_SECTION_SPACING } from "../../../utils/shared_props/box_props";
import { FirebaseKanbanPageProps } from "./firebase_kanban";

const FirebaseKanbanPage = ({ data }: FirebaseKanbanPageProps) => {
  const { site } = data;
  const siteTitle = site.siteMetadata.title || "Title";

  const { user } = useContext(FirebaseAuthContext);
  const isLoggedIn = !!user;

  return (
    <Box
      as="section"
      customisation={{
        ...BOX_CUSTOMISATION_SECTION_SPACING,
      }}
    >
      {/** —————————————————————————————————————————————————————————————————————————————
       *      PAGE HEADER
       * ——————————————————————————————————————————————————————————————————————————————— */}
      <Box as="header" customisation={{}}>
        <Typography as="h1">Firebase kanban</Typography>

        <Typography
          as="h2"
          customisation={{
            fontSize: "body_md",
            fontWeight: "normal",
          }}
        >
          Example full-stack app. A Jira clone, backed by Firestore.
        </Typography>
        <Typography as="p">
          <b>Note:</b> You must have an account in order to use the demo.
        </Typography>

        <Box customisation={{ display: "flex", gap: "spacing1" }}>
          <Button
            variant={{
              appearance: "primary",
            }}
            title={isLoggedIn ? "Go to demo" : "Log in"}
            to={isLoggedIn ? "/projects/firebase-kanban/demo" : "/login"}
          />
          <Button
            variant={{
              appearance: "secondary",
            }}
            title={"Read blog post"}
            to={"/blog"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FirebaseKanbanPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
