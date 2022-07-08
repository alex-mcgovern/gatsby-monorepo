import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Box } from "../../components/atoms/box/box";
import { Button } from "../../components/atoms/button/button";
import {
  Typography,
  TypographyProps,
} from "../../components/atoms/typography/typography";

const SUBHEADING_PROPS: TypographyProps = {
  as: "h3",
  customisation: {
    fontSize: "body_lg",
    fontWeight: "medium",
    marginBottom: "spacing1",
    textTransform: "uppercase",
  },
};

export default function Example() {
  return (
    <Box
      as="section"
      customisation={{
        marginY: "spacing10",
        display: "grid",
        gridTemplateColumns: { tablet: "1_2", mobile: "1x" },
        gap: "spacing6",
      }}
    >
      <Box>
        <Typography as="h1">Charlie kelly</Typography>
        <StaticImage
          alt="Charlie Kelly"
          src="../../images/charlie_kelly.jpeg"
        />
        <Button
          title="Contact charlie"
          variant={{ appearance: "primary" }}
          customisation={{ width: "100%" }}
        />
        <Button
          title="Report charlie"
          variant={{ appearance: "secondary" }}
          customisation={{ width: "100%" }}
        />
      </Box>
      <Box>
        <Typography as="h2" customisation={{ textTransform: "uppercase" }}>
          About Charlie
        </Typography>

        {/* Favourite food */}

        <Typography {...SUBHEADING_PROPS}>Favourite food</Typography>
        <Typography as="p">
          Milk steak. You should know what that means.
        </Typography>

        {/* Favourite hobby */}

        <Typography {...SUBHEADING_PROPS}>Favourite hobby</Typography>
        <Typography as="p">Magnets. Just magnets.</Typography>

        {/* Likes */}

        <Typography {...SUBHEADING_PROPS}>Likes</Typography>
        <Typography as="p">Ghouls. Funny little green ghouls.</Typography>

        {/* Dislikes */}

        <Typography {...SUBHEADING_PROPS}>Dislikes</Typography>
        <Typography as="p">
          People's knees. Cover your knees up if you;re going to be walking
          around anywhere.
        </Typography>
      </Box>
    </Box>
  );
}
