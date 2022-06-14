/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { getFunctionalClassNames } from "../../../../styles/functional_classnames.css";
import AlternatingLayout from "../../../atoms/alternating_layout/alternating_layout";
import Button from "../../../atoms/button/button/button";
import Typography from "../../../atoms/typography/typography";
import Box from "../../../layout/box/box";
import { SECTION_PROPS } from "../../../../utils/shared_props/box_props";

interface IBioProps {
  bio: string;
}

const Bio = ({ bio }: IBioProps) => {
  const imageClassnames = getFunctionalClassNames({
    padding: "spacing3",
    borderRadius: "md",
    boxShadow: "shadowDark",
    aspectRatio: "square",
    overflow: "hidden",
  });
  return (
    <Box
      {...SECTION_PROPS}
      alignItems="center"
      display="grid"
      gap="spacing6"
      gridTemplateColumns={{
        mobile: "1",
        tablet: "1_2",
      }}
    >
      <StaticImage
        alt="Profile picture"
        formats={["auto", "webp", "avif"]}
        layout={"constrained"}
        objectFit="contain"
        quality={95}
        className={imageClassnames}
        src="../../../../images/profile-pic.jpeg"
      />

      <Box paddingY="spacing6">
        <section
          dangerouslySetInnerHTML={{ __html: bio }}
          itemProp="articleBody"
        />
        <Box marginY="spacing3" display="flex" gap="spacing3">
          <Button
            trailingIcon="angle-right"
            title="Read an intro blog post"
            to="/hello-world/"
            variant="secondary"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Bio;
