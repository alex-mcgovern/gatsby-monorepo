import React from "react";
import LogoCypress from "../../../../images/svg/logos/logo_cypress.svg";
import LogoGatsby from "../../../../images/svg/logos/logo_gatsby.svg";
import LogoRadix from "../../../../images/svg/logos/logo_radix.svg";
import LogoReact from "../../../../images/svg/logos/logo_react.svg";
import LogoSASS from "../../../../images/svg/logos/logo_sass.svg";
import LogoTestingLibrary from "../../../../images/svg/logos/logo_testing_library.svg";
import LogoTypescript from "../../../../images/svg/logos/logo_typescript.svg";
import LogoVanillaExtract from "../../../../images/svg/logos/logo_vanilla_extract.svg";
import { BoxNew } from "../../../atoms/box_new/box_new";
import * as styles from "./section_tech_stack.css";

export default function SectionHomepageTechStack() {
  return (
    <BoxNew
      as="section"
      marginY="spacing5"
      display="grid"
      gap="spacing4"
      alignItems="center"
      gridTemplateColumns={{
        desktop: "7_5",
        tablet: "1x",
      }}
    >
      <BoxNew
        customisation={{
          display: "grid",
          gridTemplateColumns: "4x",
          gap: "spacing2",
        }}
      >
        <LogoReact className={styles.icon} />
        <LogoTypescript className={styles.icon} />
        <LogoGatsby className={styles.icon} />
        <LogoTestingLibrary className={styles.icon} />
        <LogoCypress className={styles.icon} />
        <LogoSASS className={styles.icon} />
        <LogoVanillaExtract className={styles.icon} />
        <LogoRadix className={styles.icon} />
      </BoxNew>

      <BoxNew>
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
          Modern tech stack
        </BoxNew>
        <h3>These are a few of my favorite things...</h3>
        <p>
          I ❤️ React, TypeScript, GatsbyJS, SASS, React Testing Library and
          Cypress.
        </p>
      </BoxNew>
    </BoxNew>
  );
}

SectionHomepageTechStack.defaultProps = {
  placeholderProp: null,
};
