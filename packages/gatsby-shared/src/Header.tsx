import React, { useCallback, useContext, useMemo } from "react";
import type {
  ButtonProps,
  DropdownItem,
} from "@alexmcgovern/boondoggle.design";
import {
  Box,
  Button,
  SingleSelect,
  ThemeContext,
} from "@alexmcgovern/boondoggle.design";
import { FirebaseContext } from "@alexmcgovern/firebase";
import { transformKebabCaseToSentenceCase } from "@alexmcgovern/utils";
import { faMoon, faShapes, faSun } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

interface IProjectsQueryResult {
  allProjects: {
    nodes: {
      path: string;
    }[];
  };
}

const NAV_BUTTON_COMMON_PROPS: ButtonProps = {
  appearance: "uiLink",
  color: "neutral",
};

export function Header() {
  const { dark, toggleDark } = useContext(ThemeContext);
  const { user, firebaseAuth } = useContext(FirebaseContext);

  const handleSignOut = useCallback(() => {
    return firebaseAuth.signOut();
  }, [firebaseAuth]);

  /** Auto-populate project pages dropdown */

  const allProjects = undefined;

  // const { allProjects }: IProjectsQueryResult = useStaticQuery(
  //   graphql`
  //     query {
  //       allProjects: allSitePage(filter: { path: { glob: "/projects/*" } }) {
  //         nodes {
  //           path
  //         }
  //       }
  //     }
  //   `
  // );

  const projectsDropdownItems: Array<DropdownItem> = useMemo(() => {
    return allProjects?.nodes?.map((projectPath) => {
      const trimmedPath = projectPath.path.replace(/\/projects\//g, "");
      const title = transformKebabCaseToSentenceCase(trimmedPath);
      return {
        link: projectPath.path,
        value: title,
        label: title,
      };
    });
  }, [allProjects]);

  return (
    <Box
      as="nav"
      display="flex"
      justifyContent="space-between"
      paddingY="spacing2"
    >
      {/** ————————————————————————————————————————————————————————————————————————————
       * LEFT HAND SIDE
       * ——————————————————————————————————————————————————————————————————————————————— */}
      <Button
        {...NAV_BUTTON_COMMON_PROPS}
        as={Link}
        iconLeading={faShapes}
        to="/"
      >
        Alex McGovern
      </Button>

      {/** ————————————————————————————————————————————————————————————————————————————
       * RIGHT HAND SIDE
       * ——————————————————————————————————————————————————————————————————————————————— */}
      <Box as="menu" display="flex" alignItems="center" gap="spacing2">
        {/** Blog page */}
        <Button {...NAV_BUTTON_COMMON_PROPS} as={Link} to="/blog">
          Blog
        </Button>

        {/** Projects dropdown */}
        {projectsDropdownItems && (
          <SingleSelect
            initialInputValue="Projects"
            id="projects-dropdown"
            items={projectsDropdownItems}
            label="Projects"
            buttonProps={NAV_BUTTON_COMMON_PROPS}
          />
        )}

        {/** Contact page */}
        <Button {...NAV_BUTTON_COMMON_PROPS} as={Link} to="/contact">
          Get in touch
        </Button>

        {/** Log in/out */}
        {firebaseAuth && user ? (
          <Button {...NAV_BUTTON_COMMON_PROPS} onClick={handleSignOut}>
            Log out
          </Button>
        ) : (
          <Button {...NAV_BUTTON_COMMON_PROPS} as={Link} to="/login">
            Log in
          </Button>
        )}

        {/** Light/dark mode toggle */}
        <Button
          iconLeading={dark ? faSun : faMoon}
          id="header-dark-mode-button"
          onClick={toggleDark}
          size="md_square"
          {...NAV_BUTTON_COMMON_PROPS}
        />
      </Box>
    </Box>
  );
}
