/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import AlternatingLayout from "../../../atoms/alternating_layout/alternating_layout";
import Button from "../../../atoms/button/button/button";
import ButtonWrapper from "../../../atoms/button/button_wrapper/button_wrapper";
import LayoutSectionInner from "../../../layout/layout_section_inner/layout_section_inner";
import LayoutSectionOuter from "../../../layout/layout_section_outer/layout_section_outer";
import * as classes from "./bio.module.scss";

interface BioProps {
  bio: string;
}

const Bio = ({ bio }: BioProps) => {
  return (
    <LayoutSectionOuter>
      <AlternatingLayout ratio="2_1">
        <LayoutSectionInner hasArrowsBottom hasArrowsTop hasOutline hasPadding>
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
        </LayoutSectionInner>

        <LayoutSectionInner
          hasArrowsBottom
          hasArrowsTop
          hasOutline
          hasBackground
        >
          <StaticImage
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
            src="../../images/profile-pic.jpeg"
            quality={95}
            alt="Profile picture"
            className={classes.bio_avatar_image}
            objectFit="cover"
          />
        </LayoutSectionInner>
      </AlternatingLayout>
    </LayoutSectionOuter>
  );
};

export default Bio;
