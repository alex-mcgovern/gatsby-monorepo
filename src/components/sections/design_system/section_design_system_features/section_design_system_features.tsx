import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import { BOX_PROPS_CONTAINED } from "../../../../utils/shared_props/box_props";
import Box from "../../../atoms/box/box";
import Typography from "../../../atoms/typography/typography";

interface ISectionDesignSystemFeatures {}

type TGridContent = {
  icon: IconProp;
  title: string;
  body: string;
}[];

const ICON_CLASSNAMES = getFunctionalClassNames({
  marginBottom: "spacing1",
  color: "primary_solid_base",
});

const GRID_CONTENT: TGridContent = [
  {
    title: "Type-safe styles",
    icon: "file-shield",
    body: "Frontend performance directly impacts UX and SEO — yet is often poorly optimized. I build systems for performance from the ground up.",
  },
  {
    title: "Simple customisation",
    icon: "paint-roller",
    body: "Accessible systems make the web better for everyone. I believe in standardised, unified approaches to managing a11y, and automated accessibility testing at scale.",
  },
  {
    title: "Highly accessible",
    icon: "universal-access",
    body: "Accessible systems make the web better for everyone. I believe in standardised, unified approaches to managing a11y, and automated accessibility testing at scale.",
  },
];

export default function SectionDesignSystemFeatures({}: ISectionDesignSystemFeatures) {
  return (
    <Box {...BOX_PROPS_CONTAINED} paddingY="spacing10">
      <Typography
        fontSize="h6"
        fontWeight="medium"
        color="accent_text_lowContrast"
        // marginBottom="spacing6"
      >
        What is BoonDoggle?
      </Typography>
      <Typography
        as="h2"
        fontSize="h4"
        fontWeight="bold"
        marginBottom="spacing6"
        maxWidth="gridWidthSmall"
      >
        An example of my approach to building scalable, theme-able components
      </Typography>
      <Box
        display="grid"
        gap="spacing3"
        gridTemplateColumns={{
          mobile: "1x",
          tablet: "2x",
          desktop: "3x",
        }}
      >
        {GRID_CONTENT.map((content, index) => {
          return (
            <Box dataSal="slide-up" dataSalDelay={index * 100}>
              <FontAwesomeIcon
                className={ICON_CLASSNAMES}
                size="3x"
                icon={content.icon}
              />
              <Typography
                fontSize="h6"
                color="primary_text_highContrast"
                fontWeight="semibold"
                marginBottom="spacing1"
              >
                {content.title}
              </Typography>
              <Typography fontSize="body_sm">{content.body}</Typography>
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
