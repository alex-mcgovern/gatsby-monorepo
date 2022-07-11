import React from "react";
import { createUrlPathFromArray } from "../../../utils/create_url_from_path_array/create_url_path_from_array";
import {
  BOX_CUSTOMISATION_MAX_WIDTH_FULL,
  BOX_CUSTOMISATION_SECTION_SPACING,
} from "../../../utils/shared_props/box_props";
import { Box } from "../../atoms/box/box";
import { Typography } from "../../atoms/typography/typography";
import { ListItem } from "../../molecules/list_item/list_item";

interface ISectionFeaturedProjects {}

const POKEDEX_LINK = createUrlPathFromArray(["en", "pokedex", "1"]);
const KANBAN_LINK = createUrlPathFromArray(["projects", "firebase-kanban"]);
const DESIGN_SYSTEM_LINK = createUrlPathFromArray([
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

export const SectionFeaturedProjects = ({}: ISectionFeaturedProjects) => {
  return (
    <Box
      customisation={{
        ...BOX_CUSTOMISATION_SECTION_SPACING,
      }}
    >
      {/* —————————————————————————————————————————————
       *      PROJECTS SECTION HEADER
       * ——————————————————————————————————————————————— */}

      <Typography as="h3">Stuff I made</Typography>

      {/* —————————————————————————————————————————————
       *      PROJECTS GRID
       * ——————————————————————————————————————————————— */}

      <Box
        as="section"
        customisation={{
          marginY: "spacing3",
          display: "grid",
          gap: "spacing2",
          gridTemplateColumns: { desktop: "4x", tablet: "2x", mobile: "1x" },
        }}
      >
        {PROJECTS?.length > 0 &&
          PROJECTS.map((project) => {
            return (
              <ListItem
                title={project.title}
                // subtitle={post.frontmatter.date}
                description={project.description}
                link={project.link}
                // image={post.frontmatter.cover}
              />
            );
          })}
      </Box>
    </Box>
  );
};
