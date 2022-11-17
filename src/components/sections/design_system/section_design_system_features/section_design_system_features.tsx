import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BoxNew } from "../../../atoms/box_new/box_new";
import * as styles from "./section_design_system_features.css";

interface ISectionDesignSystemFeatures {}

type TGridContent = {
  icon: IconProp;
  title: string;
  body: string;
}[];

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
    <BoxNew marginY="spacing4">
      <BoxNew as="h3">What's it all about?</BoxNew>
      <BoxNew
        display="grid"
        marginTop="spacing3"
        gap="spacing2"
        gridTemplateColumns={{
          mobile: "1x",
          tablet: "2x",
          desktop: "3x",
        }}
      >
        {GRID_CONTENT.map((content, index) => {
          return (
            <BoxNew>
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={content.icon}
              />
              <BoxNew
                variant={{
                  color: "accent_fg_2",
                }}
                fontSize="body_lg"
                marginTop="spacing2"
              >
                {content.title}
              </BoxNew>
              <BoxNew fontSize="body_lg" marginTop="spacing2">
                {content.body}
              </BoxNew>
            </BoxNew>
          );
        })}
      </BoxNew>
    </BoxNew>
  );
}

SectionDesignSystemFeatures.defaultProps = {
  placeholderProp: null,
};
