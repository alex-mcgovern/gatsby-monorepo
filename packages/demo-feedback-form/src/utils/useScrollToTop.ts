import { createRef, useEffect, useState } from "react";

interface UseScrollToTopArgs {
  pageNbCurrent?: number;
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
  pageNbCurrent,
  totalNbComments,
}: UseScrollToTopArgs) {
  const scrollRef = createRef<HTMLHRElement>();
  const [cachedPageNb, setCachedPage] = useState(0);

  useEffect(() => {
    if (scrollRef.current && pageNbCurrent !== cachedPageNb) {
      if (pageNbCurrent !== undefined) {
        setCachedPage(pageNbCurrent);
      }

      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [cachedPageNb, pageNbCurrent, scrollRef, totalNbComments]);

  return scrollRef;
}
