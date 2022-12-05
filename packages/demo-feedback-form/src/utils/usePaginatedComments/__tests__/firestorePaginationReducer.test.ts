import { QUERY_SNAPSHOT_MOCK } from "../__mocks__/QUERY_SNAPSHOT.mock";
import { firestorePaginationReducer } from "../utils/firestorePaginationReducer";

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
        pageNbCurrent: 0,
        pageNbPrevious: 0,
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
    pageNbCurrent: 0,
    pageNbPrevious: 0,
    totalNbPages: 0,
    indexOfFirstInCursor: 0,
    indexOfLastInCursor: 0,
  });
});

/** -----------------------------------------------------------------------------
 * Dispatch actions
 * ------------------------------------------------------------------------------- */

describe("Dispatch actions", () => {
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
            pageNbCurrent: 0,
            pageNbPrevious: 0,
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
        pageNbCurrent: 1,
        indexOfFirstInCursor: 10,
        indexOfLastInCursor: 19,
        pageNbPrevious: 0,
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
            pageNbCurrent: 2,
            pageNbPrevious: 3,
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
        pageNbCurrent: 3,
        indexOfFirstInCursor: 30,
        indexOfLastInCursor: 39,
        pageNbPrevious: 2,
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
            pageNbCurrent: 8,
            pageNbPrevious: 7,
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
        pageNbCurrent: 9,
        indexOfFirstInCursor: 90,
        indexOfLastInCursor: 99,
        pageNbPrevious: 8,
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
            pageNbCurrent: 9,
            pageNbPrevious: 8,
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
        pageNbCurrent: 9,
        indexOfFirstInCursor: 90,
        indexOfLastInCursor: 99,
        pageNbPrevious: 8,
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
            pageNbCurrent: 0,
            pageNbPrevious: 0,
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
        pageNbCurrent: 0,
        pageNbPrevious: 0,
        indexOfFirstInCursor: 0,
        indexOfLastInCursor: 9,
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
            pageNbCurrent: 3,
            pageNbPrevious: 4,
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
        pageNbCurrent: 2,
        indexOfFirstInCursor: 20,
        indexOfLastInCursor: 29,
        pageNbPrevious: 3,
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
            pageNbCurrent: 1,
            pageNbPrevious: 2,
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
        pageNbCurrent: 0,
        indexOfFirstInCursor: 0,
        indexOfLastInCursor: 9,
        pageNbPrevious: 1,
        querySnapshot: QUERY_SNAPSHOT_MOCK,
        totalNbComments: 100,
        totalNbPages: 10,
      });
    });
  });
});
