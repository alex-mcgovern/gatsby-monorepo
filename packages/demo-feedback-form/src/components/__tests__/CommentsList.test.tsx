/** @jest-environment jsdom */
import React from "react";
import { cleanup } from "@testing-library/react";
import { renderTestComponent } from "../../../../../test/renderTestComponent";
import type { CommentsListProps } from "../CommentsList";
import { CommentsList } from "../CommentsList";
import { COMMENTS_DOCUMENTS } from "../__mocks__/COMMENTS.mock";

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

test("Given valid comment list, renders without error", () => {
  const { getByTestId } = renderTestComponent<CommentsListProps>(
    <CommentsList
      comments={COMMENTS_DOCUMENTS}
      isLoading={false}
      error={undefined}
    />
  );

  expect(getByTestId("tested-component")).not.toBeNull();
});

test("Given valid comment list, matches snapshot", () => {
  const { getByTestId } = renderTestComponent<CommentsListProps>(
    <CommentsList
      comments={COMMENTS_DOCUMENTS}
      isLoading={false}
      error={undefined}
    />
  );

  expect(getByTestId("tested-component")).toMatchSnapshot();
});

test("Given isLoading state, renders loader", () => {
  const { getByRole } = renderTestComponent<CommentsListProps>(
    <CommentsList comments={[]} isLoading={true} error={undefined} />
  );

  expect(getByRole("img", { hidden: true })).not.toBeNull();
});

test("Given error, renders error", () => {
  const { getByText } = renderTestComponent<CommentsListProps>(
    <CommentsList
      comments={[]}
      isLoading={false}
      error={{ message: "Error message", code: "unknown", name: "Error name" }}
    />
  );

  expect(getByText("Error message")).not.toBeNull();
});
