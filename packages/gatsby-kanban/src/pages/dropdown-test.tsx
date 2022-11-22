import React, { useState } from "react";
import type { DropdownItem } from "@alexmcgovern/boondoggle.design";
import {
  Box,
  SelectMultiFilterable,
  SelectSingle,
  SelectSingleCreatable,
} from "@alexmcgovern/boondoggle.design";

export const SELECTED_ITEMS_MOCK: Array<DropdownItem> = [
  {
    label: "United Kingdom",
    value: "United Kingdom",
  },
  {
    label: "Ireland",
    value: "Ireland",
  },
  {
    label: "Spain",
    value: "Spain",
  },
  {
    label: "Germany",
    value: "Germany",
  },
  {
    label: "Italy",
    value: "Italy",
  },
];

export default function DropdownTest() {
  const [dropdown2Selection, setDropdown2Selection] = useState();
  const [dropdown3Selection, setDropdown3Selection] = useState();

  return (
    <Box display="grid" gridTemplateColumns="3x">
      <SelectSingle
        placeholder="Select a country"
        id="test-3"
        name="test-3"
        items={SELECTED_ITEMS_MOCK}
      />
      <div>
        <SelectMultiFilterable
          placeholder="Select a country"
          id="test-3"
          name="test-3"
          items={SELECTED_ITEMS_MOCK}
          onValueChange={setDropdown2Selection}
        />
        {JSON.stringify(dropdown2Selection, null, 2)}
      </div>
      <div>
        <SelectSingleCreatable
          placeholder="Select a country"
          id="test-3"
          name="test-3"
          items={SELECTED_ITEMS_MOCK}
          onValueChange={setDropdown3Selection}
        />
        {JSON.stringify(dropdown3Selection, null, 2)}
      </div>
    </Box>
  );
}
