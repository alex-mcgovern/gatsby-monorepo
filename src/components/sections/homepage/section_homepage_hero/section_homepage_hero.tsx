import * as React from "react";
import { Link } from "gatsby";
import {
  BOX_CUSTOMISATION_MAX_WIDTH_FULL,
  BOX_CUSTOMISATION_SECTION_SPACING,
} from "../../../../utils/shared_props/box_props";
import { Box } from "../../../atoms/box/box";
import { Typography } from "../../../atoms/typography/typography";

interface IBioProps {}

const SectionHomepageBio = ({}: IBioProps) => {
  return (
    <Box
      as="section"
      customisation={{
        maxWidth: "gridSpan6",
        marginX: "auto",
        ...BOX_CUSTOMISATION_SECTION_SPACING,
      }}
    >
      <Typography as="h1" customisation={{ textAlign: "center" }}>
        Alex McGovern
      </Typography>
      <Typography
        as="h2"
        customisation={{
          fontSize: "body_md",
          fontWeight: "normal",
          textAlign: "center",
        }}
      >
        I'm a web engineer working and living in London. I love{" "}
        <Link to="/projects/boondoggle-design-system">design systems</Link>, UX,
        DevX and <i>fast</i> frontend.
      </Typography>
      <Typography as="p">
        I currently work at <a href="https://truelayer.com/">TrueLayer</a> as an
        engineering manager in the web team, building and maintaining an
        enterprise-scale site across 7 countries in 4 languages.
      </Typography>
      <hr />
    </Box>
  );
};

export default SectionHomepageBio;
