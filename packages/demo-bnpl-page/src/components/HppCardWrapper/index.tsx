import type { ReactNode } from "react";
import React from "react";
import { Box, Card, Icon } from "@alexmcgovern/boondoggle.design";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import BankConnectorIllustration from "../../images/svg/bank-connector.svg";
import { closeButton } from "./index.css";

interface HppCardWrapperProps {
  title: string;
  children: ReactNode;
}

export function HppCardWrapper({ title, children }: HppCardWrapperProps) {
  return (
    <Box
      maxWidth="gridSpan6"
      boxShadow="lg"
      border="neutral_nonInteractive"
      borderRadius="md"
      marginX="auto"
      paddingY="spacing2"
      paddingX="spacing5"
      display="flex"
      alignItems="center"
      flexDirection="column"
      position="relative"
    >
      <Icon icon={faTimes} padding="spacing1" className={closeButton} />
      <Box display="flex" justifyContent="space-between">
        <Box as="h1" fontStyle="h4" fontWeight="semibold">
          {title}
        </Box>
      </Box>
      <Box marginY="spacing3" marginX="auto">
        <BankConnectorIllustration />
      </Box>
      {children}
    </Box>
  );
}
