import { getPaginationVars } from "../utils/getPaginationVars";

test("Given initial values, returns correct state", () => {
  expect(
    getPaginationVars({
      count: 0,
      perPage: 10,
      newIndex: 0,
      currentIndex: 0,
      docsLength: 0,
    })
  ).toStrictEqual({
    canLoadNext: false,
    canLoadPrevious: false,
    pageNbCurrent: 0,
    indexOfFirstInCursor: 0,
    indexOfLastInCursor: 0,
    pageNbPrevious: 0,
    totalNbPages: 0,
  });
});

test("Given values for updating count only, returns correct state", () => {
  expect(
    getPaginationVars({
      count: 100,
      perPage: 10,
      newIndex: 0,
      currentIndex: 0,
      docsLength: 0,
    })
  ).toStrictEqual({
    canLoadNext: true,
    canLoadPrevious: false,
    pageNbCurrent: 0,
    indexOfFirstInCursor: 0,
    indexOfLastInCursor: 0,
    pageNbPrevious: 0,
    totalNbPages: 10,
  });
});

test("Given values for incrementing page, returns correct state", () => {
  expect(
    getPaginationVars({
      count: 100,
      perPage: 10,
      newIndex: 1,
      currentIndex: 0,
      docsLength: 10,
    })
  ).toStrictEqual({
    canLoadNext: true,
    canLoadPrevious: true,
    pageNbCurrent: 1,
    indexOfFirstInCursor: 10,
    indexOfLastInCursor: 19,
    pageNbPrevious: 0,
    totalNbPages: 10,
  });
});

test("Given values for decrementing page, returns correct state", () => {
  expect(
    getPaginationVars({
      count: 100,
      perPage: 10,
      newIndex: 0,
      currentIndex: 1,
      docsLength: 10,
    })
  ).toStrictEqual({
    canLoadNext: true,
    canLoadPrevious: false,
    pageNbCurrent: 0,
    indexOfFirstInCursor: 0,
    indexOfLastInCursor: 9,
    pageNbPrevious: 1,
    totalNbPages: 10,
  });
});

test("Given values for incrementing to last page, returns correct state", () => {
  expect(
    getPaginationVars({
      count: 100,
      perPage: 10,
      newIndex: 9,
      currentIndex: 8,
      docsLength: 10,
    })
  ).toStrictEqual({
    canLoadNext: false,
    canLoadPrevious: true,
    pageNbCurrent: 9,
    indexOfFirstInCursor: 90,
    indexOfLastInCursor: 99,
    pageNbPrevious: 8,
    totalNbPages: 10,
  });
});
