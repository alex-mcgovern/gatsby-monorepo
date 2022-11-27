/** @jest-environment jsdom */
import React from "react";
import { cleanup } from "@testing-library/react";
import { renderTestComponent } from "../../../../../test/renderTestComponent";
import { CommentShape } from "../../types";
import { Comment } from "../Comment";
import { COMMENTS_DOCUMENTS } from "../__mocks__/COMMENTS.mock";

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

test("Given valid comment, renders without error", () => {
  const { getByTestId } = renderTestComponent<CommentShape>(
    <Comment {...COMMENTS_DOCUMENTS[0]} />
  );

  expect(getByTestId("tested-component")).not.toBeNull();
});

test("Given valid comment, matches snapshot", () => {
  const { getByTestId } = renderTestComponent<CommentShape>(
    <Comment {...COMMENTS_DOCUMENTS[0]} />
  );

  expect(getByTestId("tested-component")).toMatchSnapshot();
});

test("Given valid comment, renders correct text", () => {
  const { getByText } = renderTestComponent<CommentShape>(
    <Comment {...COMMENTS_DOCUMENTS[0]} />
  );

  expect(getByText("test123@test.com")).not.toBeNull();
  expect(getByText("This is a test description")).not.toBeNull();
});
