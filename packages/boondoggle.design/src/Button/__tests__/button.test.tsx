/** @jest-environment jsdom */
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { cleanup } from "@testing-library/react";
import { renderTestComponent } from "~test/renderTestComponent";
import type { ButtonProps } from "..";
import { Button } from "..";

library.add(faSearch);

afterEach(cleanup);

describe("Renders correctly", () => {
  test("Renders without error", () => {
    const { getByTestId } = renderTestComponent<ButtonProps>(
      <Button id="button" name="Test button" color="primary" />
    );

    expect(getByTestId("tested-component")).not.toBeNull();
  });

  test("Renders child text correctly", () => {
    const { getByText } = renderTestComponent<ButtonProps>(
      <Button id="button" name="Test button" color="primary">
        Test text
      </Button>
    );

    expect(getByText("Test text")).not.toBeNull();
  });
});
