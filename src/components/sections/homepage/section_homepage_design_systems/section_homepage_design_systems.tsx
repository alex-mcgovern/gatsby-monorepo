import React from "react";
import { BoxNew } from "../../../atoms/box_new/box_new";

interface ISectionHomepageDesignSystems {}

export default function SectionHomepageDesignSystems({}: ISectionHomepageDesignSystems) {
  return (
    <BoxNew
      as="section"
      display="grid"
      marginY="spacing4"
      gap="spacing4"
      alignItems="center"
      gridTemplateColumns={{
        desktop: "7_5",
        tablet: "1x",
      }}
    >
      <BoxNew>
        <BoxNew
          variant={{
            color: "accent_fg_1",
          }}
          customisation={{
            fontSize: "h6",
            fontWeight: "medium",
          }}

          // marginBottom="spacing4"
        >
          Less CSS is best
        </BoxNew>
        <h3>Very fast, very small design systems.</h3>
        <p>
          My philosophy to building component libraries for design systems is
          less is less.
        </p>
      </BoxNew>
    </BoxNew>
  );
}

SectionHomepageDesignSystems.defaultProps = {
  placeholderProp: null,
};
