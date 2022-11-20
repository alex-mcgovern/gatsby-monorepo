/** @jest-environment jsdom */
import { cleanup } from "@testing-library/react";
import React from "react";
import { renderTestComponent } from "~test/renderTestComponent";
import type { DownshiftMultiSelectProps } from "../DownshiftMultiSelect";
import { DownshiftMultiSelect } from "../DownshiftMultiSelect";

afterEach(cleanup);

test("When user selects and deselects an item, should call `callbackOnSelectedItemsChange` with correct values each time", async () => {
  const callbackOnSelectedItemsChange = jest.fn();
  const callbackOnSelectItem = jest.fn();

  const { component, user, getByText } =
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
        callbackOnSelectedItemsChange={callbackOnSelectedItemsChange}
        callbackOnSelectItem={callbackOnSelectItem}
      />
    );

  /**
   * Select an item
   */

  await user.click(component as HTMLDivElement);
  await user.click(getByText("foo"));

  /**
   * Ensure callbackOnSelectedItemsChange is called with all selected items
   */
  expect(callbackOnSelectedItemsChange).toHaveBeenCalledWith([
    { value: "foo", label: "foo" },
  ]);
  /**
   * Ensure callbackOnSelectItem is called with current selected item
   */
  expect(callbackOnSelectItem).toHaveBeenCalledWith({
    value: "foo",
    label: "foo",
  });
  /**
   * Ensure callbackOnSelectItem is only called once per change
   */
  expect(callbackOnSelectItem).toHaveBeenCalledTimes(1);

  /**
   * De-select same item
   */

  await user.click(component as HTMLDivElement);
  await user.click(getByText("foo"));

  /**
   * Ensure callbackOnSelectedItemsChange is called with all selected items (now an empty array)
   */
  expect(callbackOnSelectedItemsChange).toHaveBeenCalledWith([]);
  /**
   * Ensure callbackOnSelectItem is called with current selected item
   */
  expect(callbackOnSelectItem).toHaveBeenCalledWith({
    value: "foo",
    label: "foo",
  });
  /**
   * Ensure callbackOnSelectItem is only called once per change
   */
  expect(callbackOnSelectItem).toHaveBeenCalledTimes(2);
});

test("Given an initial input value, when user deselects initial item, should call `callbackOnSelectedItemsChange` with no items", async () => {
  const callbackOnSelectedItemsChange = jest.fn();
  const callbackOnSelectItem = jest.fn();

  const { component, user, getByText } =
    renderTestComponent<DownshiftMultiSelectProps>(
      <DownshiftMultiSelect
        id="test-dropdown"
        initialSelectedItems={[{ value: "foo", label: "foo" }]}
        items={[
          { value: "foo", label: "foo" },
          { value: "bar", label: "bar" },
          { value: "bob", label: "bob" },
          { value: "alice", label: "alice" },
        ]}
        name="test-dropdown"
        size={undefined}
        callbackOnSelectedItemsChange={callbackOnSelectedItemsChange}
        callbackOnSelectItem={callbackOnSelectItem}
      />
    );

  await user.click(component as HTMLDivElement);
  await user.click(getByText("foo"));

  /**
   * Ensure callbackOnSelectedItemsChange is called with all selected items (now an empty array)
   */
  expect(callbackOnSelectedItemsChange).toHaveBeenCalledWith([]);
  /**
   * Ensure callbackOnSelectItem is called with current selected item
   */
  expect(callbackOnSelectItem).toHaveBeenCalledWith({
    value: "foo",
    label: "foo",
  });
  /**
   * Ensure callbackOnSelectItem is only called once per change
   */
  expect(callbackOnSelectItem).toHaveBeenCalledTimes(1);
});
