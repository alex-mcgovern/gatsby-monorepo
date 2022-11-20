/** @jest-environment jsdom */
import { cleanup } from "@testing-library/react";
import React from "react";
import { renderTestComponent } from "~test/renderTestComponent";
import type { DownshiftMultiSelectProps } from "../DownshiftMultiSelect";
import { DownshiftMultiSelect } from "../DownshiftMultiSelect";

afterEach(cleanup);

test("When user types a valid `inputValue`, filters rendered items correctly", async () => {
  const onChange = jest.fn();

  const { user, getByText, getAllByRole, getByRole } =
    renderTestComponent<DownshiftMultiSelectProps>(
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
        callbackOnSelectedItemsChange={onChange}
      />
    );

  const inputElement = getByRole("textbox");

  /**
   * Type an 'inputValue'
   */

  await user.type(inputElement as HTMLDivElement, "foo");

  /**
   * Shows items matching `inputValue`
   */

  expect(getByText("foo")).not.toBeNull();

  /**
   * Doesn't show items that don't match `inputValue`
   */
  expect(getAllByRole("option").length).toBe(1);
});

test("When user types an invalid `inputValue`, filters rendered items correctly", async () => {
  const onChange = jest.fn();

  const { user, queryByRole, getByRole } =
    renderTestComponent<DownshiftMultiSelectProps>(
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
        callbackOnSelectedItemsChange={onChange}
      />
    );

  const inputElement = getByRole("textbox");

  /**
   * Type an 'inputValue'
   */

  await user.type(inputElement as HTMLDivElement, "wrong");

  /**
   * Doesn't show items that don't match `inputValue`
   */
  expect(queryByRole("option")).toBe(null);
});
