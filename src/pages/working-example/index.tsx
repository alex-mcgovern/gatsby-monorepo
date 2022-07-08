import React from "react";
import { Box } from "../../components/atoms/box/box";

export default function WorkingExample() {
  return (
    <Box as="section">
      <div>
        <h1>Charlie kelly</h1>
        {/* "../../images/charlie_kelly.jpeg"  */}
        {/* Button 1 */}
        Contact charlie
        {/* Button 2 */}
        Report charlie
      </div>

      <div>
        <h2>About Charlie</h2>
        {/* Favourite food */}
        <h3>Favourite food</h3>
        <p>Milk steak. You should know what that means.</p>
        {/* Favourite hobby */}
        <h3>Favourite hobby</h3>
        <p>Magnets. Just magnets.</p>
        {/* Likes */}
        <h3>Likes</h3>
        <p>Ghouls. Funny little green ghouls.</p>
        {/* Dislikes */}
        <h3>Dislikes</h3>
        <p>
          People's knees. Cover your knees up if you're going to be walking
          around anywhere.
        </p>
      </div>
    </Box>
  );
}
