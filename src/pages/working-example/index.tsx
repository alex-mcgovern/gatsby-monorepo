import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Box } from "../../components/atoms/box/box";
import { Button } from "../../components/atoms/button/button";
import { Typography } from "../../components/atoms/typography/typography";

export default function WorkingExample() {
  return (
    <Box
      as="section"
      customisation={{
        display: "grid",
        gridTemplateColumns: "1_2",
        gap: "spacing6",
      }}
    >
      <Box
        customisation={{
          backgroundColor: "neutral_bg_3",
          borderRadius: "sm",
          padding: "spacing3",
        }}
      >
        <Typography as="h1">Charlie kelly</Typography>
        <StaticImage
          src="../../images/charlie_kelly.jpeg"
          alt="Charlie Kelly"
        />
        {/*   */}
        {/* Button 1 */}
        <Button customisation={{ width: "100%" }} title="Contact charlie" />
        {/* Button 2 */}
        <Button customisation={{ width: "100%" }} title="Report charlie" />
      </Box>
      <Box>
        {/* Bio section */}
        <Typography
          as="h2"
          customisation={{
            fontSize: "body_lg",
            fontWeight: "bold",
          }}
        >
          About Charlie
        </Typography>
        {/* Favourite food */}
        <Typography>
          Favourite food: Milk steak. You should know what that means.
        </Typography>
        {/* Favourite hobby */}
        <Typography>Favourite hobby: Magnets. Just magnets.</Typography>
        {/* Likes */}
        <Typography>Likes: Ghouls. Funny little green ghouls.</Typography>
        {/* Dislikes */}
        <Typography>
          Dislikes: People's knees. Cover your knees up if you're going to be
          walking around anywhere.
        </Typography>
      </Box>
    </Box>
  );
}
