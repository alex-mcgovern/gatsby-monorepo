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
import { Wave } from "../../../atoms/wave/wave";

interface ISectionHomepagePrinciples {}

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
    title: "Performance",
    icon: "stopwatch",
    body: "Frontend performance directly impacts UX and SEO — yet is often poorly optimized. I build systems for performance from the ground up.",
  },
  {
    title: "Accessibility",
    icon: "universal-access",
    body: "Accessible systems make the web better for everyone. I believe in standardised, unified approaches to managing a11y, and automated accessibility testing at scale.",
  },
  {
    title: "Observability",
    icon: "chart-line",
    body: "Accessible systems make the web better for everyone. I believe in standardised, unified approaches to managing a11y, and automated accessibility testing at scale.",
  },
  {
    title: "Scalability",
    icon: "rocket",
    body: "Accessible systems make the web better for everyone. I believe in standardised, unified approaches to managing a11y, and automated accessibility testing at scale.",
  },
  {
    title: "Simplicity",
    icon: "brain",
    body: "Accessible systems make the web better for everyone. I believe in standardised, unified approaches to managing a11y, and automated accessibility testing at scale.",
  },
];

export default function SectionHomepagePrinciples({}: ISectionHomepagePrinciples) {
  return (
    <Box
      customisation={{
        ...BOX_CUSTOMISATION_SECTION_SPACING,
      }}
    >
      <Typography
        as="h3"
        customisation={{
          color: "accent_fg_1",
        }}
      >
        My engineering principles
      </Typography>
      <Box
        customisation={{
          marginY: "spacing4",
          display: "grid",
          gap: "spacing2",
          gridTemplateColumns: {
            mobile: "1x",
            tablet: "2x",
            desktop: "2x",
          },
        }}
      >
        {GRID_CONTENT.map((content, index) => {
          return (
            <Box>
              <FontAwesomeIcon
                className={ICON_CLASSNAMES}
                size="3x"
                icon={content.icon}
              />
              <Typography
                customisation={{
                  fontSize: "h6",
                  fontWeight: "semibold",
                  color: "accent_fg_2",
                  marginBottom: "spacing1",
                }}
              >
                {content.title}
              </Typography>
              <Typography
                customisation={{
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

SectionHomepagePrinciples.defaultProps = {
  placeholderProp: null,
};
