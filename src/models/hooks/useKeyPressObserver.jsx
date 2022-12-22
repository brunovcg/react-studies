import { useEffect, useState } from 'react';

/**
 * Custom hook to observe if a key state has changed.
 * @returns {object} An object with the key codes as properties and true/false as values.
 * True if the key is currently pressed. The key code is undefined if it was never pressed.
 * @see For a list of key codes: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
 */
function useKeypressObserver() {
  const [keysState, setKeysState] = useState({});

  useEffect(() => {
    const keyPressed = (e) => {
      const prevKeyState = !!keysState[e.code];
      const newKeyState = e.type === 'keydown';
      if (prevKeyState !== newKeyState) {
        setKeysState((prevState) => ({ ...prevState, [e.code]: newKeyState }));
      }
    };

    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyPressed);

    return () => {
      document.removeEventListener('keydown', keyPressed);
      document.removeEventListener('keyup', keyPressed);
    };
  }, [keysState]);

  return keysState;
}

export default useKeypressObserver;
