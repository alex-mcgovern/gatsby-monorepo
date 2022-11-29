import { useCallback, useEffect, useReducer } from "react";
import type { FirebaseApp } from "firebase/app";
import type { FirestoreError } from "firebase/firestore";
import {
  collection,
  getCountFromServer,
  getFirestore,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import type { CommentShape } from "../types";
import { firestoreCommentsConverter } from "./firestoreConverter";
import type { PaginationStateShape } from "./firestorePaginationReducer";
import { firestorePaginationReducer } from "./firestorePaginationReducer";

interface UsePaginatedCommentsArgs {
  commentsPerPage: number;
  firebaseApp: FirebaseApp;
}

export interface UsePaginatedCommentsStateShape extends PaginationStateShape {
  documents?: Array<CommentShape>;
  setPerPage?: (perPage: number) => void;
  error?: FirestoreError;
  loading?: boolean;
  loadNext: () => void;
  loadPrevious: () => void;
}

export function usePaginatedComments({
  commentsPerPage,
  firebaseApp,
}: UsePaginatedCommentsArgs): UsePaginatedCommentsStateShape {
  /** ---------------------------------------------
   * Track pagination state
   * ----------------------------------------------- */

  const [
    {
      currentPage,
      previousPage,
      totalNbComments,
      canLoadPrevious,
      canLoadNext,
      firstItemIndex,
      lastItemIndex,
      collectionRef,
      totalNbPages,
      cachedCommentsSnapshot,
      query: customQuery,
    },
    dispatch,
  ] = useReducer(firestorePaginationReducer, {
    commentsPerPage,
    collectionRef: collection(
      getFirestore(firebaseApp),
      "feedback",
      "data",
      "comments"
    ).withConverter(firestoreCommentsConverter),
  });

  /** ---------------------------------------------
   * Initialise hook & sync snapshot
   * ----------------------------------------------- */

  /** Run query and listen for changes */
  const [commentsSnapshot, loading, error] = useCollection<CommentShape>(
    customQuery,
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  /** Init on mount */
  useEffect(() => {
    dispatch({ type: "INITIALISE" });
  }, []);

  /** Sync snapshots to state reducer */
  useEffect(() => {
    if (commentsSnapshot && commentsSnapshot.docs?.length > 0) {
      dispatch({
        type: "CACHE_DOCS",
        payload: { cachedCommentsSnapshot: commentsSnapshot },
      });
    }
  }, [collectionRef, commentsSnapshot]);

  /** ---------------------------------------------
   * Get total count
   * ----------------------------------------------- */

  useEffect(() => {
    if (!collectionRef) return;

    getCountFromServer(collectionRef).then((response) => {
      return dispatch({
        type: "SET_COUNT",
        payload: { totalNbComments: response.data().count },
      });
    });
  }, [collectionRef, firebaseApp]);

  /** ---------------------------------------------
   * Setup handlers
   * ----------------------------------------------- */

  const loadNext = useCallback(() => {
    dispatch({ type: "LOAD_OLDER" });
  }, []);

  const loadPrevious = useCallback(() => {
    dispatch({ type: "LOAD_NEWER" });
  }, []);

  const setPerPage = useCallback((perPage: number) => {
    return dispatch({
      type: "SET_PER_PAGE",
      payload: { commentsPerPage: perPage },
    });
  }, []);

  return {
    canLoadPrevious,
    canLoadNext,
    commentsPerPage,
    documents: cachedCommentsSnapshot?.docs.map((doc) => {
      return { ...doc.data(), documentRef: doc.ref };
    }),
    totalNbComments,
    setPerPage,
    error,
    loading,
    firstItemIndex,
    lastItemIndex,
    currentPage,
    previousPage,
    loadNext,
    loadPrevious,
    totalNbPages,
  };
}
