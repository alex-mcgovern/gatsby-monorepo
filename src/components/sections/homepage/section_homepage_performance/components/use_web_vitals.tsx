import { useEffect, useRef, useState } from "react";
import { getCLS, getFCP, getFID, getLCP, getTTFB } from "web-vitals";

const useWebVitals = () => {
  const webVitalsRef = useRef({});

  const [webVitals, setWebVitals] = useState();

  const updateRef = ({ name, value }) => {
    webVitalsRef.current = { ...webVitalsRef.current, [name]: value };
  };

  const updateState = ({ name, value }) => {
    setWebVitals((current) => {
      return { ...current, [name]: value };
    });
  };

  useEffect(() => {
    getCLS(updateState);
    getFCP(updateState);
    getLCP(updateState);
    getFID(updateState);
    getTTFB(updateState);
  }, []);
  return webVitals;
};

export default useWebVitals;
