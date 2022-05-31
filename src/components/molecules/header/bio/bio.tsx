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
    <Box margin="lg">
      <AlternatingLayout ratio="2_1">
        <Box padding="lg" outline="dashed">
          <section
            dangerouslySetInnerHTML={{ __html: bio }}
            itemProp="articleBody"
          />
          <Box margin="sm" display="flex" gap="small" outline="dashed">
            <Button
              to="/"
              size="sm"
              title="Download CV"
              leadingIcon="file-arrow-down"
            />
            <Button
              variant="secondary"
              size="sm"
              to="/"
              title="More about me"
              leadingIcon="user"
            />
          </Box>
        </Box>

        <Box outline="dashed" background="crosshatch">
          <StaticImage
            layout={"constrained"}
            formats={["auto", "webp", "avif"]}
            src="../../../../images/profile-pic.jpeg"
            quality={95}
            alt="Profile picture"
            objectFit="cover"
          />
        </Box>
      </AlternatingLayout>
    </Box>
  );
};

export default Bio;
