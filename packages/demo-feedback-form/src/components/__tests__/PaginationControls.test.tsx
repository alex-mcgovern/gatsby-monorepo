/** @jest-environment jsdom */
import React from "react";
import { cleanup } from "@testing-library/react";
import { renderTestComponent } from "../../../../../test/renderTestComponent";
import { UsePaginatedCommentsStateShape } from "../../utils/usePaginatedComments";
import { PaginationControls } from "../PaginationControls";

afterEach(cleanup);

/** ---------------------------------------------
 * Mock firestore when not directly testing as jest
 * will attempt to pull in un-transpiled es6 js from firebase
 * ----------------------------------------------- */
jest.mock("firebase/firestore", () => {
  return {
    getFirestore: jest.fn(),
  };
});
jest.mock("firebase/app", () => {
  return {
    initializeApp: jest.fn(),
  };
});
jest.mock("firebase/auth", () => {
  return {
    getAuth: jest.fn(),
  };
});

test("Given valid props, renders without error", () => {
  const { getByTestId } = renderTestComponent<UsePaginatedCommentsStateShape>(
    <PaginationControls
      canLoadNext={true}
      canLoadPrevious={false}
      currentPage={0}
      firstItemIndex={0}
      lastItemIndex={4}
      totalNbComments={101}
      totalNbPages={21}
    />
  );

  expect(getByTestId("tested-component")).not.toBeNull();
});

test("Given valid props, matches snapshot", () => {
  const { getByTestId } = renderTestComponent<UsePaginatedCommentsStateShape>(
    <PaginationControls
      canLoadNext={true}
      canLoadPrevious={false}
      currentPage={0}
      firstItemIndex={0}
      lastItemIndex={4}
      totalNbComments={101}
      totalNbPages={21}
    />
  );

  expect(getByTestId("tested-component")).toMatchSnapshot();
});

test("Given initial props, buttons have correct `disabled` state", () => {
  const { getByText } = renderTestComponent<UsePaginatedCommentsStateShape>(
    <PaginationControls
      canLoadNext={true}
      canLoadPrevious={false}
      currentPage={0}
      firstItemIndex={0}
      lastItemIndex={4}
      totalNbComments={101}
      totalNbPages={21}
    />
  );

  expect(getByText("Older")).not.toBeDisabled();
  expect(getByText("Newer")).toBeDisabled();
});

test("Given props for second page, buttons have correct `disabled` state", () => {
  const { getByText } = renderTestComponent<UsePaginatedCommentsStateShape>(
    <PaginationControls
      canLoadNext={true}
      canLoadPrevious={true}
      currentPage={1}
      firstItemIndex={10}
      lastItemIndex={19}
      totalNbComments={101}
      totalNbPages={21}
    />
  );

  expect(getByText("Older")).not.toBeDisabled();
  expect(getByText("Newer")).not.toBeDisabled();
});
