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
import Typography from "../../../atoms/typography/typography";
import Box from "../../../layout/box/box";

interface IBioProps {
  bio: string;
}

const Bio = ({ bio }: IBioProps) => {
  return (
    <Box
      alignItems="center"
      display="grid"
      gap="spacing6"
      gridTemplateColumns={{
        mobile: "1",
        tablet: "2_1",
      }}
      marginTop="spacing15"
      marginBottom="spacing6"
    >
      <Box paddingY="spacing6">
        <section
          dangerouslySetInnerHTML={{ __html: bio }}
          itemProp="articleBody"
        />
        <Box marginY="spacing3" display="flex" gap="spacing3">
          <Button
            leadingIcon="user"
            size="sm"
            title="More about me"
            to="/hello-world/"
            variant="secondary"
          />
        </Box>
      </Box>

      <Box
        borderRadius="md"
        boxShadow="shadowLight"
        outline="dashed"
        overflow="hidden"
      >
        <StaticImage
          alt="Profile picture"
          formats={["auto", "webp", "avif"]}
          layout={"constrained"}
          objectFit="contain"
          quality={95}
          src="../../../../images/profile-pic.jpeg"
        />
      </Box>
    </Box>
  );
};

export default Bio;
