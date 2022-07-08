import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Box } from "../../components/atoms/box/box";
import { Typography } from "../../components/atoms/typography/typography";

interface ExampleProps {
  placeholderProp: undefined;
}

export default function Example({ placeholderProp }: ExampleProps) {
  return (
    <Box
      as="section"
      customisation={{
        marginY: "spacing10",
        display: "grid",
        gridTemplateColumns: { tablet: "1_3", mobile: "1x" },
      }}
    >
      <Box>
        <Typography as="h1">Charlie kelly</Typography>
        <StaticImage
          alt="Charlie Kelly"
          src="../../images/charlie_kelly.jpeg"
        />
      </Box>
      <Box>
        <Typography as="h2" customisation={{ textTransform: "uppercase" }}>
          About Charlie
        </Typography>

        {/* Favourite food */}

        <Typography as="h3" customisation={{ textTransform: "uppercase" }}>
          Favourite food
        </Typography>
        <Typography as="p">
          Milk steak. You should know what that means.
        </Typography>

        {/* Favourite hobby */}

        <Typography as="h3" customisation={{ textTransform: "uppercase" }}>
          Favourite hobby
        </Typography>
        <Typography as="p">Magnets. Just magnets.</Typography>

        {/* Likes */}

        <Typography as="h3" customisation={{ textTransform: "uppercase" }}>
          Likes
        </Typography>
        <Typography as="p">Ghouls. Funny little green ghouls.</Typography>

        {/* Dislikes */}

        <Typography as="h3" customisation={{ textTransform: "uppercase" }}>
          Dislikes
        </Typography>
        <Typography as="p">
          People's knees. Cover your knees up if you;re going to be walking
          around anywhere.
        </Typography>
      </Box>
    </Box>
  );
}

Example.defaultProps = {
  placeholderProp: null,
};
