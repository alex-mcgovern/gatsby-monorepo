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
import { BOX_CUSTOMISATION_MAX_WIDTH_FULL } from "../../../../utils/shared_props/box_props";
import { Box } from "../../../atoms/box/box";
import { Typography } from "../../../atoms/typography/typography";

interface ISectionHomepageDesignSystems {}

const ICON_CLASSNAMES = getFunctionalClassNames({
  padding: "spacing2",
  backgroundColor: "neutral_bg_3",
  borderRadius: "sm",
  boxShadow: "shadowDark",
  aspectRatio: "square",
});

export default function SectionHomepageDesignSystems({}: ISectionHomepageDesignSystems) {
  return (
    <Box
      as="section"
      customisation={{
        display: "grid",
        marginY: "spacing4",
        gap: "spacing4",
        alignItems: "center",
        gridTemplateColumns: {
          desktop: "7_5",
          tablet: "1x",
        },
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
            color: "accent_fg_1",
          }}

          // marginBottom="spacing4"
        >
          Less CSS is best
        </Typography>
        <h3>Very fast, very small design systems.</h3>
        <p>
          My philosophy to building component libraries for design systems is
          less is less.
        </p>
      </Box>
    </Box>
  );
}

SectionHomepageDesignSystems.defaultProps = {
  placeholderProp: null,
};
