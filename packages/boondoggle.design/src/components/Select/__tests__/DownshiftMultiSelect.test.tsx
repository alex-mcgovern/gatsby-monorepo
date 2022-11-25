/** @jest-environment jsdom */
import React from "react";
import { renderTestComponent } from "@alexmcgovern/gatsby-shared/src/shared-testing/TestComponentRenderer";
import { cleanup } from "@testing-library/react";
import type { SelectMultiFilterableProps } from "../SelectMultiFilterable";
import { SelectMultiFilterable } from "../SelectMultiFilterable";

afterEach(cleanup);

test("Renders without error", async () => {
  const { getByTestId } = renderTestComponent<SelectMultiFilterableProps>(
    <SelectMultiFilterable
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
