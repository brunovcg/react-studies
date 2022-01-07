import { useDebugValue, useState } from "react";

const UseDebugValueHook = () => {
const [teste, setTeste] = useState(5)

  useDebugValue(`teste:${teste}`);

  return (
    <div style={{ background: "#ffd0b5", padding: "20px" }}>
      <h2>useDebugValue</h2>

      <p>Utilizado para criar uma label no REACT devTools no navegador, abra o nevagador e o console do ReactDevTools </p>
    </div>
  );
};

export default UseDebugValueHook;
