import React, { useEffect, useState } from "react";

interface CountdownWithCallbackProps {
  callback: () => void;
  seconds: number;
}

/**
 * Renders a countdown timer, and fires a callback once complete
 */
export function CountdownWithCallback({
  callback,
  seconds = 3,
}: CountdownWithCallbackProps) {
  const [countdownValue, setCountdownValue] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownValue((currentValue) => {
        return currentValue - 1;
      });
    }, 1000);

    if (countdownValue === 0) {
      callback();
      clearInterval(interval);
    }

    /** Cleanup on unmount, unwanted redirects would be *very* annoying */
    return () => {
      return clearInterval(interval);
    };
  });

  return <span>{countdownValue}</span>;
}
