/** @jest-environment jsdom */
import React from "react";
import { cleanup } from "@testing-library/react";
import { renderTestComponent } from "../../../../../test/renderTestComponent";
import type { StarsDisplayProps } from "../StarsDisplay";
import { StarsDisplay } from "../StarsDisplay";

afterEach(cleanup);

test("Given valid rating, renders without error", () => {
  const { getByTestId } = renderTestComponent<StarsDisplayProps>(
    <StarsDisplay rating={5} />
  );

  expect(getByTestId("tested-component")).not.toBeNull();
});

test("Given valid rating, matches snapshot", () => {
  const { getByTestId } = renderTestComponent<StarsDisplayProps>(
    <StarsDisplay rating={5} />
  );

  expect(getByTestId("tested-component")).toMatchSnapshot();
});

test("Renders 5 icons", () => {
  const { getAllByRole } = renderTestComponent<StarsDisplayProps>(
    <StarsDisplay rating={5} />
  );

  expect(getAllByRole("img", { hidden: true })).toHaveLength(5);
});
