import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCounter] = useState(0);

  const [number, setNumber] = useState();

  const handleAdd = () => {
    setCounter(count + 1);
  };

  // Altera number quando count altera
  useEffect(() => {
    setNumber(count);
  }, [count]);

  // Altera number quando renderiza
  useEffect(() => {
    setNumber(count);
    /*eslint-disable-next-line*/
  }, []);

  return (
    <div style={{ background: "lightgreen", padding: "20px" }}>
      <h2>useEffect</h2>
      <p>
        useEfect está alterando o estado de 'number' como efeito colateral as
        alterações do statdo 'count' (olhar código)
      </p>
      <div>Clicks {number}</div>
      <button onClick={handleAdd}>Adicionar +1</button>
    </div>
  );
};

export default UseEffectHook;
