import { createRef, useEffect, useState } from "react";
import type { UsePaginatedCommentsStateShape } from "./usePaginatedComments";

/**
 * Handle scrolling to top on page change whenever total count
 * or page number changes.
 *
 * This could be more graceful.
 * ToDo(feedback-form): Refine "scroll to top" behaviour
 */
export function useScrollToTop(
  paginationState: UsePaginatedCommentsStateShape
) {
  const scrollRef = createRef<HTMLHRElement>();
  const [cachedPage, setCachedPage] = useState(0);
  const [cachedCount, setCachedCount] = useState(0);

  useEffect(() => {
    if (
      scrollRef.current &&
      (paginationState?.currentPage !== cachedPage ||
        paginationState?.totalNbComments !== cachedCount)
    ) {
      if (paginationState.currentPage) {
        setCachedPage(paginationState?.currentPage);
      }

      if (paginationState.totalNbComments) {
        setCachedCount(paginationState?.totalNbComments);
      }
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [
    cachedCount,
    cachedPage,
    paginationState.currentPage,
    paginationState.totalNbComments,
    scrollRef,
  ]);

  return scrollRef;
}
