import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { graphql, useStaticQuery } from "gatsby";
import { FirebaseAuthContext } from "../../../context/firebase_context";
import { ThemeContext } from "../../../context/theme_context";
import { convertKebabCaseToSentenceCase } from "../../../utils/convert_kebab_case_to_sentence_case/convert_kebab_case_to_sentence_case";
import { Box } from "../../atoms/box/box";
import { Button } from "../../atoms/button/button";
import { DropdownSingleSelect } from "../Dropdown/DropdownSingleSelect";

interface IProjectsQueryResult {
  allProjects: {
    nodes: {
      path: string;
    }[];
  };
}

export default function Header() {
  const { dark, toggleDark } = useContext(ThemeContext);
  const { user, firebaseAuth } = useContext(FirebaseAuthContext);

  /** —————————————————————————————————————————————
   *      AUTO-POPULATE PROJECTS DROPDOWN
   * ——————————————————————————————————————————————— */

  const { allProjects }: IProjectsQueryResult = useStaticQuery(
    graphql`
      query {
        allProjects: allSitePage(filter: { path: { glob: "/projects/*" } }) {
          nodes {
            path
          }
        }
      }
    `
  );

  const projectPaths = allProjects?.nodes;
  const projectDropdownListItems = projectPaths?.map((projectPath) => {
    const trimmedPath = projectPath.path.replace(/\/projects\//g, "");
    const title = convertKebabCaseToSentenceCase(trimmedPath);
    return {
      link: projectPath.path,
      value: title,
      label: title,
    };
  });

  return (
    <Box
      as="nav"
      customisation={{
        display: "flex",
        justifyContent: "space-between",
        marginY: "spacing2",
      }}
    >
      {/** ————————————————————————————————————————————————————————————————————————————
       *      LEFT HAND SIDE
       * ——————————————————————————————————————————————————————————————————————————————— */}
      <Button
        id="header-home-button"
        iconLeading="shapes"
        variant={{ size: "md", appearance: "tertiary" }}
        to="/"
        title="Alex McGovern"
      />
      {/** ————————————————————————————————————————————————————————————————————————————
       *      RIGHT HAND SIDE
       * ——————————————————————————————————————————————————————————————————————————————— */}
      <Box
        as="menu"
        customisation={{
          display: "flex",
          alignItems: "center",
          gap: "spacing2",
        }}
      >
        {/** ————————————————————
         *      BLOG BUTTON
         * ——————————————————————— */}
        <Button
          id="header-blog-button"
          title="Blog"
          to="/blog"
          variant={{ size: "md", appearance: "tertiary" }}
        />
        {/** ————————————————————
         *      PROJECTS DROPDOWN
         * ——————————————————————— */}
        {projectDropdownListItems && (
          <DropdownSingleSelect
            buttonTitle="Projects"
            initialInputValue="Projects"
            id="projects-dropdown"
            items={projectDropdownListItems}
            label="Projects"
            variant={{ size: "md", appearance: "tertiary" }}
          />
        )}
        {/** ————————————————————
         *      CONTACT BUTTON
         * ——————————————————————— */}
        <Button
          id="header-connect-button"
          title="Contact"
          to="/contact"
          variant={{ size: "md", appearance: "tertiary" }}
        />
        {/** ————————————————————
         *      LOGIN BUTTON
         * ——————————————————————— */}
        {firebaseAuth && user ? (
          <Button
            id="header-connect-button"
            title="Log out"
            onClick={() => signOut(firebaseAuth)}
            variant={{ size: "md", appearance: "tertiary" }}
          />
        ) : (
          <Button
            id="header-connect-button"
            title="Login"
            to="/login"
            variant={{ size: "md", appearance: "tertiary" }}
          />
        )}
        {/** ————————————————————
         *      LIGHT / DARK TOGGLE
         * ——————————————————————— */}
        <Button
          iconLeading={dark ? "sun" : "moon"}
          id="header-dark-mode-button"
          onClick={toggleDark}
          variant={{ size: "md", appearance: "tertiary" }}
        />
      </Box>
    </Box>
  );
}
