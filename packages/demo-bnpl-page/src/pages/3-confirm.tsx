import React from "react";
import { Box, Button, Card, Icon } from "@alexmcgovern/boondoggle.design";
import {
  faAngleRight,
  faBuildingColumns,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

export default function ConfirmPurchase() {
  return (
    <Box as="section" marginY="spacing5" position="relative">
      <Box
        display="grid"
        marginY="spacing5"
        gridTemplateColumns="3x"
        alignItems="center"
        gap="spacing4"
      >
        {/** --------------------------------------------
         * Delivery address
         * ----------------------------------------------- */}

        <Box>
          <Box display="flex" justifyContent="space-between">
            <Box fontStyle="body_lg" fontWeight="bold">
              Delivery address
            </Box>

            <Button appearance="tertiary" size="sm">
              Change
            </Button>
          </Box>

          <hr />

          <div>Bob Smith</div>
          <div>43-45 Risbygate St</div>
          <div>Bury St.Edmunds</div>
          <div>Suffolk</div>
          <div>IP33 3AA</div>
        </Box>

        {/** --------------------------------------------
         * Order review
         * ----------------------------------------------- */}

        <Box>
          <Box fontStyle="body_lg" fontWeight="bold">
            Order review
          </Box>

          <hr />

          <Box
            borderBottom="neutral_nonInteractive"
            display="flex"
            paddingY="spacing1"
            justifyContent="space-between"
          >
            <Box>Subtotal</Box>
            <Box>£1,000.00</Box>
          </Box>

          <Box
            borderBottom="neutral_nonInteractive"
            display="flex"
            paddingY="spacing1"
            justifyContent="space-between"
          >
            <Box>Shipping</Box>
            <Box>Free</Box>
          </Box>

          <Box
            borderBottom="neutral_nonInteractive"
            display="flex"
            fontWeight="bold"
            paddingY="spacing1"
            justifyContent="space-between"
          >
            <Box>Total</Box>
            <Box>£1,000</Box>
          </Box>
        </Box>

        {/** --------------------------------------------
         * Checkout card
         * ----------------------------------------------- */}

        <Card display="flex" flexDirection="column" gap="spacing1">
          <Box fontStyle="body_lg" fontWeight="bold" marginBottom="spacing1">
            Payment methods
          </Box>

          <Card
            as={Link}
            to="/4-hpp-paylater"
            padding="spacing2"
            borderRadius="md"
            justifyContent="space-between"
            border="accent_border_interactive"
          >
            <Box display="flex" alignItems="center" gap="spacing1">
              <Icon icon={faBuildingColumns} />
              <Box fontStyle="body_md">Pay later with Natwest</Box>
            </Box>
            <Box fontStyle="body_sm" color="neutral_text_lowContrast">
              Fast, secure and no need to enter details – just authenticate in
              your bank app.
            </Box>
          </Card>

          <Button
            appearance="tertiary"
            color="neutral"
            iconLeading={faBuildingColumns}
          >
            Pay later by bank
          </Button>
          <Button
            appearance="tertiary"
            color="neutral"
            iconLeading={faCreditCard}
          >
            Credit/debit card
          </Button>
          <Button
            appearance="tertiary"
            color="neutral"
            iconLeading={faCreditCard}
          >
            PayPal
          </Button>

          <Button
            marginTop="spacing2"
            appearance="primary"
            color="accent"
            iconTrailing={faAngleRight}
          >
            Checkout
          </Button>
        </Card>
      </Box>{" "}
    </Box>
  );
}
