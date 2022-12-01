import { QUERY_SNAPSHOT_MOCK } from "../__mocks__/QUERY_SNAPSHOT.mock";
import { firestorePaginationReducer } from "../firestorePaginationReducer";

/** -----------------------------------------------------------------------------
 * Initialisation
 * ------------------------------------------------------------------------------- */

test("Given initial values, returns state correctly", () => {
  expect(
    firestorePaginationReducer(
      {
        canLoadPrevious: false,
        canLoadNext: false,
        totalNbComments: 0,
        currentPage: 0,
        previousPage: 0,
        totalNbPages: 0,
        commentsPerPage: 10,
      },
      {}
    )
  ).toStrictEqual({
    canLoadPrevious: false,
    canLoadNext: false,
    totalNbComments: 0,
    commentsPerPage: 10,
    currentPage: 0,
    previousPage: 0,
    totalNbPages: 0,
    firstItemIndex: 0,
    lastItemIndex: 0,
  });
});

/** -----------------------------------------------------------------------------
 * Dispatch actions
 * ------------------------------------------------------------------------------- */

describe("Dispatch actions", () => {
  /** ---------------------------------------------
   * Update total number of comments
   * ----------------------------------------------- */

  describe("SET_COUNT", () => {
    test("Given initial values, without snapshot, when updates count, returns correct values", () => {
      expect(
        firestorePaginationReducer(
          {
            canLoadNext: false,
            canLoadPrevious: false,
            commentsPerPage: 10,
            currentPage: 0,
            previousPage: 0,
            totalNbComments: 0,
            totalNbPages: 0,
          },
          {
            type: "SET_COUNT",
            payload: { totalNbComments: 100 },
          }
        )
      ).toStrictEqual({
        canLoadNext: true,
        canLoadPrevious: false,
        commentsPerPage: 10,
        currentPage: 0,
        firstItemIndex: 0,
        lastItemIndex: 0,
        previousPage: 0,
        totalNbComments: 100,
        totalNbPages: 10,
      });
    });

    test("Given first page, with snapshot, when updates count, returns correct values", () => {
      expect(
        firestorePaginationReducer(
          {
            canLoadNext: true,
            canLoadPrevious: true,
            commentsPerPage: 10,
            currentPage: 2,
            previousPage: 3,
            querySnapshot: QUERY_SNAPSHOT_MOCK,
            totalNbComments: 100,
            totalNbPages: 10,
          },
          {
            type: "SET_COUNT",
            payload: { totalNbComments: 100 },
          }
        )
      ).toStrictEqual({
        canLoadNext: true,
        canLoadPrevious: false,
        commentsPerPage: 10,
        currentPage: 0,
        firstItemIndex: 0,
        lastItemIndex: 9,
        previousPage: 2,
        querySnapshot: QUERY_SNAPSHOT_MOCK,
        totalNbComments: 100,
        totalNbPages: 10,
      });
    });
  });

  /** ---------------------------------------------
   * Load next
   * ----------------------------------------------- */

  describe("LOAD_OLDER", () => {
    test("Given first page, when loads next, returns correct values", () => {
      expect(
        firestorePaginationReducer(
          {
            canLoadPrevious: false,
            canLoadNext: true,
            totalNbComments: 100,
            commentsPerPage: 10,
            currentPage: 0,
            previousPage: 0,
            totalNbPages: 10,
            querySnapshot: QUERY_SNAPSHOT_MOCK,
          },
          {
            type: "LOAD_OLDER",
          }
        )
      ).toStrictEqual({
        canLoadNext: true,
        canLoadPrevious: true,
        commentsPerPage: 10,
        currentPage: 1,
        firstItemIndex: 10,
        lastItemIndex: 19,
        previousPage: 0,
        querySnapshot: QUERY_SNAPSHOT_MOCK,
        totalNbComments: 100,
        totalNbPages: 10,
      });
    });

    test("Given page 2, when loads next, returns correct values", () => {
      expect(
        firestorePaginationReducer(
          {
            canLoadNext: true,
            canLoadPrevious: true,
            commentsPerPage: 10,
            currentPage: 2,
            previousPage: 3,
            querySnapshot: QUERY_SNAPSHOT_MOCK,
            totalNbComments: 100,
            totalNbPages: 10,
          },
          {
            type: "LOAD_OLDER",
          }
        )
      ).toStrictEqual({
        canLoadNext: true,
        canLoadPrevious: true,
        commentsPerPage: 10,
        currentPage: 3,
        firstItemIndex: 30,
        lastItemIndex: 39,
        previousPage: 2,
        querySnapshot: QUERY_SNAPSHOT_MOCK,
        totalNbComments: 100,
        totalNbPages: 10,
      });
    });

    test("Given second last page, when loads previous, should disable `canLoadNext`", () => {
      expect(
        firestorePaginationReducer(
          {
            canLoadNext: true,
            canLoadPrevious: true,
            commentsPerPage: 10,
            currentPage: 8,
            previousPage: 7,
            querySnapshot: QUERY_SNAPSHOT_MOCK,
            totalNbComments: 100,
            totalNbPages: 10,
          },
          {
            type: "LOAD_OLDER",
          }
        )
      ).toStrictEqual({
        canLoadNext: false,
        canLoadPrevious: true,
        commentsPerPage: 10,
        currentPage: 9,
        firstItemIndex: 90,
        lastItemIndex: 99,
        previousPage: 8,
        querySnapshot: QUERY_SNAPSHOT_MOCK,
        totalNbComments: 100,
        totalNbPages: 10,
      });
    });

    test("Given last page, when loads previous, should return input state unchanged", () => {
      expect(
        firestorePaginationReducer(
          {
            canLoadNext: false,
            canLoadPrevious: true,
            commentsPerPage: 10,
            currentPage: 9,
            previousPage: 8,
            querySnapshot: QUERY_SNAPSHOT_MOCK,
            totalNbComments: 100,
            totalNbPages: 10,
          },
          {
            type: "LOAD_OLDER",
          }
        )
      ).toStrictEqual({
        canLoadNext: false,
        canLoadPrevious: true,
        commentsPerPage: 10,
        currentPage: 9,
        firstItemIndex: 90,
        lastItemIndex: 99,
        previousPage: 8,
        querySnapshot: QUERY_SNAPSHOT_MOCK,
        totalNbComments: 100,
        totalNbPages: 10,
      });
    });
  });

  /** ---------------------------------------------
   * Load newer
   * ----------------------------------------------- */

  describe("LOAD_NEWER", () => {
    test("Given first page, when loads previous, should return input state unchanged", () => {
      expect(
        firestorePaginationReducer(
          {
            canLoadPrevious: false,
            canLoadNext: true,
            totalNbComments: 100,
            commentsPerPage: 10,
            currentPage: 0,
            previousPage: 0,
            totalNbPages: 10,
            querySnapshot: QUERY_SNAPSHOT_MOCK,
          },
          {
            type: "LOAD_NEWER",
          }
        )
      ).toStrictEqual({
        canLoadPrevious: false,
        canLoadNext: true,
        totalNbComments: 100,
        commentsPerPage: 10,
        currentPage: 0,
        previousPage: 0,
        firstItemIndex: 0,
        lastItemIndex: 9,
        totalNbPages: 10,
        querySnapshot: QUERY_SNAPSHOT_MOCK,
      });
    });

    test("Given page 3, when loads previous, returns correct values", () => {
      expect(
        firestorePaginationReducer(
          {
            canLoadNext: true,
            canLoadPrevious: true,
            commentsPerPage: 10,
            currentPage: 3,
            previousPage: 4,
            querySnapshot: QUERY_SNAPSHOT_MOCK,
            totalNbComments: 100,
            totalNbPages: 10,
          },
          {
            type: "LOAD_NEWER",
          }
        )
      ).toStrictEqual({
        canLoadNext: true,
        canLoadPrevious: true,
        commentsPerPage: 10,
        currentPage: 2,
        firstItemIndex: 20,
        lastItemIndex: 29,
        previousPage: 3,
        querySnapshot: QUERY_SNAPSHOT_MOCK,
        totalNbComments: 100,
        totalNbPages: 10,
      });
    });

    test("Given second page, when loads next, should disable `canLoadPrevious`", () => {
      expect(
        firestorePaginationReducer(
          {
            canLoadNext: true,
            canLoadPrevious: true,
            commentsPerPage: 10,
            currentPage: 1,
            previousPage: 2,
            querySnapshot: QUERY_SNAPSHOT_MOCK,
            totalNbComments: 100,
            totalNbPages: 10,
          },
          {
            type: "LOAD_NEWER",
          }
        )
      ).toStrictEqual({
        canLoadNext: true,
        canLoadPrevious: false,
        commentsPerPage: 10,
        currentPage: 0,
        firstItemIndex: 0,
        lastItemIndex: 9,
        previousPage: 1,
        querySnapshot: QUERY_SNAPSHOT_MOCK,
        totalNbComments: 100,
        totalNbPages: 10,
      });
    });
  });
});
