/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../atoms/button/button";
import HorizontalDivider from "../horizontal_divider/horizontal_divider";
import Section from "../section/section";
import * as classes from "./bio.module.scss";

const Bio = () => {
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
  const social = data.site.siteMetadata?.social;

  return (
    <Section>
      <div className={classes.bio}>
        <div className={classes.bio_avatar_wrapper}>
          <StaticImage
            layout="full_width"
            formats={["auto", "webp", "avif"]}
            src="../../images/profile-pic.jpeg"
            quality={95}
            alt="Profile picture"
            className={classes.bio_avatar_image}
          />
        </div>
        {author?.name && (
          <div className={classes.bio_text}>
            <HorizontalDivider />
            <h2>Hello. My name is Alex.</h2>
            <p>
              I'm a frontend engineer at the start of a journey in engineering
              management. 👶 I at TrueLayer. I look after the public website.
            </p>

            <Button to="/" title="More about me" />
            <Button
              to="https://linkedin.com/in/alexmcgovernsmith"
              variant="secondary"
              title="Connect on LinkedIn"
            />
            <HorizontalDivider />
          </div>
        )}
      </div>
    </Section>
  );
};

export default Bio;
