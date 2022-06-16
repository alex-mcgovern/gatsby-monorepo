import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { getFunctionalClassNames } from "../../../styles/functional_classnames.css";
import { SECTION_PROPS } from "../../../utils/shared_props/box_props";
import Box from "../../atoms/box/box";
import Button from "../../atoms/button/button/button";

interface IBioProps {
  bio: string;
}

const HomepageSectionBio = ({ bio }: IBioProps) => {
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
      display="grid"
      gap="spacing6"
      gridTemplateColumns={{
        mobile: "1",
        tablet: "1_2",
      }}
      alignItems="center"
    >
      <StaticImage
        alt="Profile picture"
        formats={["auto", "webp", "avif"]}
        layout={"constrained"}
        objectFit="contain"
        quality={95}
        className={imageClassnames}
        src="../../../images/profile-pic.jpeg"
      />

      <Box>
        <section
          dangerouslySetInnerHTML={{ __html: bio }}
          itemProp="articleBody"
        />
        <Box marginY="spacing3" display="flex" gap="spacing1">
          <Button
            trailingIcon="angle-right"
            title="Get in touch"
            to="/contact/"
          />
          <Button
            // trailingIcon="angle-right"
            title="Read an intro blog post"
            to="/hello-world/"
            variant="secondary"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomepageSectionBio;
