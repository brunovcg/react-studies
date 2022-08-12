import { useEffect, useCallback } from "react";

export const useOnMouseHold = (ref, callback = () => {}) => {
  const startHold = () => {
    if (ref.current) return;
    ref.current = setInterval(() => {
      callback();
    }, 10);
  };

  const stopHold = useCallback(() => {
    if (ref.current) {
      clearInterval(ref.current);
      ref.current = null;
    }
  },[ref]);

  useEffect(() => {
    return () => stopHold();
  }, [stopHold]);

  return {
    onMouseDown: () => startHold(),
    onMouseUp: () => stopHold(),
    onMouseLeave: () => stopHold(),
  };
};
