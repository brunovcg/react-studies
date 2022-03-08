import { useEffect, useState } from "react";
import styles from "../styles";

const UseEffectHook = () => {
  const [count, setCounter] = useState(0);

  const [number, setNumber] = useState(0);

  const handleAdd = () => {
    setCounter(count + 1);
  };

  // Altera number quando count altera
  useEffect(() => {
    setNumber(count);
  }, [count]);

  // Altera number quando renderiza
  useEffect(() => {
    setNumber((count) => count);
  }, []);

  return (
    <div style={styles.style5}>
      <h2>useEffect</h2>
      <p>
        useEfect está alterando o estado de 'number' como efeito colateral as
        alterações do statdo 'count' (olhar código)
      </p>
      <div>Clicks = {number}</div>
      <button onClick={handleAdd}>Adicionar +1</button>
    </div>
  );
};

export default UseEffectHook;
