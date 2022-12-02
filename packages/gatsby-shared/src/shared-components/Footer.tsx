import React from "react";
import { Box } from "@alexmcgovern/boondoggle.design";

export function Footer() {
  const date = new Date().getFullYear();

  return (
    <Box as="footer" marginY="spacing5">
      <hr />

      {/** -----------------------------------------------------------------------------
       * DATE SECTION
       * ------------------------------------------------------------------------------- */}
      <Box as="section" marginY="spacing4" paddingBottom="spacing4">
        © {date} 50 shades of Moat.
      </Box>
    </Box>
  );
}
