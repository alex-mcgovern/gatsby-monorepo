import * as React from "react";
import Box from "../../../atoms/box/box";
import Button from "../../../atoms/button/button";
import Typography from "../../../atoms/typography/typography";
import Wave from "../../../atoms/wave/wave";

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
            Proof-of-concept for a lightweight, modern design system and
            component library built on top of Vanilla Extract and RadixUI.
          </Typography>

          <Box
            marginY="spacing3"
            display="flex"
            gap="spacing1"
            justifyContent="center"
          >
            <Button
              trailingIcon="arrow-right"
              title="Documentation"
              size="lg"
              to="/projects/design-system/components"
            />
            <Button
              // trailingIcon="arrow-right"
              title="Read the blog post"
              size="lg"
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
