/** @jest-environment jsdom */
import { cleanup } from "@testing-library/react";
import React from "react";
import { renderTestComponent } from "~test/renderTestComponent";
import type { DownshiftMultiSelectProps } from "../DownshiftMultiSelect";
import { DownshiftMultiSelect } from "../DownshiftMultiSelect";

afterEach(cleanup);

test("Given 1 initial selected item, on first render, should have text '1 selected'", async () => {
  const { getByPlaceholderText } =
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
      />
    );

  expect(getByPlaceholderText("1 selected")).not.toBeNull();
});

test("Given 2 initial selected items, on first render, should have text '2 selected'", async () => {
  const { getByPlaceholderText } =
    renderTestComponent<DownshiftMultiSelectProps>(
      <DownshiftMultiSelect
        id="test-dropdown"
        initialSelectedItems={[
          { value: "foo", label: "foo" },
          { value: "bar", label: "bar" },
        ]}
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

  expect(getByPlaceholderText("2 selected")).not.toBeNull();
});

test("Given an invalid initial selected item, on first render, input should not have value", async () => {
  const { getByPlaceholderText } =
    renderTestComponent<DownshiftMultiSelectProps>(
      <DownshiftMultiSelect
        id="test-dropdown"
        initialSelectedItems={[{ value: "wrong", label: "wrong" }]}
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

  expect(getByPlaceholderText("All")).not.toBeNull();
});
