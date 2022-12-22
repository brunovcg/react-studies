import { useEffect, useCallback, MutableRefObject } from 'react';

export const useOnMouseHold = (
  ref: MutableRefObject<unknown>,
  callback: () => void
) => {
  const startHold = () => {
    if (ref.current) return;
    ref.current = setInterval(() => {
      callback();
    }, 10);
  };

  const stopHold = useCallback(() => {
    if (ref.current) {
      clearInterval(ref.current as NodeJS.Timeout);
      ref.current = null;
    }
  }, [ref]);

  useEffect(() => {
    return () => stopHold();
  }, [stopHold]);

  return {
    onMouseDown: () => startHold(),
    onMouseUp: () => stopHold(),
    onMouseLeave: () => stopHold(),
  };
};
