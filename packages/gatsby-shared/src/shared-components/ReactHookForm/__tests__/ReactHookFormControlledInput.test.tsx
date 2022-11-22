/** @jest-environment jsdom */
import { cleanup } from "@testing-library/react";
import React from "react";
import { renderTestComponent } from "~test/renderTestComponent";
import type { ReactHookFormControlledInputProps } from "../ReactHookFormControlledInput";
import { ReactHookFormControlledInput } from "../ReactHookFormControlledInput";
import { ReactHookFormTestProvider } from "../ReactHookFormTestProvider";

afterEach(cleanup);

/**
 * UPDATING VALUE
 */

test("Given required props, renders without errors", async () => {
  const { component } = renderTestComponent<ReactHookFormControlledInputProps>(
    <ReactHookFormTestProvider>
      <ReactHookFormControlledInput
        id="input"
        name="Test input"
        errorMessage="Error"
        label="test input"
      />
    </ReactHookFormTestProvider>
  );

  expect(component as HTMLInputElement).not.toBeNull();
});

test("Given required props, matches snapshot", async () => {
  const { component } = renderTestComponent<ReactHookFormControlledInputProps>(
    <ReactHookFormTestProvider>
      <ReactHookFormControlledInput
        id="input"
        name="Test input"
        errorMessage="Error"
        label="test input"
      />
    </ReactHookFormTestProvider>
  );

  expect(component as HTMLInputElement).toMatchSnapshot();
});

test("Given an input without value, when changing, it should have the new value", async () => {
  const { user, getByRole } =
    renderTestComponent<ReactHookFormControlledInputProps>(
      <ReactHookFormTestProvider>
        <ReactHookFormControlledInput
          id="input"
          name="Test input"
          errorMessage="Error"
          label="test input"
        />
      </ReactHookFormTestProvider>
    );

  const input = getByRole("textbox") as HTMLInputElement;

  expect(input?.value).toBe("");
  await user.type(input, "New value");
  expect(input?.value).toBe("New value");
});
