import { useState } from "react";

const UseStateHook = () => {
  const [counter, setCounter] = useState(0);

  const onIncreaseHandler = () => {
    setCounter((prev) => ++prev);
  };

  return (

    <section>
      <p>useState está alterando o estado de counter</p>
      <div>Clicks: {counter}</div>
      <button onClick={onIncreaseHandler}>Adicionar +1</button>
    </section>
  );
};

export default UseStateHook;
