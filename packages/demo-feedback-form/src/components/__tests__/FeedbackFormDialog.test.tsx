/** @jest-environment jsdom */
import React from "react";
import { cleanup } from "@testing-library/react";
import { renderTestComponent } from "../../../../../test/renderTestComponent";
import { FeedbackFormDialog } from "../FeedbackFormDialog";

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

test("Renders without error", () => {
  const { getByTestId } = renderTestComponent(<FeedbackFormDialog />);

  expect(getByTestId("tested-component")).not.toBeNull();
});

test("Matches snapshot", () => {
  const { getByTestId } = renderTestComponent(<FeedbackFormDialog />);

  expect(getByTestId("tested-component")).toMatchSnapshot();
});
