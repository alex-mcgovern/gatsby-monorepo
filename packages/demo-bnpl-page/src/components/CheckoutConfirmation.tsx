import * as React from "react";
import {
  Box,
  Button,
  Card,
  Icon,
  SelectSingle,
  getSprinkles,
} from "@alexmcgovern/boondoggle.design";
import {
  faAngleRight,
  faBuildingColumns,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const SELECT_QUANTITY_ITEMS = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
  {
    value: "6",
    label: "6",
  },
  {
    value: "7",
    label: "7",
  },
];

export function CheckoutConfirmation() {
  return (
    <Box
      display="grid"
      marginY="spacing5"
      gridTemplateColumns="2_1"
      alignItems="center"
      gap="spacing4"
    >
      {/** --------------------------------------------
       * Product table
       * ----------------------------------------------- */}

      <Box>
        <Box
          display="grid"
          gridTemplateColumns="4x"
          borderBottom="neutral_nonInteractive"
          justifyContent="space-between"
          paddingY="spacing2"
          fontWeight="bold"
          gap="spacing2"
        >
          <div />
          <Box>Product</Box>
          <Box>Price</Box>
          <Box>Quantity</Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="4x"
          paddingY="spacing2"
          gap="spacing2"
        >
          <StaticImage
            className={getSprinkles({
              aspectRatio: "square",
              borderRadius: "md",
              border: "neutral_nonInteractive",
              boxShadow: "lg",
            })}
            alt="Book"
            src="../images/book.webp"
          />

          <Box>50 shades of grey</Box>
          <Box>£1,000</Box>
          <Box>
            <SelectSingle
              items={SELECT_QUANTITY_ITEMS}
              width="max-content"
              placeholder="1"
            />
          </Box>
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
    </Box>
  );
}
