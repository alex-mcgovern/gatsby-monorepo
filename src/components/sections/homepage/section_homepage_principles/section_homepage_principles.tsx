import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getSprinkles } from "../../../../styles/functional_classnames.css";
import { BoxNew } from "../../../atoms/box_new/box_new";

interface ISectionHomepagePrinciples {}

type TGridContent = {
  icon: IconProp;
  title: string;
  body: string;
}[];

const ICON_CLASSNAMES = getSprinkles({
  marginBottom: "spacing1",
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
    <BoxNew marginY="spacing4">
      <BoxNew
        as="h3"
        variant={{
          color: "accent_fg_1",
        }}
      >
        My engineering principles
      </BoxNew>
      <BoxNew
        marginY="spacing4"
        display="grid"
        gap="spacing2"
        gridTemplateColumns={{
          mobile: "1x",
          tablet: "2x",
          desktop: "2x",
        }}
      >
        {GRID_CONTENT.map((content, index) => {
          return (
            <BoxNew>
              <FontAwesomeIcon
                className={ICON_CLASSNAMES}
                size="3x"
                icon={content.icon}
              />
              <BoxNew
                variant={{
                  color: "accent_fg_2",
                }}
                customisation={{
                  fontSize: "h6",
                  fontWeight: "medium",
                  marginBottom: "spacing1",
                }}
              >
                {content.title}
              </BoxNew>
              <BoxNew
                customisation={{
                  fontSize: "body_lg",
                }}
              >
                {content.body}
              </BoxNew>
            </BoxNew>
          );
        })}
      </BoxNew>
    </BoxNew>
  );
}

SectionHomepagePrinciples.defaultProps = {
  placeholderProp: null,
};
