import React from "react";
import { Box, Button, Icon } from "@alexmcgovern/boondoggle.design";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import { HppCardWrapper } from "../components/HppCardWrapper";
import QrCode from "../images/svg/qr.svg";

export default function HppQrCode() {
  return (
    <HppCardWrapper title="Review payment">
      <QrCode />
      <Box
        borderBottom="neutral_nonInteractive"
        paddingBottom="spacing4"
        fontStyle="body_sm"
      >
        <Box>Scan this QR code and pay with the Natwest app</Box>
      </Box>

      <Button
        width="100%"
        marginY="spacing4"
        size="lg"
        as={Link}
        to="/7-success"
      >
        Or continue on desktop
      </Button>
    </HppCardWrapper>
  );
}
