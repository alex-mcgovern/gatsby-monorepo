import * as React from "react";
import {
  Box,
  SelectSingle,
  getSprinkles,
} from "@alexmcgovern/boondoggle.design";
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
];

function PeopleAlsoBoughtCard() {
  return (
    <Box>
      <StaticImage
        className={getSprinkles({
          aspectRatio: "square",
          borderRadius: "md",
          marginBottom: "spacing1",
          border: "neutral_nonInteractive",
          boxShadow: "lg",
        })}
        alt="Book"
        src="../images/book.webp"
      />

      <Box>50 shades of grey</Box>
    </Box>
  );
}

export function PeopleAlsoBought() {
  return (
    <Box>
      <Box fontStyle="body_md" fontWeight="bold">
        People also bought
      </Box>
      <Box
        display="grid"
        marginY="spacing5"
        gridTemplateColumns="4x"
        alignItems="center"
        gap="spacing4"
      >
        <PeopleAlsoBoughtCard />
        <PeopleAlsoBoughtCard />
        <PeopleAlsoBoughtCard />
        <PeopleAlsoBoughtCard />
        <PeopleAlsoBoughtCard />
        <PeopleAlsoBoughtCard />
        <PeopleAlsoBoughtCard />
        <PeopleAlsoBoughtCard />
      </Box>
    </Box>
  );
}
