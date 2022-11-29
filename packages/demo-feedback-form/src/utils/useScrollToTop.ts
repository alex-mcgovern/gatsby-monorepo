import { createRef, useEffect, useState } from "react";

interface UseScrollToTopArgs {
  currentPage?: number;
  totalNbComments?: number;
}

/**
 * Handle scrolling to top on page change whenever total count
 * or page number changes.
 *
 * This could be more graceful.
 * ToDo(feedback-form): Refine "scroll to top" behaviour
 */
export function useScrollToTop({
  currentPage,
  totalNbComments,
}: UseScrollToTopArgs) {
  const scrollRef = createRef<HTMLHRElement>();
  const [cachedPage, setCachedPage] = useState(0);
  const [cachedCount, setCachedCount] = useState(0);

  useEffect(() => {
    if (
      scrollRef.current &&
      (currentPage !== cachedPage || totalNbComments !== cachedCount)
    ) {
      if (currentPage) {
        setCachedPage(currentPage);
      }

      if (totalNbComments) {
        setCachedCount(totalNbComments);
      }
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [cachedCount, cachedPage, currentPage, scrollRef, totalNbComments]);

  return scrollRef;
}
