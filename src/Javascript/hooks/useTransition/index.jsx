import { useState, useTransition } from "react";
import SlowUI from "./slowUI";

const UseTransitionHook = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(50000);
  const [isPending, startTransition] = useTransition();
  const [load, setLoad] = useState(false);

  const handleClick = () => {
    setValue(value + 1);
    startTransition(() => setValue2(value2 + 1));
  };

  return (
    <section style={{ backgroundColor: "lightblue", padding: "20px" }}>
      <h2>
        useTransition <button onClick={() => setLoad(!load)}>LOAD</button>
      </h2>
      <p>
        useTransition() is a hook for transition. It returns the transition
        state and a function to start the transition. React state updates are
        classified into two categories: Urgent updates — They reflect direct
        interaction, such as typing, clicking, pressing, dragging, etc.
        Transition updates — They transition the UI from one view to another
      </p>
      {load && (
        <div>
          <button onClick={handleClick}>Click</button>
          <div style={{ color: isPending && "red" }}>
            {!isPending && <SlowUI value={value2} text={value} />}
            {isPending && <div>"Carregando um componente bem pesado"</div>}
          </div>
        </div>
      )}
    </section>
  );
};

export default UseTransitionHook;
