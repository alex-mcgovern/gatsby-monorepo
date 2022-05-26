/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import AlternatingLayout from "../alternating_layout/alternating_layout";
import Button from "../atoms/button/button/button";
import ButtonWrapper from "../atoms/button/button_wrapper/button_wrapper";
import SectionContent from "../section/section_content/section_content";
import SectionOuter from "../section/section_outer/section_outer";
import * as classes from "./bio.module.scss";

interface BioProps {
  bio?: "";
}

const Bio = ({ bio }: BioProps) => {
  return (
    <SectionOuter>
      <AlternatingLayout ratio="2_1">
        <SectionContent hasArrowsBottom hasArrowsTop hasOutline hasPadding>
          <h5>INTRO</h5>
          <h1>Hi, I'm Alex 👋</h1>
          <section
            dangerouslySetInnerHTML={{ __html: bio }}
            itemProp="articleBody"
          />
          <ButtonWrapper>
            <Button to="/" title="Download CV" leadingIcon="file-arrow-down" />
            <Button
              variant="secondary"
              to="/"
              title="More about me"
              leadingIcon="user"
            />
            <Button
              to="https://linkedin.com/in/alexmcgovernsmith"
              variant="secondary"
              title="Linkedin"
              leadingIcon={["fab", "linkedin"]}
            />
          </ButtonWrapper>
        </SectionContent>

        <SectionContent hasArrowsBottom hasArrowsTop hasOutline hasBackground>
          <StaticImage
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
            src="../../images/profile-pic.jpeg"
            quality={95}
            alt="Profile picture"
            className={classes.bio_avatar_image}
            objectFit="cover"
          />
        </SectionContent>
      </AlternatingLayout>
    </SectionOuter>
  );
};

Bio.defaultProps = {
  bio: {},
};

export default Bio;
