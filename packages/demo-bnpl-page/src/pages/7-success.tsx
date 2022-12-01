import React from "react";
import { Box, Button } from "@alexmcgovern/boondoggle.design";
import { Link } from "gatsby";

export default function SuccessScreen() {
  return (
    <Box
      as="section"
      marginY="spacing5"
      position="relative"
      marginX="auto"
      maxWidth="gridSpan6"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box __fontSize={200}>🎉</Box>
      <Box as="h1" fontWeight="bold">
        Order successful
      </Box>
      <Box fontStyle="body_lg">You'll be nose deep in</Box>
      <Box
        marginY="spacing1"
        fontStyle="h4"
        color="accent_text_lowContrast"
        fontWeight="semibold"
      >
        50 shades of grey
      </Box>
      <Box fontStyle="body_lg">Within 5-10 business days</Box>

      <Button as={Link} size="lg" marginY="spacing5" to="/">
        Get back to shopping ASAP
      </Button>
    </Box>
  );
}
