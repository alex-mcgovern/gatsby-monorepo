/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import AlternatingLayout from "../alternating_layout/alternating_layout";
import Button from "../atoms/button/button/button";
import ButtonWrapper from "../atoms/button/button_wrapper/button_wrapper";
import SectionContent from "../section/section_content/section_content";
import SectionOuter from "../section/section_outer/section_outer";
import * as classes from "./bio.module.scss";

const H1_OPTIONS = [
  "Hello.",
  "Yo.",
  "Ciao.",
  "Greetings.",
  "Dia duit. (That means hello in Irish)",
];

const Bio = ({ bio }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;
  // const social = data.site.siteMetadata?.social;

  const heroText = H1_OPTIONS[Math.floor(Math.random() * H1_OPTIONS.length)];

  return (
    <SectionOuter>
      <AlternatingLayout ratio="2_1">
        {author?.name && (
          <SectionContent hasArrowsBottom hasArrowsTop hasOutline hasPadding>
            <h5>INTRO</h5>
            <h1>Hi, I'm Alex 👋</h1>
            <section
              dangerouslySetInnerHTML={{ __html: bio }}
              itemProp="articleBody"
            />
            <ButtonWrapper>
              <Button
                to="/"
                title="Download CV"
                leadingIcon="file-arrow-down"
              />
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
        )}
        <SectionContent hasArrowsBottom hasArrowsTop hasOutline hasBackground>
          <StaticImage
            layout="full_width"
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

export default Bio;
