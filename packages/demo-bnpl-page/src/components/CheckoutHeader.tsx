import * as React from "react";
import {
  Box,
  Button,
  Card,
  SelectSingle,
  getSprinkles,
} from "@alexmcgovern/boondoggle.design";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
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

export function CheckoutHeader() {
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

      <Card>
        <Box fontStyle="body_lg" fontWeight="bold">
          Basket totals
        </Box>

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

        <Button
          marginTop="spacing2"
          appearance="primary"
          color="accent"
          as={Link}
          to="2-login-to-checkout"
          state={{ returnTo: "/3-confirm" }}
          iconTrailing={faAngleRight}
        >
          Checkout
        </Button>
      </Card>
    </Box>
  );
}
