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
  customisation: { fontSize: "body_lg", marginBottom: "spacing1" },
};
export default function Example() {
  return (
    <Box
      as="section"
      customisation={{
        marginY: "spacing10",
        display: "grid",
        gap: "spacing6",
        gridTemplateColumns: "1_2",
        alignItems: "start",
      }}
    >
      <Box
        customisation={{
          backgroundColor: "neutral_bg_2",
          borderRadius: "sm",
          padding: "spacing3",
          borderColor: "neutral_border_1",
        }}
      >
        <Typography
          as="h1"
          customisation={{
            marginTop: "none",
          }}
        >
          Charlie kelly
        </Typography>
        <StaticImage
          alt="Charlie Kelly"
          src="../../images/charlie_kelly.jpeg"
        />
        {/* Button 1 */}
        <Button
          title="Contact Charlie"
          customisation={{
            width: "100%",
          }}
        />
        {/* Button 2 */}
        <Button
          title="Report Charlie"
          customisation={{
            width: "100%",
          }}
        />
      </Box>

      <Box>
        <Typography as="h2">About Charlie</Typography>
        {/* Favourite food */}
        <Typography {...SUBHEADING_PROPS}>Favourite food</Typography>
        <Typography as="p">
          Milk steak. You should know what that means.
        </Typography>
        {/* Favourite hobby */}
        <Typography {...SUBHEADING_PROPS}>Favourite hobby</Typography>
        <Typography as="p">Magnets. Just magnets.</Typography>
        {/* Likes */}
        <Typography {...SUBHEADING_PROPS}>Likes Ghouls.</Typography>
        <Typography as="p">Funny little green ghouls.</Typography>
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
