import { useState, useMemo } from "react";

import styles from "../styles";

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [countMemo, setCountMemo] = useState(0);

  const myListMemoized = useMemo(() => {
    console.log(`-- MEMOIZED PRINTED: ${countMemo} --`);

    return `Essa é uma texto com memo ${countMemo}`;
  }, [countMemo]);

  const myList = () => {
    console.log(`-- Lista normal: ${count} --`);
    return `Lista sem memo - conter:${count}`;
  };

  return (
    <section>
      <button onClick={() => setCount((old) => old + 1)}>force render</button>
      <button
        onClick={() => {
          setCount((old) => old + 1);
          setCountMemo((old) => old + 1);
        }}
      >
        force render changing MEMO
      </button>
      <p>
        Diferentemente do useCallback, o useMemo memoiza a execução e resultado da função.
        Aqui duas listas, um com useMemo e um senha. Ao clicar nas renderizações
        forçadas repare quais os logs gerados. A lista com memo so é
        re-renderizada quando a varíavel no array de Dependência é alterada.
        Repare os contadores de renderização, olhe tb no console.log as funcoes
        sendo chamadas
      </p>

      <div style={styles.style12}>{myListMemoized}</div>
      <div style={styles.style12}>{myList()}</div>
    </section>
  );
};

export default UseMemoHook;
