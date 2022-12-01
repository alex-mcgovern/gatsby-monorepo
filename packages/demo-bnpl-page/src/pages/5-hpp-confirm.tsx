import React from "react";
import { Box, Collapsible, Icon } from "@alexmcgovern/boondoggle.design";
import {
  faArrowRight,
  faBookOpen,
  faBuildingColumns,
  faInfoCircle,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
import { CollapsibleTrigger } from "../components/CollapsibleTrigger";
import { HppCardWrapper } from "../components/HppCardWrapper";
import { HppContainer } from "../components/HppContainer";
import { PaymentSecurityInfo } from "../components/PaymentSecurityInfo";
import { PeopleAlsoBought } from "../components/PeopleAlsoBought";

export default function HppPayLater() {
  return (
    <Box as="section" marginY="spacing5" position="relative">
      <HppCardWrapper title="Review payment">
        {/** --------------------------------------------
         * illustration
         * ----------------------------------------------- */}
        <Box>
          <Icon icon={faBookOpen} />
          <Icon icon={faMicrochip} />
          <Icon icon={faBuildingColumns} />
        </Box>
        {/** --------------------------------------------
         * Payment info
         * ----------------------------------------------- */}
        <Box>
          You're paying <b>First Edition Books</b>
        </Box>
        <Box fontStyle="h6">£30, for 3 months</Box>
        <Box>
          3 interest free instalments, totalling <b>£1,200</b>
        </Box>

        {/** --------------------------------------------
         * Payment security info
         * ----------------------------------------------- */}

        <PaymentSecurityInfo />

        {/** --------------------------------------------
         * Collapsibles
         * ----------------------------------------------- */}

        <Collapsible
          triggerNode={
            <CollapsibleTrigger icon={faArrowRight} title="Payment details" />
          }
        >
          Hodor hodor hodor hodor hodor hodor hodor hodor hodor hodor hodor
          hodor hodor hodor hodor
        </Collapsible>

        <Collapsible
          triggerNode={
            <CollapsibleTrigger
              icon={faInfoCircle}
              title="How does this work?"
            />
          }
        >
          Hodor hodor hodor hodor hodor hodor hodor hodor hodor hodor hodor
          hodor hodor hodor hodor
        </Collapsible>
      </HppCardWrapper>
    </Box>
  );
}
