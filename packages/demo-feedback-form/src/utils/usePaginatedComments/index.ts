import { useContext, useEffect, useReducer } from "react";
import { FirebaseContext } from "@alexmcgovern/firebase";
import type { FirebaseApp } from "firebase/app";
import type { FirestoreError } from "firebase/firestore";
import { collection, getCountFromServer } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import type { CommentShape } from "../../types";
import { firestoreCommentsConverter } from "./utils/firestoreConverter";
import { firestorePaginationReducer } from "./utils/firestorePaginationReducer";

interface UsePaginatedCommentsArgs {
  commentsPerPage: number;
  firebaseApp: FirebaseApp;
}

export interface PaginatedCommentsState {
  canLoadNext: boolean;
  canLoadPrevious: boolean;
  comments?: Array<CommentShape>;
  error?: FirestoreError;
  indexOfFirstInCursor: number;
  indexOfLastInCursor: number;
  initialize: () => void;
  isLoading?: boolean;
  loadNext: () => void;
  loadPrevious: () => void;
  pageNbCurrent: number;
  pageNbPrevious: number;
  setCommentsPerPage?: (perPage: number) => void;
  totalNbComments?: number;
  totalNbPages?: number;
}

export function usePaginatedComments({
  commentsPerPage,
}: UsePaginatedCommentsArgs): PaginatedCommentsState {
  const { firestore } = useContext(FirebaseContext);

  /** ---------------------------------------------
   * Track pagination state
   * ----------------------------------------------- */

  const [state, dispatch] = useReducer(firestorePaginationReducer, {
    commentsPerPage,
    collectionRef: collection(firestore, "feedback").withConverter(
      firestoreCommentsConverter
    ),
  });

  /** ---------------------------------------------
   * Run query and listen for changes
   * ----------------------------------------------- */
  const [docsSnapshot, isLoading, error] = useCollection<CommentShape>(
    state.query,
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  /** ---------------------------------------------
   * Init on mount
   * ----------------------------------------------- */
  useEffect(() => {
    dispatch({ type: "INITIALISE" });
  }, []);

  /** ---------------------------------------------
   * Sync snapshot & total count to state
   * ----------------------------------------------- */
  useEffect(() => {
    getCountFromServer(collection(firestore, "feedback")).then(
      (totalCountResponse) => {
        const totalNbComments = totalCountResponse.data().count;

        return dispatch({
          type: "UPDATE_DOCS",
          payload: {
            querySnapshot: docsSnapshot,
            totalNbComments,
          },
        });
      }
    );
  }, [docsSnapshot, firestore]);

  return {
    /** Firestore data & query state */
    comments: state.querySnapshot?.docs.map((doc) => {
      return { ...doc.data(), documentRef: doc.ref };
    }),
    error,
    isLoading,

    /** Pagination vars */
    canLoadNext: state.canLoadNext || false,
    canLoadPrevious: state.canLoadPrevious || false,
    indexOfFirstInCursor: state.indexOfFirstInCursor || 0,
    indexOfLastInCursor: state.indexOfLastInCursor || 0,
    pageNbCurrent: state.pageNbCurrent || 0,
    pageNbPrevious: state.pageNbPrevious || 0,
    totalNbComments: state.totalNbComments || 0,
    totalNbPages: state.totalNbPages || 0,

    /** Functions */
    loadNext: () => {
      dispatch({ type: "LOAD_OLDER" });
    },
    loadPrevious: () => {
      dispatch({ type: "LOAD_NEWER" });
    },
    initialize: () => {
      return dispatch({ type: "INITIALISE" });
    },
    setCommentsPerPage: (perPage: number) => {
      return dispatch({
        type: "SET_PER_PAGE",
        payload: { commentsPerPage: perPage },
      });
    },
  };
}
