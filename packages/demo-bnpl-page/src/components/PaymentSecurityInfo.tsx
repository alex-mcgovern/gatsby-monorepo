import React from "react";
import { Box, Icon, getSprinkles } from "@alexmcgovern/boondoggle.design";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const PLACEHOLDER_LINK = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

export function PaymentSecurityInfo() {
  return (
    <Box background="neutral_background_base" padding="spacing2">
      <Box width="fit-content" margin="auto">
        <Box display="flex">
          <Icon
            icon={faCheck}
            color="semantic_green_highContrast"
            marginRight="spacing1"
          />
          <Box>
            <a
              href={PLACEHOLDER_LINK}
              className={getSprinkles({ textDecoration: "none" })}
            >
              Secure
            </a>{" "}
            and{" "}
            <a
              href={PLACEHOLDER_LINK}
              className={getSprinkles({ textDecoration: "none" })}
            >
              FCA-authorised
            </a>
          </Box>
        </Box>
        <Box display="flex">
          <Icon
            icon={faCheck}
            color="semantic_green_highContrast"
            marginRight="spacing1"
          />
          <Box>Only connect your account once</Box>
        </Box>
      </Box>
    </Box>
  );
}
