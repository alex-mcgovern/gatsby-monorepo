import React from "react";
import { Box } from "@alexmcgovern/boondoggle.design";
import { CheckoutHeader } from "../components/CheckoutHeader";
import { PeopleAlsoBought } from "../components/PeopleAlsoBought";

export default function Checkout() {
  return (
    <Box as="section" marginY="spacing5" position="relative">
      <CheckoutHeader />
      <hr />
      <PeopleAlsoBought />
    </Box>
  );
}
