import { useEffect, useRef } from "react";
import { getCLS, getFCP, getFID, getLCP, getTTFB } from "web-vitals";

const useWebVitals = () => {
  const webVitalsRef = useRef({});

  const updateRef = ({ name, value }) => {
    webVitalsRef.current = { ...webVitalsRef.current, [name]: value };
  };

  useEffect(() => {
    getCLS(updateRef);
    getFID(updateRef);
    getFCP(updateRef);
    getLCP(updateRef);
    getTTFB(updateRef);
  });
  return webVitalsRef.current;
};

export default useWebVitals;
