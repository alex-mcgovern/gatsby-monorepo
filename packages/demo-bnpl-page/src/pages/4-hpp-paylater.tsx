import React, { useMemo, useState } from "react";
import {
  Box,
  Button,
  Card,
  Collapsible,
  Icon,
  getSprinkles,
} from "@alexmcgovern/boondoggle.design";
import {
  faArrowRight,
  faCheck,
  faChevronDown,
  faChevronRight,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import { CollapsibleTrigger } from "../components/CollapsibleTrigger";
import { HppCardWrapper } from "../components/HppCardWrapper";
import { OfferCard } from "../components/OfferCard";
import NatwestLogo from "../images/svg/natwest.svg";
import RevolutLogo from "../images/svg/revolut.svg";

export default function HppContainer() {
  return (
    <HppCardWrapper title="Pay later options">
      {/** --------------------------------------------
       * Offer text
       * ----------------------------------------------- */}

      <Box marginY="spacing3">
        <Box>Good news! we’ve found the following offers</Box>
        <Box fontStyle="body_sm" color="neutral_text_lowContrast">
          First edition partners with TrueLayer and their data aggregator to
          populate your sign-up form.
        </Box>
      </Box>

      {/** --------------------------------------------
       * Offer list
       * ----------------------------------------------- */}
      <Box display="grid" gap="spacing2" width="100%">
        <OfferCard
          title="3 interest-free installments"
          subtitle="£400 a month for 3 months"
          iconNode={<NatwestLogo />}
        />

        <OfferCard
          title="4 interest-free installments"
          subtitle="£300 a month for 4 months"
          iconNode={<NatwestLogo />}
        />

        <OfferCard
          title="12 installments at 2% APR"
          subtitle="£120 a month for 12 months"
          iconNode={<RevolutLogo />}
        />
      </Box>
      {/** --------------------------------------------
       * footer
       * ----------------------------------------------- */}
      <Box marginY="spacing2" display="grid" gap="spacing1" width="100%">
        <Collapsible
          triggerNode={
            <CollapsibleTrigger
              icon={faArrowRight}
              title="What data am I sharing?"
            />
          }
        >
          <Box
            padding="spacing2"
            textAlign="left"
            borderRadius="sm"
            border="neutral_nonInteractive"
          >
            <Box
              as="ul"
              marginY="none"
              paddingY="none"
              color="neutral_text_lowContrast"
            >
              <li>Your name</li>
              <li>Your date of birth</li>
              <li>Your address</li>
              <li>Your account number and sort code</li>
            </Box>
          </Box>
        </Collapsible>

        <Button marginY="spacing1" size="lg" as={Link} to="/5-hpp-confirm">
          CONTINUE
        </Button>
      </Box>
    </HppCardWrapper>
  );
}
