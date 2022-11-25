import { getPaginationVars } from "../getPaginationVars";

test("Given valid args, and index of 0, returns correct value", () => {
  expect(
    getPaginationVars({
      basePagePath: "blog",
      index: 0,
      itemsPerPage: 12,
    })
  ).toStrictEqual({
    currentPage: 1,
    itemsToSkip: 0,
    pagePath: "/blog",
  });
});

test("Given valid args, and index of 1, returns correct value", () => {
  expect(
    getPaginationVars({
      basePagePath: "blog",
      index: 1,
      itemsPerPage: 12,
    })
  ).toStrictEqual({
    currentPage: 2,
    itemsToSkip: 12,
    pagePath: "/blog/2",
  });
});
