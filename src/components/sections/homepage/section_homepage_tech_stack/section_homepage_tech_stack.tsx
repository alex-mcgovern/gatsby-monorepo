import React from "react";
import LogoCypress from "../../../../images/svg/logos/logo_cypress.svg";
import LogoGatsby from "../../../../images/svg/logos/logo_gatsby.svg";
import LogoRadix from "../../../../images/svg/logos/logo_radix.svg";
import LogoReact from "../../../../images/svg/logos/logo_react.svg";
import LogoSASS from "../../../../images/svg/logos/logo_sass.svg";
import LogoTestingLibrary from "../../../../images/svg/logos/logo_testing_library.svg";
import LogoTypescript from "../../../../images/svg/logos/logo_typescript.svg";
import LogoVanillaExtract from "../../../../images/svg/logos/logo_vanilla_extract.svg";
import { getFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import {
  RESPONSIVE_MAX_WIDTH_PROPS,
  SECTION_PROPS,
} from "../../../../utils/shared_props/box_props";
import Box from "../../../atoms/box/box";
import Typography from "../../../atoms/typography/typography";

interface ISectionHomepageTechStack {
  placeholderProp?: undefined;
}

const ICON_CLASSNAMES = getFunctionalClassNames({
  padding: "spacing3",
  backgroundColor: "neutral_ui_base",
  borderRadius: "md",
  boxShadow: "shadowDark",
  aspectRatio: "square",
});

export default function SectionHomepageTechStack({
  placeholderProp,
}: ISectionHomepageTechStack) {
  return (
    <Box
      {...RESPONSIVE_MAX_WIDTH_PROPS}
      margin="spacing10"
      display="grid"
      gap="spacing6"
      alignItems="center"
      gridTemplateColumns={{
        desktop: "7_5",
        tablet: "1x",
      }}
    >
      <Box display="grid" gridTemplateColumns="4x" gap="spacing3">
        <LogoReact className={ICON_CLASSNAMES} />
        <LogoTypescript className={ICON_CLASSNAMES} />
        <LogoGatsby className={ICON_CLASSNAMES} />
        <LogoTestingLibrary className={ICON_CLASSNAMES} />
        <LogoCypress className={ICON_CLASSNAMES} />
        <LogoSASS className={ICON_CLASSNAMES} />
        <LogoVanillaExtract className={ICON_CLASSNAMES} />
        <LogoRadix className={ICON_CLASSNAMES} />
      </Box>

      <Box>
        <Typography
          fontSize="h6"
          fontWeight="medium"
          color="primary_text_lowContrast"
          // marginBottom="spacing6"
        >
          Modern tech stack
        </Typography>
        <h3>These are a few of my favorite things...</h3>
        <p>
          I ❤️ React, TypeScript, GatsbyJS, SASS, React Testing Library and
          Cypress.
        </p>
      </Box>
    </Box>
  );
}

SectionHomepageTechStack.defaultProps = {
  placeholderProp: null,
};
