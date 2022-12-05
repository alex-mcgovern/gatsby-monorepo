import { useEffect, useMemo, useState } from "react";

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(() => {
    return new IntersectionObserver(([entry]) => {
      return setIsIntersecting(entry.isIntersecting);
    });
  }, []);

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
