import React from "react";
import { Box } from "../../components/atoms/box/box";

export default function WorkingExample() {
  return (
    <Box as="section">
      <div>
        Charlie kelly
        {/* "../../images/charlie_kelly.jpeg"  */}
        {/* Button 1 */}
        Contact charlie
        {/* Button 2 */}
        Report charlie
      </div>

      <div>
        About Charlie
        {/* Favourite food */}
        Favourite food Milk steak. You should know what that means.
        {/* Favourite hobby */}
        Favourite hobby Magnets. Just magnets.
        {/* Likes */}
        Likes Ghouls. Funny little green ghouls.
        {/* Dislikes */}
        Dislikes People's knees. Cover your knees up if you;re going to be
        walking around anywhere.
      </div>
    </Box>
  );
}
