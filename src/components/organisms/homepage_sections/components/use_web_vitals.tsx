import { useEffect, useState } from "react";
import { Metric, getCLS, getFCP, getFID, getLCP, getTTFB } from "web-vitals";

interface IWebVitalsState {
  [key: string]: Metric;
}

const useWebVitals = () => {
  const [webVitalsState, setWebVitalsState] = useState();

  const updateState = ({ name, value }) => {
    setWebVitalsState((currentState) => {
      return { ...currentState, [name]: value };
    });
  };

  useEffect(() => {
    getCLS(updateState);
  }, []);
  useEffect(() => {
    getFID(updateState);
  }, []);
  useEffect(() => {
    getFCP(updateState);
  }, []);
  useEffect(() => {
    getLCP(updateState);
  }, []);
  useEffect(() => {
    getTTFB(updateState);
  }, []);

  return webVitalsState;
};

export default useWebVitals;
