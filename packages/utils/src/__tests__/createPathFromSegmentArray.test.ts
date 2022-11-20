import { createPathFromSegmentArray } from "../createPathFromSegmentArray";

test("Creates path correctly from simple segment array", () => {
  expect(createPathFromSegmentArray(["blog", "personal"])).toBe(
    "/blog/personal"
  );
});

test("Creates path correctly from complex segment array when an item is undefined", () => {
  expect(createPathFromSegmentArray(["blog", undefined])).toBe("/blog");
});
