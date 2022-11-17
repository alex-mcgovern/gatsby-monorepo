import * as React from "react";
import {
  faCode,
  faHeart,
  faHomeAlt,
  faLightbulb,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { BoxNew } from "../../../atoms/box_new/box_new";
import { Icon } from "../../../atoms/icon/icon";

interface IBioProps {}

const SectionHomepageBio = ({}: IBioProps) => {
  return (
    <BoxNew
      display="grid"
      marginY="spacing5"
      gridTemplateColumns="2_1"
      alignItems="center"
      gap="spacing2"
    >
      <BoxNew as="header" maxWidth="gridSpan8">
        <BoxNew as="h1">Alex McGovern</BoxNew>
        <BoxNew fontSize="body_lg">
          <BoxNew as="h2" fontSize="body_lg">
            I'm a web engineer working and living in London. I love{" "}
            <Link to="/projects/boondoggle-design-system">design systems</Link>,
            UX, DevX and fast frontend.
          </BoxNew>

          {/** ————————————————————————————————————————————
           * Key facts
           * ——————————————————————————————————————————————— */}
          <BoxNew as="ul">
            {/** Location */}
            <BoxNew as="li" display="flex" gap="spacing0" alignItems="center">
              <Icon icon={faLocationPin} width="spacing1" />
              London, United Kingdom
            </BoxNew>

            {/** Origin */}
            <BoxNew as="li" display="flex" gap="spacing0" alignItems="center">
              <Icon icon={faHomeAlt} width="spacing1" />
              Dundalk, Ireland
            </BoxNew>

            {/** Code */}
            <BoxNew as="li" display="flex" gap="spacing0" alignItems="center">
              <Icon icon={faCode} width="spacing1" />
              Javascript, Typescript, React, GatsbyJS, GraphQL, CSS
            </BoxNew>

            {/** Professional interests */}
            <BoxNew as="li" display="flex" gap="spacing0" alignItems="center">
              <Icon icon={faLightbulb} width="spacing1" />
              UX/UI, DevX, design systems, branding, i18n & localisation
            </BoxNew>

            {/** Personal interests */}
            <BoxNew as="li" display="flex" gap="spacing0" alignItems="center">
              <Icon icon={faHeart} width="spacing1" />
              Illustration, 3D art, animation, guitar (classical & jazz)
            </BoxNew>
          </BoxNew>

          {/** ————————————————————————————————————————————
           * Career info
           * ——————————————————————————————————————————————— */}

          <BoxNew as="p">
            I currently work at <a href="https://truelayer.com/">TrueLayer</a>{" "}
            as an engineering manager in the web team, where I've built and
            scaled our public website to 550+ pages, 5 languages and across 7
            markets.
          </BoxNew>
        </BoxNew>
      </BoxNew>

      {/** ————————————————————————————————————————————————————————————————————————————
       *      PROFILE PIC
       * ——————————————————————————————————————————————————————————————————————————————— */}

      <BoxNew aspectRatio="square">
        <StaticImage
          alt="Profile pic"
          src="../../../../images/profile-pic.jpeg"
        />
      </BoxNew>
    </BoxNew>
  );
};

export default SectionHomepageBio;
