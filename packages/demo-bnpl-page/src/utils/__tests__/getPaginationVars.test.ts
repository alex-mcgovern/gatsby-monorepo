import { getPaginationVars } from "../getPaginationVars";

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
    currentPage: 0,
    firstItemIndex: 0,
    lastItemIndex: 0,
    previousPage: 0,
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
    currentPage: 0,
    firstItemIndex: 0,
    lastItemIndex: 0,
    previousPage: 0,
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
    currentPage: 1,
    firstItemIndex: 10,
    lastItemIndex: 19,
    previousPage: 0,
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
    currentPage: 0,
    firstItemIndex: 0,
    lastItemIndex: 9,
    previousPage: 1,
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
    currentPage: 9,
    firstItemIndex: 90,
    lastItemIndex: 99,
    previousPage: 8,
    totalNbPages: 10,
  });
});
