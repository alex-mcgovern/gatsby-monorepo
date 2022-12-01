import React from "react";
import { Box } from "@alexmcgovern/boondoggle.design";
import { CheckoutConfirmation } from "../components/CheckoutConfirmation";
import { PeopleAlsoBought } from "../components/PeopleAlsoBought";

export default function ConfirmPurchase() {
  return (
    <Box as="section" marginY="spacing5" position="relative">
      <CheckoutConfirmation />
      <hr />
      <PeopleAlsoBought />
    </Box>
  );
}
