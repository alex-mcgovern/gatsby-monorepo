import React from "react";
import type { GetSprinklesArgs } from "@alexmcgovern/boondoggle.design";
import { Box, ListItem } from "@alexmcgovern/boondoggle.design";
import { createPathFromSegmentArray } from "@alexmcgovern/utils";
import { Link } from "gatsby";

const GRID_LAYOUT: GetSprinklesArgs["gridTemplateColumns"] = {
  desktop: "4x",
  tablet: "2x",
  mobile: "1x",
};

const POKEDEX_LINK = createPathFromSegmentArray(["en", "pokedex", "1"]);
const KANBAN_LINK = createPathFromSegmentArray(["projects", "firebase-kanban"]);
const DESIGN_SYSTEM_LINK = createPathFromSegmentArray([
  "projects",
  "boondoggle-design-system",
]);

const PROJECTS = [
  {
    title: "Boondoggle design system",
    description:
      "A POC for a lightweight styling framework and React component library built with Vanilla Extract",
    link: DESIGN_SYSTEM_LINK,
  },
  {
    title: "Firebase Kanban",
    description: "A sample fullstack app using Firebase to back a Jira clone.",
    link: KANBAN_LINK,
  },
  {
    title: "Multilingual Pokedex",
    description:
      "A working example of the task I set frontend candidates: 600+ page multilingual site backed by PokeAPI.",
    link: POKEDEX_LINK,
  },
];

export function HomeFeaturedProjects() {
  return (
    <Box marginY="spacing4">
      <Box as="h3">Stuff I made</Box>
      <Box
        as="section"
        marginY="spacing3"
        display="grid"
        gap="spacing2"
        gridTemplateColumns={GRID_LAYOUT}
      >
        {PROJECTS?.length > 0 &&
          PROJECTS.map((project) => {
            return (
              <ListItem
                as={Link}
                title={project.title}
                key={project.title}
                description={project.description}
                to={project.link}
              />
            );
          })}
      </Box>
    </Box>
  );
}
