import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Collapsible,
  Loader,
} from "@alexmcgovern/boondoggle.design";
import { faArrowRight, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import { CollapsibleTrigger } from "../components/CollapsibleTrigger";
import { HppCardWrapper } from "../components/HppCardWrapper";
import { PaymentSecurityInfo } from "../components/PaymentSecurityInfo";

export default function HppConfirm() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Box as="section" marginY="spacing5" position="relative">
      <HppCardWrapper
        title={isLoading ? "Assessing eligibility" : "You've got the deal"}
      >
        {isLoading ? (
          <Loader size="2x" minHeight="25vh" />
        ) : (
          <Box>
            {/** --------------------------------------------
             * Payment info
             * ----------------------------------------------- */}
            <Box>
              You're paying <b>First Edition Books</b>
            </Box>
            <Box marginY="spacing1" fontStyle="h6">
              £400.00, for 3 months
            </Box>
            <Box>
              3 interest free instalments, totalling <b>£1,200.00</b>
            </Box>
            {/** --------------------------------------------
             * Payment security info
             * ----------------------------------------------- */}
            <PaymentSecurityInfo />
            {/** --------------------------------------------
             * Collapsibles
             * ----------------------------------------------- */}
            <Box width="100%">
              <Collapsible
                triggerNode={
                  <CollapsibleTrigger
                    icon={faArrowRight}
                    title="Payment details"
                  />
                }
              >
                <div>
                  Hodor hodor hodor hodor hodor hodor hodor hodor hodor hodor
                  hodor hodor hodor hodor hodor
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
                  Hodor hodor hodor hodor hodor hodor hodor hodor hodor hodor
                  hodor hodor hodor hodor hodor
                </div>
              </Collapsible>
            </Box>
            <Box
              fontStyle="body_sm"
              color="neutral_text_lowContrast"
              marginY="spacing1"
            >
              First edition books can only collect a maximum £250 for individual
              payments. Until 16 April 2025.
            </Box>
            <Button
              width="100%"
              marginY="spacing1"
              size="lg"
              as={Link}
              to="/6-hpp-qr-code"
            >
              CONTINUE
            </Button>
          </Box>
        )}
      </HppCardWrapper>
    </Box>
  );
}
