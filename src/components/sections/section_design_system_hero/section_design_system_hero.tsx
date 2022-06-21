import * as React from "react";
import DesktopAnimation from "../../../images/svg/animations/animation_v5.svg";
import { RESPONSIVE_MAX_WIDTH_PROPS } from "../../../utils/shared_props/box_props";
import Box from "../../atoms/box/box";
import Button from "../../atoms/button/button";
import Typography from "../../atoms/typography/typography";
import Wave from "../../atoms/wave/wave";
import { animationWrapper } from "./section_design_system_hero.css";

interface ISectionDesignSystemHero {
  bio?: string;
}

const SectionDesignSystemHero = ({ bio }: ISectionDesignSystemHero) => {
  return (
    <Box as="section" backgroundImage="gradient_secondary">
      <Box
        paddingTop="spacing24"
        paddingBottom="spacing16"
        marginX="auto"
        maxWidth="gridWidthSmall"
        paddingX="spacing2"
      >
        <Box dataSal="slide-up">
          <Typography
            as="h1"
            fontSize="h1"
            fontWeight="bold"
            textAlign="center"
            // marginBottom="spacing0"
          >
            BobUI
          </Typography>
          <Typography
            as="p"
            fontSize="body_lg"
            textAlign="center"
            marginTop="none"
            marginBottom="spacing3"
          >
            (I couldn't think of a better name)
          </Typography>
          <Typography
            as="h2"
            fontSize="h6"
            fontWeight="bold"
            textAlign="center"
          >
            A lightweight, modern design system and component library built on
            top of Vanilla Extract and RadixUI.
          </Typography>

          <Box
            marginY="spacing3"
            display="flex"
            gap="spacing1"
            justifyContent="center"
          >
            <Button
              trailingIcon="arrow-right"
              title="Get in touch"
              to="/contact/"
            />
            <Button
              // trailingIcon="arrow-right"
              title="Read an intro blog post"
              to="/hello-world/"
              variant="secondary"
            />
          </Box>
        </Box>
      </Box>
      <Wave color="neutral_background" waveVariant="bottom" />
    </Box>
  );
};

export default SectionDesignSystemHero;
