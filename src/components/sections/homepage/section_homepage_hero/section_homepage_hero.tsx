import * as React from "react";
import { Link } from "gatsby";
import { BOX_CUSTOMISATION_SECTION_SPACING } from "../../../../utils/shared_props/box_props";
import { Box } from "../../../atoms/box/box";
import { Typography } from "../../../atoms/typography/typography";

interface IBioProps {}

const SectionHomepageBio = ({}: IBioProps) => {
  return (
    <>
      <Box
        as="header"
        customisation={{
          ...BOX_CUSTOMISATION_SECTION_SPACING,
        }}
      >
        <Typography as="h1">Alex McGovern</Typography>
        <Typography
          as="h2"
          customisation={{
            fontSize: "body_lg",
            fontWeight: "normal",
          }}
        >
          I'm a web engineer working and living in London. I love{" "}
          <Link to="/projects/boondoggle-design-system">design systems</Link>,
          UX, DevX and <i>fast</i> frontend.
        </Typography>
        <Typography as="p">
          I currently work at <a href="https://truelayer.com/">TrueLayer</a> as
          an engineering manager in the web team, building and maintaining an
          enterprise-scale site across 7 countries in 4 languages.
        </Typography>
      </Box>
    </>
  );
};

export default SectionHomepageBio;
