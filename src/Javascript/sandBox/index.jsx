import { useRef, useState } from "react";
import { useOnMouseHold } from "../hooks/customHook/MyCustomHooks/useOnMouseHold";

export const SandBox = () => {
  const [counter, setCounter] = useState(0)
  const divRef = useRef();

  const func = () => {
    setCounter(counter=> counter +1)
  }

  const onHold = useOnMouseHold(divRef, func);

  return (
    <div>
      <button {...onHold} ref={divRef}>
        xxxx
      </button>
      {counter}
    </div>
  );
};
