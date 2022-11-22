/** @jest-environment jsdom */
import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { cleanup } from "@testing-library/react";
import { renderTestComponent } from "~test/renderTestComponent";
import type { ButtonProps } from "..";
import { Button } from "..";

afterEach(cleanup);

/**
 * RENDERS FONTAWESOME ICONS
 */

describe("Renders Fontawesome icons", () => {
  test("When a leading icon is provided, should render an button with this adornment", () => {
    const { getByRole } = renderTestComponent<ButtonProps>(
      <Button
        id="button"
        name="Test button"
        iconLeading={faSearch}
        color="primary"
      />
    );

    expect(getByRole("img", { hidden: true })).not.toBeNull();
  });

  test("When an trailing icon is provided, should render an button with this adornment", () => {
    const { getByRole } = renderTestComponent<ButtonProps>(
      <Button
        id="button"
        name="Test button"
        iconTrailing={faSearch}
        color="primary"
      />
    );

    expect(getByRole("img", { hidden: true })).not.toBeNull();
  });
});
