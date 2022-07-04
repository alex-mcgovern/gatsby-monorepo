import React from "react";
import {
  BOX_CUSTOMISATION_MAX_WIDTH_FULL,
  BOX_CUSTOMISATION_SECTION_SPACING,
} from "../../../../utils/shared_props/box_props";
import { Box } from "../../../atoms/box/box";
import { Typography } from "../../../atoms/typography/typography";

interface SectionHomepageBrandedUserExperiencesProps {}

const SectionHomepageBrandedUserExperiences =
  ({}: SectionHomepageBrandedUserExperiencesProps) => {
    return (
      <Box
        customisation={{
          ...BOX_CUSTOMISATION_SECTION_SPACING,
        }}
      >
        <Typography
          customisation={{
            fontSize: "h6",
            fontWeight: "semibold",
            color: "accent_fg_1",
            textAlign: "center",
          }}
        >
          My mission
        </Typography>

        <Typography
          as="h2"
          customisation={{
            fontSize: "h2",
            fontWeight: "bold",
            color: "accent_fg_2",
            textAlign: "center",
          }}
        >
          Build great online experiences.
        </Typography>

        <Typography
          as="p"
          customisation={{
            textAlign: "center",
          }}
        >
          Coming from a design to development background, my working style is
          deeply rooted in creating the simplest, most performant UX and DevX,
          and optimizing for that at scale.
        </Typography>
      </Box>
    );
  };

export default SectionHomepageBrandedUserExperiences;
