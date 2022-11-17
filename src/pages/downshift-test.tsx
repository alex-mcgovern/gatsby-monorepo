import React from "react";
import { BoxNew } from "../components/atoms/box_new/box_new";
import DropdownSearchable from "../components/molecules/Dropdown/DropdownSearchable";

interface DownshiftTestProps {
  placeholderProp: undefined;
}

export default function DownshiftTest({ placeholderProp }: DownshiftTestProps) {
  return (
    <BoxNew margin="spacing5">
      <DropdownSearchable
        label="Downshift test"
        isCreatable
        initialInputValue=""
        id="downshift test"
        placeholder="Placeholder"
        variant={{
          appearance: "primary",
          size: "sm",
        }}
        items={[{ value: "test", label: "test" }]}
      />
      {/* <ComboboxSearchable
        isSearchable
        label="Downshift test"
        isCreatable
        initialInputValue="Placeholder"
        variant={{
          appearance: "primary",
          size: "md",
        }}
        items={[{ value: "test" }]}
      />
      <ComboboxSearchable
        isSearchable
        label="Downshift test"
        id="downshift test"
        initialInputValue="Placeholder"
        isCreatable
        variant={{
          appearance: "primary",
          size: "lg",
        }}
        items={[{ value: "test" }]}
      /> */}
    </BoxNew>
  );
}

DownshiftTest.defaultProps = {
  placeholderProp: null,
};
