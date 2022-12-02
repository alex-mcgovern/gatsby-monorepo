import type { ReactNode } from "react";
import React, { useCallback, useState } from "react";
import { Box } from "@alexmcgovern/boondoggle.design";
import { offerCard } from "./index.css";

interface OfferCardProps {
  iconNode: ReactNode;
  title: string;
  subtitle: string;
}

export function OfferCard({ iconNode, title, subtitle }: OfferCardProps) {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClicked = useCallback(() => {
    setIsClicked((current) => {
      return !current;
    });
  }, []);

  return (
    <Box
      as="button"
      display="flex"
      width="100%"
      border={
        isClicked ? "accent_border_interactive" : "neutral_border_interactive"
      }
      className={offerCard}
      alignItems="center"
      cursor="pointer"
      paddingY="spacing1"
      paddingLeft="spacing1"
      paddingRight="spacing3"
      textAlign="left"
      gap="spacing1"
      borderRadius="sm"
      onClick={toggleClicked}
    >
      <Box
        flexShrink="0"
        borderRadius="50%"
        border="accent_nonInteractive"
        width="spacing5"
        height="spacing5"
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginRight="spacing1"
        padding="spacing1"
      >
        {iconNode}
      </Box>
      <Box width="100%">
        <Box
          as="h5"
          fontStyle="body_lg"
          margin="none"
          fontWeight={isClicked ? "bold" : "normal"}
          color={
            isClicked ? "accent_text_lowContrast" : "neutral_text_highContrast"
          }
        >
          {title}
        </Box>
        <Box
          as="p"
          margin="none"
          color="neutral_text_lowContrast"
          fontStyle="body_sm"
        >
          {subtitle}
        </Box>
      </Box>
    </Box>
  );
}
