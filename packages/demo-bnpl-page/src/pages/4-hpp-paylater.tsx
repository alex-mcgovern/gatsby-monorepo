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
  faCheck,
  faChevronDown,
  faChevronRight,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import NatwestLogo from "../images/svg/natwest.svg";
import RevolutLogo from "../images/svg/revolut.svg";

export default function HppContainer() {
  const [isOpen, setIsOpen] = useState(true);

  const collapsibleTriggerNode = useMemo(() => {
    return (
      <Button
        size="lg"
        width="100%"
        appearance="tertiary"
        justifyContent="space-between"
        border="accent_border_interactive"
        padding="spacing2"
      >
        <Box display="flex" width="100%" alignItems="center">
          <Icon icon={faInfoCircle} marginRight="spacing1" />
          <Box width="100%">
            <Box as="h5" margin="none">
              How does it work
            </Box>
          </Box>
          <Icon icon={faChevronDown} />
        </Box>
      </Button>
    );
  }, []);

  return (
    <Box
      display="grid"
      marginY="spacing5"
      alignItems="center"
      justifyContent="center"
      gap="spacing4"
      width="100%"
    >
      {/** --------------------------------------------
       * Product table
       * ----------------------------------------------- */}
      <Box __maxWidth={600} background="neutral_white">
        <Box boxShadow="md" width="100%">
          <Box display="flex" justifyContent="end">
            <Icon icon={faTimes} />
          </Box>
          <Box>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Box as="h1" textAlign="center" width="100%">
                Pay later options
              </Box>
              <Box as="h3" textAlign="center" width="100%">
                Good news! we’ve found the following offers
              </Box>
            </Box>
            {/** --------------------------------------------
             * Offer list
             * ----------------------------------------------- */}
            <Box display="grid" gap="spacing2">
              <Box
                display="flex"
                width="100%"
                border="accent_border_interactive"
                alignItems="center"
                paddingY="spacing1"
                paddingLeft="spacing1"
                paddingRight="spacing3"
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
                  <NatwestLogo />
                </Box>
                <Box width="100%">
                  <Box as="h5" margin="none">
                    3 interest-free installments
                  </Box>
                  <Box as="p" margin="none">
                    £40 a month for 3 months
                  </Box>
                </Box>
                <Icon icon={faChevronRight} />
              </Box>
              <Box
                display="flex"
                width="100%"
                border="accent_border_interactive"
                alignItems="center"
                paddingY="spacing1"
                paddingLeft="spacing1"
                paddingRight="spacing3"
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
                  <NatwestLogo />
                </Box>
                <Box width="100%">
                  <Box as="h5" margin="none">
                    4 interest-free installments
                  </Box>
                  <Box as="p" margin="none">
                    £30 a month for 4 months
                  </Box>
                </Box>
                <Icon icon={faChevronRight} />
              </Box>
              <Box
                display="flex"
                width="100%"
                border="accent_border_interactive"
                alignItems="center"
                paddingY="spacing1"
                paddingLeft="spacing1"
                paddingRight="spacing3"
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
                  <RevolutLogo />
                </Box>
                <Box width="100%">
                  <Box as="h5" margin="none">
                    12 installments at 2% apr
                  </Box>
                  <Box as="p" margin="none">
                    £12 a month for 12 months
                  </Box>
                </Box>
                <Icon icon={faChevronRight} />
              </Box>
            </Box>
            {/** --------------------------------------------
             * footer
             * ----------------------------------------------- */}
            <Box marginY="spacing2" display="grid" gap="spacing1">
              <Box background="neutral_background_base" padding="spacing2">
                <Box width="fit-content" margin="auto">
                  <Box display="flex">
                    <Icon
                      icon={faCheck}
                      color="semantic_green_highContrast"
                      marginRight="spacing1"
                    />
                    <Box>
                      <a
                        href="#"
                        className={getSprinkles({ textDecoration: "none" })}
                      >
                        Secure
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className={getSprinkles({ textDecoration: "none" })}
                      >
                        FCA-authorised
                      </a>
                    </Box>
                  </Box>
                  <Box display="flex">
                    <Icon
                      icon={faCheck}
                      color="semantic_green_highContrast"
                      marginRight="spacing1"
                    />
                    <Box>Only connect your account once</Box>
                  </Box>
                </Box>
              </Box>
              <Collapsible
                isOpen={isOpen}
                onOpenChange={setIsOpen}
                triggerNode={collapsibleTriggerNode}
              >
                <Box>
                  <Box padding="spacing2">
                    <ul>
                      <li>Your name</li>
                      <li>Your date of birth</li>
                      <li>Your address</li>
                      <li>Your account number and sort code</li>
                    </ul>
                  </Box>
                </Box>
              </Collapsible>
              <Box textAlign="center">
                First edition books can only collect a maximum £250 for
                individual payments. Until 16 April 2025.
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
