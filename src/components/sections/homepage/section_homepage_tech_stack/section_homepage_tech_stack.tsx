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
  BOX_CUSTOMISATION_MAX_WIDTH_FULL,
  BOX_CUSTOMISATION_SECTION_SPACING,
} from "../../../../utils/shared_props/box_props";
import { Box } from "../../../atoms/box/box";
import { Typography } from "../../../atoms/typography/typography";

const ICON_CLASSNAMES = getFunctionalClassNames({
  padding: "spacing2",
  backgroundColor: "neutral_bg_3",
  borderRadius: "sm",
  boxShadow: "shadowDark",
  aspectRatio: "square",
});

export default function SectionHomepageTechStack() {
  return (
    <Box
      as="section"
      customisation={{
        display: "grid",
        gap: "spacing4",
        alignItems: "center",
        gridTemplateColumns: {
          desktop: "7_5",
          tablet: "1x",
        },

        ...BOX_CUSTOMISATION_SECTION_SPACING,
      }}
    >
      <Box
        customisation={{
          display: "grid",
          gridTemplateColumns: "4x",
          gap: "spacing2",
        }}
      >
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
          customisation={{
            fontSize: "h6",
            fontWeight: "semibold",
            color: "accent_fg_2",
            marginBottom: "spacing1",
          }}
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
