import React from "react";
import { BOX_PROPS_CONTAINED } from "../../../../utils/shared_props/box_props";
import Box from "../../../atoms/box/box";
import Typography from "../../../atoms/typography/typography";

interface SectionHomepageBrandedUserExperiencesProps {}

const SectionHomepageBrandedUserExperiences =
  ({}: SectionHomepageBrandedUserExperiencesProps) => {
    return (
      <Box {...BOX_PROPS_CONTAINED} gap="spacing3" marginY="spacing10">
        <Typography
          fontSize="h6"
          fontWeight="medium"
          color="accent_text_lowContrast"
          textAlign="center"
          // marginBottom="spacing6"
        >
          My mission
        </Typography>
        <Typography
          fontSize="h2"
          as="h2"
          fontWeight="bold"
          color="primary_text_highContrast"
          textAlign="center"
          // marginBottom="spacing6"
        >
          Build great online experiences.
        </Typography>
        <p>
          Coming from a design to development background, my working style is
          deeply rooted in creating the simplest, most performant UX and DevX,
          and optimizing for that at scale.
        </p>
      </Box>
    );
  };

export default SectionHomepageBrandedUserExperiences;
