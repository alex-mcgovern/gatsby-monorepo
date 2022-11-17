import React from "react";
import { BoxNew } from "../../../atoms/box_new/box_new";

interface SectionHomepageBrandedUserExperiencesProps {}

const SectionHomepageBrandedUserExperiences =
  ({}: SectionHomepageBrandedUserExperiencesProps) => {
    return (
      <BoxNew marginY="spacing4">
        <BoxNew
          variant={{
            color: "accent_fg_1",
          }}
          customisation={{
            fontSize: "h6",
            fontWeight: "medium",
            textAlign: "center",
          }}
        >
          My mission
        </BoxNew>

        <BoxNew
          as="h2"
          variant={{
            color: "accent_fg_2",
          }}
          customisation={{
            fontSize: "h2",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Build great online experiences.
        </BoxNew>

        <BoxNew
          as="p"
          customisation={{
            textAlign: "center",
          }}
        >
          Coming from a design to development background, my working style is
          deeply rooted in creating the simplest, most performant UX and DevX,
          and optimizing for that at scale.
        </BoxNew>
      </BoxNew>
    );
  };

export default SectionHomepageBrandedUserExperiences;
