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
      alignItems="center"
      background="neutral_white"
      border="neutral_nonInteractive"
      borderRadius="md"
      boxShadow="lg"
      display="flex"
      flexDirection="column"
      marginX="auto"
      maxWidth="gridSpan6"
      paddingX="spacing5"
      paddingY="spacing2"
      position="relative"
      textAlign="center"
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

      <Box
        marginTop="spacing1"
        marginBottom="spacing2"
        __fontSize={10}
        color="neutral_text_lowContrast"
      >
        By continuing you are permitting TrueLayer to initiate a payment from
        your bank account. You also agree to our{" "}
        <a href="https://truelayer.com/enduser_tos">End User Terms of use</a>{" "}
        and
        <a href="https://truelayer.com/privacy-policy">Privacy Policy.</a>
      </Box>
    </Box>
  );
}
