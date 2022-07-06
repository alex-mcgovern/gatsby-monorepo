import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import {
  BOX_CUSTOMISATION_MAX_WIDTH_FULL,
  BOX_CUSTOMISATION_SECTION_SPACING,
} from "../../../../utils/shared_props/box_props";
import { Box } from "../../../atoms/box/box";
import { Typography } from "../../../atoms/typography/typography";

interface ISectionDesignSystemFeatures {}

type TGridContent = {
  icon: IconProp;
  title: string;
  body: string;
}[];

const ICON_CLASSNAMES = getFunctionalClassNames({
  marginBottom: "spacing1",
  color: "accent_solid_1",
});

const GRID_CONTENT: TGridContent = [
  {
    title: "Low overhead",
    icon: "weight-scale",
    body: "Zero-runtime styles & a few, very re-usable components.",
  },

  {
    title: "Simple customisation",
    icon: "paint-roller",
    body: "Most components share a dead-simple customisation API based on semantic CSS.",
  },
  {
    title: "Highly accessible",
    icon: "universal-access",
    body: "Fully ARIA and WCAG compliant, with consistent focus handling and keyboard navigation.",
  },
  {
    title: "Highly extensible",
    icon: "plug-circle-plus",
    body: "Built with UI libraries like Downshift.js and React Hook Form in mind — or add your own solution.",
  },
  {
    title: "Type-safe styles",
    icon: "file-shield",
    body: "Styling and customisations are type-safe, thanks to Vanilla Extract.",
  },
  {
    title: "Self documenting",
    icon: "book",
    body: "Documentation is extracted from TS typings, therefore always up to date.",
  },
];

export default function SectionDesignSystemFeatures({}: ISectionDesignSystemFeatures) {
  return (
    <Box
      customisation={{
        ...BOX_CUSTOMISATION_SECTION_SPACING,
      }}
    >
      <Typography
        as="h3"
        customisation={
          {
            // fontWeight: "semibold",
          }
        }
      >
        What's it all about?
      </Typography>
      <Box
        customisation={{
          display: "grid",
          marginTop: "spacing3",
          gap: "spacing3",
          gridTemplateColumns: {
            mobile: "1x",
            tablet: "2x",
            desktop: "3x",
          },
        }}
      >
        {GRID_CONTENT.map((content, index) => {
          return (
            <Box>
              <FontAwesomeIcon
                className={ICON_CLASSNAMES}
                size="2x"
                icon={content.icon}
              />
              <Typography
                customisation={{
                  fontSize: "body_lg",
                  fontWeight: "semibold",
                  color: "accent_fg_2",
                  marginTop: "spacing1",
                }}
              >
                {content.title}
              </Typography>
              <Typography
                customisation={{
                  marginTop: "spacing1",
                  fontSize: "body_lg",
                }}
              >
                {content.body}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

SectionDesignSystemFeatures.defaultProps = {
  placeholderProp: null,
};
