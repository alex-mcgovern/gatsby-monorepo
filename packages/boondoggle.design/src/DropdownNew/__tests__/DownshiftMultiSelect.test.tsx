/** @jest-environment jsdom */
import { cleanup } from "@testing-library/react";
import React from "react";
import { renderTestComponent } from "~test/renderTestComponent";
import type { DownshiftMultiSelectProps } from "../DownshiftMultiSelect";
import { DownshiftMultiSelect } from "../DownshiftMultiSelect";

afterEach(cleanup);

test("Renders without error", async () => {
  const { getByTestId } = renderTestComponent<DownshiftMultiSelectProps>(
    <DownshiftMultiSelect
      id="test-dropdown"
      items={[
        { value: "foo", label: "foo" },
        { value: "bar", label: "bar" },
        { value: "bob", label: "bob" },
        { value: "alice", label: "alice" },
      ]}
      name="test-dropdown"
      size={undefined}
    />
  );

  expect(getByTestId("tested-component")).not.toBeNull();
  expect(getByTestId("tested-component")).toMatchSnapshot();
});
