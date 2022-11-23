/** @jest-environment jsdom */
import React from "react";
import { renderTestComponent } from "@alexmcgovern/gatsby-shared";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { cleanup } from "@testing-library/react";
import type { ButtonProps } from "../index";
import { Button } from "../index";

library.add(faSearch);

afterEach(cleanup);

describe("Renders correctly", () => {
  test("Renders without error", () => {
    const { getByTestId } = renderTestComponent<ButtonProps>(
      <Button id="button" name="Test button" color="accent" />
    );

    expect(getByTestId("tested-component")).not.toBeNull();
  });

  test("Renders child text correctly", () => {
    const { getByText } = renderTestComponent<ButtonProps>(
      <Button id="button" name="Test button" color="accent">
        Test text
      </Button>
    );

    expect(getByText("Test text")).not.toBeNull();
  });
});
