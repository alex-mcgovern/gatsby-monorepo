import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { FirebaseContext } from "@alexmcgovern/firebase";
import {
  collection,
  endBefore,
  getCountFromServer,
  getFirestore,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

interface UsePaginatedCommentsArgs {
  commentsPerPage: number;
}

export interface PaginationStateShape {
  current: number;
  previous: number;
}

export function usePaginatedComments({
  commentsPerPage,
}: UsePaginatedCommentsArgs) {
  const { firebaseApp } = useContext(FirebaseContext);

  const collectionRef = useMemo(() => {
    if (firebaseApp) {
      return collection(
        getFirestore(firebaseApp),
        "feedback",
        "data",
        "comments"
      );
    }
    return undefined;
  }, [firebaseApp]);

  /** -----------------------------------------------------------------------------
   * Query comments with react-firebase-hooks/firestore
   *
   * Note: We are using state to store query function, not setting the initial state with
   * result of a function. This is so we can update it later and re-render to trigger hook.
   * ------------------------------------------------------------------------------- */

  const [queryFunction, setCachedQuery] = useState(() => {
    return () => {
      if (collectionRef) {
        return query(
          collectionRef,
          orderBy("created", "desc"),
          limit(commentsPerPage)
        );
      }
      return undefined;
    };
  });

  const [commentsValues, commentsLoading, commentsError] = useCollection(
    queryFunction(),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const lastVisibleComment =
    commentsValues?.docs[commentsValues.docs.length - 1];

  const firstVisibleComment = commentsValues?.docs[0];

  const transformedComments = commentsValues?.docs.map((doc) => {
    return { ...doc.data(), documentRef: doc.ref };
  });

  /** -----------------------------------------------------------------------------
   * Manually track pagination state, attempt to sync with firestore state
   * We need this to disable buttons and prevent trying to access out of range
   * documents. We'll increment/decrement these via the pagination buttons.
   *
   * This isn't ideal, as this could potentially fall out of sync, but I wasn't
   * able to find a better & simpler alternative.
   *
   * Infinite scrolling might be an option, but I'm not a fan of that  pattern as
   * it can cause performance issues when loading in large amounts of data, and the
   * UX can be bad without being handled correctly (e.g. scroll to top handling).
   *
   * Windowing might be a better design choice, but probably a bit too complex for this small project.
   * ------------------------------------------------------------------------------- */

  const [commentsCount, setCommentsCount] = useState<number>(0);
  const [paginationState, setPaginationState] = useState<PaginationStateShape>({
    current: 0,
    previous: 0,
  });

  useEffect(() => {
    if (collectionRef) {
      getCountFromServer(collectionRef).then((response) => {
        return setCommentsCount(response.data().count);
      });
    }
  }, [collectionRef]);

  const { totalPages, canLoadOlderComments, canLoadNewerComments } =
    useMemo(() => {
      const totalNbPages =
        commentsCount && Math.floor(commentsCount / commentsPerPage);

      return {
        totalPages: totalNbPages,
        canLoadOlderComments:
          lastVisibleComment && paginationState.current < totalNbPages,
        canLoadNewerComments:
          firstVisibleComment && paginationState.current > 0,
      };
    }, [
      commentsCount,
      commentsPerPage,
      paginationState,
      firstVisibleComment,
      lastVisibleComment,
    ]);

  /** -----------------------------------------------------------------------------
   * Handle increment / decrement
   *
   * For each, create a new query function and trigger re-render by updating state.
   * Do checking to make sure we are not trying to access documents that are out of range.
   * ------------------------------------------------------------------------------- */

  const loadOlderComments = useCallback(() => {
    if (canLoadOlderComments) {
      setPaginationState((paginationStateState) => {
        return {
          current: paginationStateState.current + 1,
          previous: paginationStateState.current,
        };
      });

      setCachedQuery(() => {
        return () => {
          if (collectionRef) {
            return query(
              collectionRef,
              orderBy("created", "desc"),
              startAfter(lastVisibleComment),
              limit(commentsPerPage)
            );
          }
          return undefined;
        };
      });
    }
  }, [
    canLoadOlderComments,
    collectionRef,
    commentsPerPage,
    lastVisibleComment,
  ]);

  const loadNewerComments = useCallback(() => {
    if (canLoadNewerComments) {
      setPaginationState((paginationStateState) => {
        return {
          current: paginationStateState.current - 1,
          previous: paginationStateState.current,
        };
      });

      setCachedQuery(() => {
        return () => {
          if (collectionRef) {
            return query(
              collectionRef,
              orderBy("created", "desc"),
              endBefore(firstVisibleComment),
              limit(commentsPerPage)
            );
          }
          return undefined;
        };
      });
    }
  }, [
    canLoadNewerComments,
    collectionRef,
    commentsPerPage,
    firstVisibleComment,
  ]);

  /** -----------------------------------------------------------------------------
   * Return values
   * ------------------------------------------------------------------------------- */

  return {
    canLoadNewerComments,
    canLoadOlderComments,
    comments: transformedComments,
    commentsCount,
    commentsError,
    commentsLoading,
    paginationState,
    loadNewerComments,
    loadOlderComments,
    totalPages,
  };
}
