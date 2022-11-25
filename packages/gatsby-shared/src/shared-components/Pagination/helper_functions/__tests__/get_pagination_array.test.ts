import { getPaginationArray } from "../get_pagination_array";

describe("[Pagination] Filter page array", () => {
  test("Current page: 1, Page count: 1", () => {
    expect(getPaginationArray({ currentPage: 1, pageCount: 1 })).toEqual([1]);
  });
  test("Current page: 1, Page count: 10", () => {
    expect(getPaginationArray({ currentPage: 1, pageCount: 10 })).toEqual([
      1, 2, 3, 4, 5,
    ]);
  });

  test("Current page: 5, Page count: 10", () => {
    expect(getPaginationArray({ currentPage: 5, pageCount: 10 })).toEqual([
      3, 4, 5, 6, 7,
    ]);
  });

  test("Current page: 7, Page count: 28", () => {
    expect(getPaginationArray({ currentPage: 7, pageCount: 28 })).toEqual([
      5, 6, 7, 8, 9,
    ]);
  });
  test("Current page: 12, Page count: 28", () => {
    expect(getPaginationArray({ currentPage: 12, pageCount: 28 })).toEqual([
      10, 11, 12, 13, 14,
    ]);
  });
  test("Current page: 28, Page count: 28", () => {
    expect(getPaginationArray({ currentPage: 28, pageCount: 28 })).toEqual([
      24, 25, 26, 27, 28,
    ]);
  });
});
