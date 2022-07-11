import React from "react";
import { Box } from "../../../atoms/box/box";
import { Typography } from "../../../atoms/typography/typography";

interface ISectionHomepageDesignSystems {}

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
      ></Box>

      <Box>
        <Typography
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
