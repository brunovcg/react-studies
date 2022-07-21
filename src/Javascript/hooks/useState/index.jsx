import { useState } from "react";
import styles from "../styles";

const UseStateHook = () => {
  const [counter, setCounter] = useState(0);

  const onIncreaseHandler = () => {
    setCounter((prev) => ++prev);
  };

  return (
    <section style={styles.style18}>
      <h2>useState</h2>
      <p>useState está alterando o estado de counter</p>
      <div>Clicks: {counter}</div>
      <button onClick={onIncreaseHandler}>Adicionar +1</button>
    </section>
  );
};

export default UseStateHook;
