import React, { useContext } from "react";
import { graphql } from "gatsby";
import { BoxNew } from "../../../components/atoms/box_new/box_new";
import { Button } from "../../../components/atoms/button/button";
import { FirebaseAuthContext } from "../../../context/firebase_context";
import { FirebaseKanbanPageProps } from "./firebase_kanban";

const FirebaseKanbanPage = ({ data }: FirebaseKanbanPageProps) => {
  const { site } = data;
  const siteTitle = site.siteMetadata.title || "Title";

  const { user } = useContext(FirebaseAuthContext);
  const isLoggedIn = !!user;

  return (
    <BoxNew as="section" marginY="spacing4">
      {/** —————————————————————————————————————————————————————————————————————————————
       *      PAGE HEADER
       * ——————————————————————————————————————————————————————————————————————————————— */}
      <BoxNew as="header">
        <BoxNew as="h1">Firebase kanban</BoxNew>

        <BoxNew
          as="h2"
          customisation={{
            fontSize: "body_md",
            fontWeight: "normal",
          }}
        >
          Example full-stack app. A Jira clone, backed by Firestore.
        </BoxNew>
        <BoxNew as="p">
          <b>Note:</b> You must have an account in order to use the demo.
        </BoxNew>

        <BoxNew display="flex" gap="spacing1">
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
        </BoxNew>
      </BoxNew>
    </BoxNew>
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
