import { useDebugValue, useState } from "react";
import styles from "../styles";

const UseDebugValueHook = () => {
  /*eslint-disable-next-line*/
  const [teste, setTeste] = useState(5);

  useDebugValue(`teste:${teste}`);

  return (
    <div style={styles.style4}>
      <h2>useDebugValue</h2>

      <p>
        Utilizado para criar uma label no REACT devTools no navegador, abra o
        nevagador e o console do ReactDevTools{" "}
      </p>
    </div>
  );
};

export default UseDebugValueHook;
