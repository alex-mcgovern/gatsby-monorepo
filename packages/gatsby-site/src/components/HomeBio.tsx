import * as React from "react";
import { Box, Button, getSprinkles } from "@alexmcgovern/boondoggle.design";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export function HomeBio() {
  return (
    <Box
      display="grid"
      marginY="spacing5"
      gridTemplateColumns="1_2"
      alignItems="center"
      gap="spacing4"
    >
      <StaticImage
        className={getSprinkles({
          aspectRatio: "square",
          borderRadius: "md",
          border: "neutral_nonInteractive",
          boxShadow: "lg",
        })}
        alt="Profile pic"
        src="../images/profile-pic.jpg"
      />

      <Box as="header" maxWidth="gridSpan8">
        <Box as="h1" marginTop="none">
          Hi, I'm Alex McGovern
        </Box>

        <Box>
          <Box as="h2" fontStyle="body_md">
            London based software engineer specialising in React, Typescript and
            Node.js. Currently employed at{" "}
            <a href="https://truelayer.com/">TrueLayer</a> as an engineering
            manager, where I own the public website.
          </Box>

          <p>
            I love{" "}
            <Link to="/projects/boondoggle-design-system">design systems</Link>,
            user experience, developer experience and building performant and
            accessible online experiences.
          </p>

          <Box display="flex" gap="spacing2" marginTop="spacing2">
            <Button
              as="a"
              href="https://www.linkedin.com/in/alexmcgovern/"
              appearance="primary"
              color="accent"
              iconLeading={faLinkedin}
            >
              Connect on LinkedIn
            </Button>

            <Button
              as="a"
              href="https://docs.google.com/document/d/15ZpyA_h6D1ZD8qvFj4R_DbK6EmsL3EOY/edit?usp=sharing&ouid=109359821278285686276&rtpof=true&sd=true"
              appearance="tertiary"
              color="accent"
            >
              Download a CV
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
