/** @jest-environment jsdom */
import React from "react";
import { cleanup } from "@testing-library/react";
import { renderTestComponent } from "../../../../../test/renderTestComponent";
import { CommentShape } from "../../types";
import type { FeedbackGraphProps } from "../FeedbackGraph";
import { FeedbackGraph } from "../FeedbackGraph";
import { COMMENTS_DOCUMENTS } from "../__mocks__/COMMENTS.mock";

afterEach(cleanup);

/**
 * Note: Currently not passing due to some under-the-hood async update
 * of FeedbackGraph.
 *
 * ToDo(FeedbackGraph): Fix tests
 */

test.skip("Given valid comments, renders without error", async () => {
  const { findByTestId } = renderTestComponent<FeedbackGraphProps>(
    <FeedbackGraph documents={COMMENTS_DOCUMENTS} />
  );

  expect(await findByTestId("tested-component")).not.toBeNull();
});

test.skip("Given valid comments, matches snapshot", async () => {
  const { findByTestId } = renderTestComponent<CommentShape>(
    <FeedbackGraph documents={COMMENTS_DOCUMENTS} />
  );

  expect(await findByTestId("tested-component")).toMatchSnapshot();
});
