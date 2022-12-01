import React from "react";
import { Box, Collapsible } from "@alexmcgovern/boondoggle.design";
import { faArrowRight, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { CollapsibleTrigger } from "../components/CollapsibleTrigger";
import { HppCardWrapper } from "../components/HppCardWrapper";
import { PaymentSecurityInfo } from "../components/PaymentSecurityInfo";

export default function HppConfirm() {
  return (
    <Box as="section" marginY="spacing5" position="relative">
      <HppCardWrapper title="You've got the deal">
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
          <div>
            Hodor hodor hodor hodor hodor hodor hodor hodor hodor hodor hodor
            hodor hodor hodor hodor
          </div>
        </Collapsible>

        <Collapsible
          triggerNode={
            <CollapsibleTrigger
              icon={faInfoCircle}
              title="How does this work?"
            />
          }
        >
          <div>
            Hodor hodor hodor hodor hodor hodor hodor hodor hodor hodor hodor
            hodor hodor hodor hodor
          </div>
        </Collapsible>
      </HppCardWrapper>
    </Box>
  );
}
