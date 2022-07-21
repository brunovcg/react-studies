import { useDeferredValue, useState } from "react";
import SlowUI from "./slowUI";

const UseDeferedValueHook = () => {
  const [value, setValue] = useState(0);
  const deferredValue = useDeferredValue(value);

  const handleClick = () => {
    setValue(value + 1);
  };

  return (
    <section>
      <p>
        useDeferredValue(value) is hook that accepts a value and returns a new
        copy of the value that will defer to more urgent updates. The previous
        value is kept until urgent updates have completed. Then, the new value
        is rendered. This hook is similar to using debouncing or throttling to
        defer updates.
      </p>

      <div>
        <button onClick={handleClick}>Clicar</button>
        <div>Regular Value: {value}</div>
        <div>DeferredValue: {deferredValue}</div>

        <div>
          <h3>-Aqui uma UI lenta esta carregando 50 mil caracteres</h3>
          <SlowUI />
        </div>
      </div>
    </section>
  );
};

export default UseDeferedValueHook;
