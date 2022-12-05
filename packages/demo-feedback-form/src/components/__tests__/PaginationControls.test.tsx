/** @jest-environment jsdom */
import React from "react";
import { cleanup } from "@testing-library/react";
import { renderTestComponent } from "../../../../../test/renderTestComponent";
import { PaginatedCommentsState } from "../../utils/usePaginatedComments";
import { PaginationControls } from "../PaginationControls";

afterEach(cleanup);

/** ---------------------------------------------
 * Mock firestore when not directly testing as jest
 * will attempt to pull in un-transpiled es6 js from firebase
 * ----------------------------------------------- */
jest.mock("firebase/firestore", () => {
  return {
    initializeFirestore: jest.fn(),
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
  const { getByTestId } = renderTestComponent<PaginatedCommentsState>(
    <PaginationControls
      canLoadNext={true}
      canLoadPrevious={false}
      pageNbCurrent={0}
      indexOfFirstInCursor={0}
      indexOfLastInCursor={4}
      totalNbComments={101}
      totalNbPages={21}
    />
  );

  expect(getByTestId("tested-component")).not.toBeNull();
});

test("Given valid props, matches snapshot", () => {
  const { getByTestId } = renderTestComponent<PaginatedCommentsState>(
    <PaginationControls
      canLoadNext={true}
      canLoadPrevious={false}
      pageNbCurrent={0}
      indexOfFirstInCursor={0}
      indexOfLastInCursor={4}
      totalNbComments={101}
      totalNbPages={21}
    />
  );

  expect(getByTestId("tested-component")).toMatchSnapshot();
});

/**
 * ToDo: Use `getByRole` instead of `getByTestId` — subbing this in due to time constraints
 */

test("Given initial props, buttons have correct `disabled` state", () => {
  const { getByTestId } = renderTestComponent<PaginatedCommentsState>(
    <PaginationControls
      canLoadNext={true}
      canLoadPrevious={false}
      pageNbCurrent={0}
      indexOfFirstInCursor={0}
      indexOfLastInCursor={4}
      totalNbComments={101}
      totalNbPages={21}
    />
  );

  expect(getByTestId("load-next")).not.toBeDisabled();
  expect(getByTestId("load-previous")).toBeDisabled();
});

test("Given props for second page, buttons have correct `disabled` state", () => {
  const { getByTestId } = renderTestComponent<PaginatedCommentsState>(
    <PaginationControls
      canLoadNext={true}
      canLoadPrevious={true}
      pageNbCurrent={1}
      indexOfFirstInCursor={10}
      indexOfLastInCursor={19}
      totalNbComments={101}
      totalNbPages={21}
    />
  );

  expect(getByTestId("load-next")).not.toBeDisabled();
  expect(getByTestId("load-previous")).not.toBeDisabled();
});
