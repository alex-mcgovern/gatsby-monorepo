import React from "react";
import type { GetSprinklesArgs } from "@alexmcgovern/boondoggle.design";
import { Box, getSprinkles } from "@alexmcgovern/boondoggle.design";
import LogoCypress from "../images/svg/logos/logo_cypress.svg";
import LogoGatsby from "../images/svg/logos/logo_gatsby.svg";
import LogoRadix from "../images/svg/logos/logo_radix.svg";
import LogoReact from "../images/svg/logos/logo_react.svg";
import LogoSASS from "../images/svg/logos/logo_sass.svg";
import LogoTestingLibrary from "../images/svg/logos/logo_testing_library.svg";
import LogoTypescript from "../images/svg/logos/logo_typescript.svg";
import LogoVanillaExtract from "../images/svg/logos/logo_vanilla_extract.svg";

const LOGO_CLASSNAMES = getSprinkles({
  padding: "spacing2",
  background: "neutral_secondary_base",
  borderRadius: "sm",
  aspectRatio: "square",
  boxShadow: "lg",
});

const GRID_LAYOUT: GetSprinklesArgs["gridTemplateColumns"] = {
  desktop: "7_5",
  tablet: "1x",
};

export function SectionHomepageTechStack() {
  return (
    <Box
      as="section"
      marginY="spacing5"
      display="grid"
      gap="spacing4"
      alignItems="center"
      gridTemplateColumns={GRID_LAYOUT}
    >
      <Box display="grid" gridTemplateColumns="4x" gap="spacing2">
        <LogoReact className={LOGO_CLASSNAMES} />
        <LogoTypescript className={LOGO_CLASSNAMES} />
        <LogoGatsby className={LOGO_CLASSNAMES} />
        <LogoTestingLibrary className={LOGO_CLASSNAMES} />
        <LogoCypress className={LOGO_CLASSNAMES} />
        <LogoSASS className={LOGO_CLASSNAMES} />
        <LogoVanillaExtract className={LOGO_CLASSNAMES} />
        <LogoRadix className={LOGO_CLASSNAMES} />
      </Box>

      <Box>
        <Box
          color="accent_text_lowContrast"
          fontSize="h6"
          fontWeight="medium"
          marginBottom="spacing1"
        >
          Modern tech stack
        </Box>
        <h3>These are a few of my favorite things...</h3>
        <p>
          I ❤️ React, TypeScript, GatsbyJS, SASS, React Testing Library and
          Cypress.
        </p>
      </Box>
    </Box>
  );
}
