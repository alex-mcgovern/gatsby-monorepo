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
      marginY="spacing9"
      // boxShadow="shadowLight"
      borderRadius="md"
      display="grid"
      gridTemplateColumns={{
        mobile: "1",
        tablet: "2_1",
      }}
      gap="spacing6"
      overflow="hidden"
      outline="dashed"
    >
      <Box paddingY="spacing6" paddingX="spacing3" outline="dashed">
        <section
          dangerouslySetInnerHTML={{ __html: bio }}
          itemProp="articleBody"
        />
        <Box marginY="spacing3" display="flex" gap="spacing3">
          <Button
            variant="secondary"
            size="sm"
            to="/hello-world/"
            title="More about me"
            leadingIcon="user"
          />
        </Box>
      </Box>

      <StaticImage
        layout={"constrained"}
        formats={["auto", "webp", "avif"]}
        src="../../../../images/profile-pic.jpeg"
        quality={95}
        alt="Profile picture"
        objectFit="cover"
      />
    </Box>
  );
};

export default Bio;
