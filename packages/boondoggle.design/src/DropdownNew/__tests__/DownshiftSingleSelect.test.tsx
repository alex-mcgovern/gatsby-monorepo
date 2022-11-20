/** @jest-environment jsdom */
import React from "react";
import { cleanup } from "@testing-library/react";
import { renderTestComponent } from "~test/renderTestComponent";
import type { SingleSelectProps } from "../SingleSelect";
import { SingleSelect } from "../SingleSelect";

afterEach(cleanup);

test("Renders without error", async () => {
  const { getByTestId } = renderTestComponent<SingleSelectProps>(
    <SingleSelect
      id="test-dropdown"
      initialInputValue="foo"
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

test("When user selects an item, should call `onChange` correctly", async () => {
  const onChange = jest.fn();

  const { component, user, getByText } = renderTestComponent<SingleSelectProps>(
    <SingleSelect
      id="test-dropdown"
      initialInputValue="foo"
      items={[
        { value: "foo", label: "foo" },
        { value: "bar", label: "bar" },
        { value: "bob", label: "bob" },
        { value: "alice", label: "alice" },
      ]}
      name="test-dropdown"
      size={undefined}
      onChange={onChange}
    />
  );

  await user.click(component as HTMLDivElement);

  await user.click(getByText("bar"));

  expect(onChange).toHaveBeenCalledWith({ value: "bar", label: "bar" });
});
