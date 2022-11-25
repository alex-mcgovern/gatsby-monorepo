import { useEffect, useState } from "react";
import type { Metric } from "web-vitals";
import { getCLS, getFCP, getFID, getLCP, getTTFB } from "web-vitals";

export const useWebVitals = () => {
  const [CLS, setCLS] = useState<Metric>();
  const [FCP, setFCP] = useState<Metric>();
  const [FID, setFID] = useState<Metric>();
  const [LCP, setLCP] = useState<Metric>();
  const [TTFB, setTTFB] = useState<Metric>();

  useEffect(() => {
    getCLS(setCLS);
    getFCP(setFCP);
    getLCP(setLCP);
    getFID(setFID);
    getTTFB(setTTFB);
  }, []);

  return { CLS, FCP, FID, LCP, TTFB };
};
