import { useState } from "react";

const UseStateHook = () => {
  const [counter, setCounter] = useState(0);

  const onIncreaseHandler = () => {
    setCounter((prev) => ++prev);
  };

  return (
    <div style={{background:"lightblue", padding: "20px"}}>
    <h2>useState</h2>
    <p>
        useState está alterando o estado de counter
      </p>
      <div>Clicks: {counter}</div>
      <button onClick={onIncreaseHandler}>Adicionar +1</button>
    </div>
  );
};

export default UseStateHook;
