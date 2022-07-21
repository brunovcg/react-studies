import { useDebugValue, useState } from "react";

const UseDebugValueHook = () => {
  /*eslint-disable-next-line*/
  const [teste, setTeste] = useState(5);

  useDebugValue(`teste:${teste}`);

  return (
    <section>
      <p>
        Utilizado para criar uma label no REACT devTools no navegador, abra o
        nevagador e o console do ReactDevTools{" "}
      </p>
    </section>
  );
};

export default UseDebugValueHook;
